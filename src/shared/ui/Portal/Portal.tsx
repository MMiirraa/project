import React, {
    ReactNode, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    // то что телепортируем
    children?: ReactNode;
    // куда телепортируем
    element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = (props: PortalProps) => {
    const {
        children,
        element,
    } = props;
    const [container, setContainer] = useState<HTMLElement>();

    useEffect(() => {
        if (!element) {
            const app = document.querySelector('.app') as HTMLElement;
            setContainer(app);
        }
    }, [element]);

    if (element) return createPortal(children, element);
    if (container) return createPortal(children, container);
    return null;
};
