import React, { ReactNode } from "react";

interface defaultProps {
  Children: reactNode;
}

const Default = ({ children }: defaultProps) => {
    return <button>{children}</button>;
};

export default Default;
