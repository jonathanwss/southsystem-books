/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import ShellBar from './src/Components/ShellBar';


interface IProps {}

const SouthSystemApp:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <ShellBar />
        </React.Fragment>
    );
};

export default SouthSystemApp;
