import { Children } from "react";

interface default {
  Children: reactNode;
}

const Default = ({ children }) => {
    return <button>{children}</button>;
};

export default Default;
