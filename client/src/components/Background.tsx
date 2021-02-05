import React from "react";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div style={{ backgroundColor: "red" }}>{children}</div>;
};

export default Background;
