import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './homepage.css';
import ColorTabs from './tabbar';
import MediaCard from './card';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <div>








    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size='ex-large'
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            noWrap
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },textAlign:'center' }}
            >
            <h1>Travel <span>Express</span></h1>
            
          </Typography>
          
          <Search>
            <SearchIconWrapper>
                

              <SearchIcon />
            
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <br></br>
          <div className='homelogin'>
            <Link to='/reg'>
            Sign<span id='sp1'>In</span>/
            </Link>
            
            <Link to='/re'>
            Log<span id='sp1'>In</span>
            </Link>
            </div>
        
        </Toolbar>
      </AppBar>
    </Box>
    <ColorTabs/>
    

      <div id="homemain">
            <h2>Travel Beyond<br></br><br></br>The Boundaries<span id='travel'>!!!</span></h2>
            
      </div>
    <MediaCard/>
    <hr id='hhr'></hr>
    <footer class="site-footer" >
      <div id='foot'>
      <div id='cont'>
      <h2 id='contact'>Contact us</h2>
      <p id='con'>Contact: 9751246XXX</p>
      <p id='con'>E-mail: travelexp@gmail.com</p>
      </div> 
      
     
      <div id='aboutus'>
      <h2 id='about'>About us</h2>
      <p id='ab'>Terms & condition</p>
      <p id='ab'>Cookies policy</p>
      <p id='ab'>Privacy</p>
      </div>
      </div>
          <div class="social-icons" style={{marginLeft:"35%"}}>
              <a href="#" class="text-white"><InstagramIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><FacebookIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><LinkedInIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><TwitterIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white2"><YouTubeIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white3"><WhatsAppIcon style={{height:"50px",width:"70px"}}/></a>
          </div>
</footer>
    

    </div>
    
  );
}