import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    // className?: string;
    // children?: ReactNode
}

export const BugButton: React.FC<BugButtonProps> = (props: BugButtonProps) => {
    const { t } = useTranslation();
    const [error, setError] = React.useState(false);

    const onThrow = () => setError(true);

    React.useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('Создать ошибку')}
        </Button>
    );
};
