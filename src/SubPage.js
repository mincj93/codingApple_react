import React from 'react';
import { motion } from "framer-motion";

import {SubComponent} from './SubComponent';
import SubStyle from './SubStyle.module.css';
        
const SubPage = () => {
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
        <>
        <div className={SubStyle.wrapper}>
            <div className={SubStyle.headerBox}>피그마-리액트 협업</div>
            <motion.div 
            className={SubStyle.btnWrapper}
            variants={routeVariants}
            initial="initial"
            animate="final">
                {/* <a href='/SubPage'><Component /></a> */}
                <SubComponent page="/"/>
            </motion.div>
        </div>
        </>
	);
};

export default SubPage;