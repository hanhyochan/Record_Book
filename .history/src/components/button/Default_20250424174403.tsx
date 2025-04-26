import { ReactNode } from 'react';

interface DefaultProps {
    tag: "lg" | "md" | "sm" | "purple"
    children: ReactNode;
}

const Default = ({ tag, children }: DefaultProps) => {
  const baseClasses = {
    
  }
    return <button tag="lg">{children}</button>;
};

export default Default;
