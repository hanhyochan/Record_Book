import { ReactNode } from 'react';

interface DefaultProps {
    children: ReactNode;
}

const Default = ({ children }: DefaultProps) => {
    return <button>{children}</button>;
};

export default Default;
