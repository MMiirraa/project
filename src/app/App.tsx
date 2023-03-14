import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Modal } from 'shared/ui/Modal/Modal';
import { Sidebar } from 'widgets/Sidebar';
import { PageLouder } from 'widgets/PageLouder/ui/PageLouder';
import { AppRouter } from './providers/routers';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLouder />}>
                <Navbar />
                <button onClick={() => setIsOpen(true)}>show modal</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem accusantium recusandae eum aliquid?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
