import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css';

import { Image, Box, Link } from '@chakra-ui/react'
import RedditLogo from '../images/val_reddit_logo.png';



function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <Box className="navHead" boxShadow="dark-lg" >
            <Box w="3rem" >
                <Link href="https://www.reddit.com/r/VALORANT/" isExternal>
                    <Image src={RedditLogo} />
                </Link>
            </Box>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/agents">Agents</a>
                <a href="/weapons">Weapons</a>
                <a href="/maps">Maps</a>
                <a href="/top-picks">TopPicks</a>
                <a href="/resources">Resources</a>
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