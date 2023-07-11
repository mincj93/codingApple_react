import React from 'react';
import { motion } from "framer-motion";
import {useNavigate ,useLocation } from 'react-router-dom'

import {MainComponent} from './MainComponent';
import "./style.css";


const MainPage = () => {

    let navigate = useNavigate();

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
                <MainComponent page="./SubPage"/>
            </motion.div>
        </div>
        </>
	);
};

export default MainPage;