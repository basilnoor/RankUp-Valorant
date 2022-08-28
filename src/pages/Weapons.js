import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WeaponBanner from '../images/weapons.jpg'

import { Button, Flex, Image, Box } from '@chakra-ui/react'


export const Weapons = () => {

    // state variable storing ufc's current rankings for each weight class
    const [weapons, setWeapons] = useState([]);

    // Variable stores API key needed to make GET request
    const getWeapons = {
        method: 'GET',
        url: "https://valorant-api.com/v1/agents",
    };

    // // useEffect function gets the response from ranking_data() automatically upon loading HomePage
    // useEffect(() => {
    //     // Uses get_rankings to make a GET request to API and store the data 
    //     const rankingData = async () => {
    //         await axios.request(getRankings).then(function (response) {
    //             setRankings(response.data);
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    //     };
    //     rankingData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <>
            <Flex h="53vh" maxW="full" w="95vh" bg="#BD3944" align="top" justifyContent="center" shadow="dark-lg" >
                <Image h="50vh" w="90vh" shadow="dark-lg" src={WeaponBanner}></Image>
            </Flex>
            <Box p={8} marginLeft="5" marginRight="5" align="center" maxW="125vh">
            </Box>
        </>
    );
}

export default Weapons;