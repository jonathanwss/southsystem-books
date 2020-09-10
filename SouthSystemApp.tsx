/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import ShellBar from './src/Components/ShellBar';
import { SafeAreaView } from 'react-native';
import Launcher from './src/Components/Launcher';


interface IProps {}

const SouthSystemApp:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <ShellBar />
           <SafeAreaView>
               <Launcher>
                   
               </Launcher>
           </SafeAreaView>
        </React.Fragment>
    );
};

export default SouthSystemApp;
