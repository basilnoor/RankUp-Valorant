import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import MapCard from '../components/MapCard';
import '../App.css'
import MapBanner from '../images/maps2.jpg'

import { Box, Heading, SimpleGrid, Image, Flex } from '@chakra-ui/react'


export const Maps = () => {

    // state variable storing ufc's current rankings for each weight class
    const [maps, setMaps] = useState([]);

    // Variable stores info needed to make GET request
    const getMaps = {
        method: 'GET',
        url: "https://valorant-api.com/v1/maps",
    };

    // useEffect function gets the response from mapsData() automatically upon loading Maps page
    useEffect(() => {
        // Uses getMaps to make a GET request to API and stores the data 
        const mapsData = async () => {
            await axios.request(getMaps).then(function (response) {
                setMaps(response.data.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        mapsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(maps)

    return (
        <>
            <Flex h="53vh" maxW="full" w="95vh" bg="#BD3944" align="top" justifyContent="center" shadow="dark-lg" >
                <Image h="50vh" w="90vh" shadow="dark-lg" src={MapBanner}></Image>
            </Flex>
            <Box p={8} marginLeft="5" marginRight="5" align="center" maxW="125vh">
                <Heading color="#FD4556" fontFamily='VALORANT' textAlign="center" py="70px" pb="60px" pointerEvents="none" size="lg">
                    Maps
                </Heading>
                <SimpleGrid columns={[1, null, 2]} spacing='50px' >
                    {maps.map((map, index) => <MapCard map={map} key={index} />)}
                </SimpleGrid>
            </Box>
        </>
    );
}

export default Maps;