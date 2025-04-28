import { ReactNode } from 'react';

interface DefaultProps {
    tag: "lg" | "md" | "sm" | "purple"
    children: ReactNode;
}

const Default = ({ tag: Tag ="lg", children }: DefaultProps) => {
  const baseClasses = {
    lg: text-[3rem] md:text-[8rem] leading-[4.5rem] md:leading-[12rem] font-bold
  }
    return <Tag className={`${baseClasses[Tag] || ''}`}>{children}</Tag>;
};

export default Default;
