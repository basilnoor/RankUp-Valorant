import { Link, Text, Flex, Divider, Box } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer() {

    return (
        <Flex bg="#eee" h="100%" lineHeight="2" align="center" justifyContent="center" fontSize="13" marginTop="auto" paddingTop="5%" >
            <Text color="#000" align="left">
                Proudly created by Basil Noor &copy; 2022
            </Text>
            <Box paddingLeft="2%">
                <Link href="https://github.com/basilnoor" isExternal>
                    <BsGithub />
                </Link>
            </Box>
            <Box paddingLeft="1%">
                <Link href="https://www.linkedin.com/in/basilnoor/" isExternal>
                    <BsLinkedin />
                </Link>
            </Box>
        </Flex >
    );
}

export default Footer;