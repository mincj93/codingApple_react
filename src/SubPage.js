import React from 'react';
import { motion } from "framer-motion";
import {useNavigate ,useLocation } from 'react-router-dom'

import {SubComponent} from './SubComponent';
        
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
        <div className="wrapper">
            <div className="headerBox">피그마-리액트 협업</div>
            <motion.div 
            className='btnWrapper'
            variants={routeVariants}
            initial="initial"
            animate="final">
                {/* <a href='/SubPage'><Component /></a> */}
                <SubComponent page="/" buttonClassName='button'/>
            </motion.div>
        </div>
        </>
	);
};

export default SubPage;