import { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

import '../styles/Navbar.css';
import RedditLogo from '../images/val_reddit_logo.png';

import { Image, Box, Link } from '@chakra-ui/react'

function Navbar() {

    // Creating responsive NavBar (Hamburger menu)
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <Box className="navHead" boxShadow="dark-lg">
            <Box w="3rem" >
                <Link href="https://www.reddit.com/r/VALORANT/" isExternal>
                    <Image borderRadius="full" shadow="lg" src={RedditLogo} />
                </Link>
            </Box>
            <nav ref={navRef}>
                <NavLink to='/' exact activeClassName="active">Home</NavLink>
                <NavLink to='/agents' exact activeClassName="active">Agents</NavLink>
                <NavLink to='/weapons' exact activeClassName="active">Weapons</NavLink>
                <NavLink to='/maps' exact activeClassName="active">Maps</NavLink>
                <NavLink to='/resources' exact activeClassName="active">Resources</NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </Box>
    );
}

export default Navbar;