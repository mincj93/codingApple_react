import React from 'react';
import { motion } from "framer-motion";
import "./style.css";

import {Component} from './Component';
// import "./style_copy.css";
        
const SubPage = () => {
	const routeVariants = {
        initial: {
            x: '100%',
            top:'50%',
            
        },
        final: {
            x: '0',
            left: '50%',
            position:'relative',
            width:'100%',
            height:'100vh',
            transition: {
                default: { duration: 0.5 }
            }
        }
    }

	return (
        <div className="wrapper">
            <div className="headerBox">피그마-리액트 협업</div>
            <div className="actionBox">
            <motion.div 
            variants={routeVariants}
            initial="initial"
            animate="final">
                {/* <a href='/'><Component /></a> */}
                <Component page='./MainPage'/>
            </motion.div>
        </div>
    </div>
	);
};

export default SubPage;