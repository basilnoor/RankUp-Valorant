import ValLogo from '../images/val_logo.png';
import '../styles/Navbar.css';

import { Image, Box, Link } from '@chakra-ui/react'

function ValTitle() {
    return (
        <Box className='ValHead' bg="#white" paddingBottom="3%">
            <Box display="flex" w="25%">
                <Link href="https://playvalorant.com/" isExternal>
                    <Image src={ValLogo} />
                </Link>
            </Box>
        </Box>
    );
}

export default ValTitle;