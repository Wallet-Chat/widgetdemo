import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import BoredApeYC from './pages/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3047';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3047' element={<BoredApeYC/>} />
	</Routes>
	</Router>
);
}

export default App;
