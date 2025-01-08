import * as React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from 'react-icons/md';


function Footer() {

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <Box >
        <BottomNavigation sx={{ bgcolor: 'info.main', maxHeight:'50px' }}>
          <BottomNavigationAction sx={{ color: 'white'  }} href="tel:+918184959300" label="+91-8184959300" title='phone' icon={<MdPhone size={25} />} />
          <BottomNavigationAction sx={{ color: 'white' }} href="mailto:bhanuprakashmannem20@gmail.com" label="bhanuprakashmannem20@gmail.com" title='Email' icon={<MdEmail size={25} />} />
          <BottomNavigationAction sx={{ color: 'white' }} href="https://www.linkedin.com/in/mannembhanuprakash" label="Bhanu Prakash" target='_blank' title='LinkedIn' icon={<FaLinkedinIn size={25} />} />
        </BottomNavigation>
      </Box>
    </div>


  );
}
export default Footer;