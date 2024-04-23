import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search';


function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerLeft'>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className='home_headerRight'>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
           <AppsIcon/>
           <Avatar />
           
        </div>
      </div>

      <div className='home_body'>
     <center>
      <img src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"></img>
      </center> 
      <div className='home_inputContainer'>
        <Search />
      </div>
       </div>
    </div>
  )
}

export default Home
