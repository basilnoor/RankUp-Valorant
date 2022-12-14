import React from 'react';

import '../App.css'
import ResourcesBanner from '../images/resource2.jpg'

import { Box, Heading, Text, Image, Flex, Link } from '@chakra-ui/react'


export const Resources = () => {

    return (
        <>
            <Flex h="53vh" maxW="full" w="95vh" bg="#BD3944" align="top" justifyContent="center" shadow="dark-lg" borderRadius="2xl">
                <Image h="50vh" w="90vh" shadow="dark-lg" src={ResourcesBanner}></Image>
            </Flex>

            <Heading color="#FD4556" fontFamily='VALORANT' textAlign="center" py="70px" pb="60px" pointerEvents="none" size="lg">
                Resources
            </Heading>
            <Box className='Res-Container' p={8} marginLeft="5" marginRight="5" align="center" maxW="100vh" shadow="lg" bg="white" borderRadius="2xl">
                <Heading pb="80px" size="md" pointerEvents="none">Below are some very useful resources to help you improve!</Heading>
                <Heading pb="10px" size="md" pointerEvents="none">Player Statistics / Metadata</Heading>
                <Link href='https://tracker.gg/valorant' _hover={{ color: "#BD3944" }}>https://tracker.gg/valorant</Link>
                <Text pb="10px" />
                <Link href='https://blitz.gg/valorant' _hover={{ color: "#BD3944" }}>https://blitz.gg/valorant</Link>
                <Text pb="10px" />
                <Link href='https://prosettings.net/valorant-pro-settings-gear-list/' _hover={{ color: "#BD3944" }}>https://prosettings.net/valorant-pro-settings-gear-list/</Link>
                <Text pb="10px" />
                <Link href='https://mobalytics.gg/blog/valorant/valorant-agent-tier-list/' _hover={{ color: "#BD3944" }}>https://mobalytics.gg/blog/valorant/valorant-agent-tier-list/</Link>
                <Text pb="25px" />

                <Heading pb="10px" size="md" pointerEvents="none">Youtube Channels </Heading>
                <Link href='https://www.youtube.com/channel/UCre4LlH_zPpgeUVvBGCMqcA' _hover={{ color: "#BD3944" }}>SkillCapped Valorant Guides</Link>
                <Text pb="10px" />
                <Link href='https://www.youtube.com/c/GameLeapValorantProGuides' _hover={{ color: "#BD3944" }}>GameLeap Valorant Guides</Link>
                <Text pb="10px" />
                <Link href='https://www.youtube.com/channel/UCx0qCryognOczd5HN6ElI-w' _hover={{ color: "#BD3944" }}>ProGuides Valorant</Link>
                <Text pb="10px" />
                <Link href='https://www.youtube.com/c/SenaVL' _hover={{ color: "#BD3944" }}>Sena</Link>
                <Text pb="25px" />

                <Heading pb="10px" size="md" pointerEvents="none">Pro Players Channels </Heading>
                <Link href='https://www.youtube.com/c/tarik' _hover={{ color: "#BD3944" }}>Tarik</Link>
                <Text pb="10px" />
                <Link href='https://www.youtube.com/c/TenZ' _hover={{ color: "#BD3944" }}>TenZ</Link>
                <Text pb="10px" />
                <Link href='https://www.youtube.com/user/stewie2ktv' _hover={{ color: "#BD3944" }}>Stewie2K</Link>
                <Text pb="10px" />
                <Link href='https://www.youtube.com/c/ShahZaMK' _hover={{ color: "#BD3944" }}>ShahZaM</Link>
                <Text pb="10px" />
                <Link href='https://www.youtube.com/c/Acesu' _hover={{ color: "#BD3944" }}>aceu</Link>
            </Box>
        </>
    );
}

export default Resources;