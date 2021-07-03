import React from 'react';
import Tilt from 'react-tilt';
import icon from './icon.png';
import './Logo.css';
const Logo = () =>{
	return (
	   <div className='ma4 mt0'>
		 <Tilt className="Tilt br1 shadow-3" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
		   <div className="Tilt-inner"><img style={{paddingTop:'35px'}} alt='logo' src ={icon} />
		   </div>
		  </Tilt>
	   </div>
	 );
}
export default Logo;