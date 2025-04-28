import { Children } from "react";

interface {
  Children: reactNode;
}

const Default = ({ children }) => {
    return <button>{children}</button>;
};

export default Default;
