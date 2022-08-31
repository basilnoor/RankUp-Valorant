import React from 'react';
import Agent from './Agent';

import { Flex, Accordion, SimpleGrid } from '@chakra-ui/react'



function AgentList({ agents }) {

    // Remove second Sova
    for (let i = 0; i < agents.length; i++) {
        if (agents[i].isPlayableCharacter == false) {
            agents.splice(i, 1)
        }
    };

    return (
        <Flex >
            <Accordion allowMultiple allowToggle>
                <SimpleGrid columns={[2, null, 4]} spacing='50px' paddingRight="10px">
                    {agents.map((agent, index) => <Agent agent={agent} key={index} />)}
                </SimpleGrid>
            </Accordion>
        </Flex >
    )
}

export default AgentList;