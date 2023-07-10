import React from 'react';
import { motion } from "framer-motion";
import "./style.css";

import {Component} from './Component';
import "./style_copy.css";


const MainPage = () => {
    const routeVariants = {
        initial: {
            x: '100vh'
        },
        final: {
            x: '0vh',
            transition: {
                default: { duration: 0.5 }
            }
        }
    }

	return (
        <>
        <div className="wrapper">
            <div className="headerBox">피그마-리액트 협업</div>
            <div className="actionBox">
                <motion.div 
                variants={routeVariants}
                initial="initial"
                animate="final">
                    <a href='/SubPage'><Component /></a>
                </motion.div>
            </div>
        </div>
        </>
	);
};

export default MainPage;