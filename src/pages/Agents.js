import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AgentList from '../components/AgentList';

import { Button, Heading, Flex, Box } from '@chakra-ui/react'

export const Agents = () => {

    // state variable storing the next ufc event
    const [agents, setAgents] = useState([]);

    // Variable stores API key needed to make GET request
    const getAgents = {
        method: 'GET',
        url: 'https://sports-data3.p.rapidapi.com/ufc',
    };

    // REMOVE WHEN API LIMIT BACK
    // // useEffect function gets the response from event_data() automatically upon loading HomePage
    // useEffect(() => {
    //     // Uses nextEvent to make a GET request to API and store the data 
    //     const eventData = async () => {
    //         await axios.request(eventApi).then(function (response) {
    //             setEvent(response.data)
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    //     };
    //     eventData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);


    const agentsPlaceholder = [
        { description: "Miranda Maverick vs Shanna Young", fighter1: "Miranda Maverick", moneyLine1: "-550", fighter2: "Shanna Young", moneyLine2: "+400", props: "forget this" },
        { description: "Alexander Romanov vs Marcin Tybura", fighter1: "Alexander Romanov", moneyLine1: "-55", fighter2: "Marcin Tybura", moneyLine2: "+4000", props: "forget this" },
        { description: "Jose Aldo vs Merab Dvalishvili", fighter1: "Jose Aldo", moneyLine1: "-50", fighter2: "Merab Dvalishvili", moneyLine2: "+40", props: "forget this" },
        { description: "Paulo Henrique Costa vs Luke Rockhold", fighter1: "Paulo Henrique Costa", moneyLine1: "-335", fighter2: "Luke Rockhold", moneyLine2: "+255", props: "forget this" },
        { description: "Kamaru Usman vs Leon Edwards", fighter1: "Kamaru Usman", moneyLine1: "-400", fighter2: "Leon Edwards", moneyLine2: "+300", props: "forget this" },
    ]

    return (
        <>
            <Heading size="md">{"eventTitle HERE"}</Heading>
            <Box >
                <AgentList agents={agentsPlaceholder} />
            </Box>

        </>
    );
}

export default Agents;