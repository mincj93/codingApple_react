import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"; // 화면전환 애니메이션

import MainPage from './MainPage';
import SubPage from './SubPage';

const App = () => {

	return (
		<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPage />} />
					  	<Route path="/SubPage" element={<SubPage />} />
				  	</Routes>
	  	</BrowserRouter>
	);
};

export default App;