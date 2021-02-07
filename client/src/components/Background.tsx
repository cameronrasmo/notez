import React from "react";
import Orbs from "./Orbs";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='background'>
            {children}
            <Orbs />
        </div>
    );
};

export default Background;
