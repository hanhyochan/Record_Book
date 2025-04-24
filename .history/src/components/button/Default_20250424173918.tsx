import { ReactNode } from 'react';

interface DefaultProps {
    tag: "lg"
    children: ReactNode;
}
// 태그 넣자
const Default = ({ children }: DefaultProps) => {
    return <button>{children}</button>;
};

export default Default;
