import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AgentList from '../components/AgentList';
import AgentBanner from '../images/agents1.jpg'

import { Button, Heading, Flex, Box, Image, filter } from '@chakra-ui/react'

export const Agents = () => {

    // state variable storing the next ufc event
    const [agents, setAgents] = useState([]);

    // Variable stores API key needed to make GET request
    const getAgents = {
        method: 'GET',
        url: 'https://valorant-api.com/v1/agents/',
    };

    // useEffect function gets the response from eventData() automatically upon loading page
    useEffect(() => {
        // Uses nextEvent to make a GET request to API and store the data 
        const eventData = async () => {
            await axios.request(getAgents).then(function (response) {
                setAgents(response.data.data)
            }).catch(function (error) {
                console.error(error);
            });
        };
        eventData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(agents)

    return (
        <>
            <Flex h="50vh" w="full" bg="#BD3944" align="center" justifyContent="center" shadow="dark-lg">
                <Image h="50vh" w="100vh" opacity="90%" src={AgentBanner}></Image>
            </Flex>
            <Box p={8} marginLeft="5" marginRight="5" align="center" maxW="100vh">
                <Heading color="#FD4556" fontFamily='VALORANT' textAlign="center" py="70px" pb="60px" pointerEvents="none" size="lg">
                    Agents
                </Heading>
                <AgentList agents={agents} />
            </Box>
        </>
    );
}

export default Agents;