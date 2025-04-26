import { ReactNode } from 'react';

interface DefaultProps {
    tag: "lg" | "md" | "sm" | "purple"
    children: ReactNode;
}

const Default = ({ tag: Tag ="lg", children }: DefaultProps) => {
  const baseClasses = {
    lg:
  }
    return <Tag class>{children}</Tag>;
};

export default Default;
