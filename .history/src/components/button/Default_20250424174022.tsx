import { ReactNode } from 'react';

interface DefaultProps {
    tag: "lg" | "md" | "sm" | "purple"
    children: ReactNode;
}
// 태그 넣자
const Default = ({ tag, children }: DefaultProps) => {
    return <button tag=>{children}</button>;
};

export default Default;
