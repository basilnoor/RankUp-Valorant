import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MapCard from '../components/MapCard';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react'


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
            <Box h="75vh" w="full" bg="grey"></Box>
            <Box w="full" px="200px" py="60px">
                <Heading textAlign="center" pb="60px">
                    Maps
                </Heading>
                <SimpleGrid columns={[2, null, 3]} spacing='50px'>
                    {maps.map((map, index) => <MapCard map={map} key={index} />)}
                </SimpleGrid>
            </Box>
        </>
    );
}

export default Maps;