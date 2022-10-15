import React, {useEffect, useState} from 'react';
import {IconButton, Zoom} from "@mui/material";
import KeyboardDoubleArrowUpOutlinedIcon
  from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

const UpButton = () => {
  const [activeUpButton, setActiveUpButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.scrollY > 100) {
        setActiveUpButton(true)
      } else {
        setActiveUpButton(false)
      }
    }
    window.addEventListener('scroll', handleResize);

    handleResize()

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Zoom in={activeUpButton}>
      <IconButton
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        sx={{
          position: 'fixed',
          top: '85%',
          left: '85%',
          p: '20px',
          transform: 'translate3d(-100%)',
          borderRadius: '50%',
          bgcolor: 'custom.grey',
          zIndex: 999
        }}>
        <KeyboardDoubleArrowUpOutlinedIcon fontSize='large'/>
      </IconButton>
    </Zoom>
  );
}

export default UpButton