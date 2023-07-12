import React from 'react';
import { motion } from "framer-motion";

import {MainComponent} from './MainComponent';
import MainStyle from "./MainStyle.module.css";

const MainPage = () => {


    const routeVariants = {
        initial: {
            x: '100%'
        },
        final: {
            x: '0',
            transition: {
                default: { duration: 0.5 }
            }
        }
    }

	return (
        <div className={MainStyle.wrapper}>
            <div className={MainStyle.headerBox}>피그마-리액트 협업</div>
            <motion.div 
            className={MainStyle.btnWrapper}
            variants={routeVariants}
            initial="initial"
            animate="final">
                {/* <a href='/SubPage'><Component /></a> */}
                <MainComponent page="./SubPage" buttonClassName='button'/>
            </motion.div>
        </div>
	);
};

export default MainPage;