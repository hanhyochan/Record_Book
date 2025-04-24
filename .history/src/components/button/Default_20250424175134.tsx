import { ReactNode } from 'react';

interface DefaultProps {
    tag: "lg" | "md" | "sm" | "purple"
    children: ReactNode;
}

const Default = ({ tag: Tag ="lg", children }: DefaultProps) => {
  const baseClasses = {
    lg: text
  }
    return <Tag className={`${baseClasses[Tag] || ''}`}>{children}</Tag>;
};

export default Default;
