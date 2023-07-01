import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){
  return (
    <div className='footer'>
      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100015057668538&mibextid=ZbWKwL" target="_blank"><FacebookRoundedIcon fontSize='large' className="icons" /></a>
        <a href="https://www.instagram.com/harshj2203/" target="_blank"><InstagramIcon fontSize='large' className="icons" /></a>
        <a href="https://twitter.com/HarshJa51414951" target="_blank"><TwitterIcon fontSize='large' className="icons"/></a>
        <a href="https://www.linkedin.com/in/harsh-jaiswal-378085226/" target="_blank"><LinkedInIcon fontSize='large' className="icons"/></a>
        <a href='https://github.com/harshj2203' target='_blank'><GitHubIcon fontSize='large' className='icons' /></a>
      </div>
      <div style={{marginTop:30 ,fontFamily:"Montserrat",fontSize:"20px",textShadow:"3px 3px 20px black", textAlign:"center"}}>© 2023 Harsh Jaiswal | All Rights Reserved</div>
    </div>
  )
}

export default Footer
