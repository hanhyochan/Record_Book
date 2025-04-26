import { Children } from "react";

interface defaultProps {
  Children: reactNode;
}

const Default = ({ children }) => {
    return <button>{children}</button>;
};

export default Default;
