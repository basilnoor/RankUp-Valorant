import React from 'react';
import Agent from './Agent';

import { Flex, Accordion, SimpleGrid } from '@chakra-ui/react'



function AgentList({ agents }) {

    const firstHalf = agents.length / 2

    return (
        <Flex >
            <Accordion allowMultiple allowToggle>
                <SimpleGrid columns={[1, null, 2]} spacing='50px' paddingRight="10px" >
                    {agents.slice(0, firstHalf).map((agent, index) => <Agent agent={agent} key={index} />)}
                </SimpleGrid>
            </Accordion>
            <Accordion allowMultiple allowToggle>
                <SimpleGrid columns={[1, null, 2]} spacing='50px' >
                    {agents.slice(firstHalf, agents.length).map((agent, index) => <Agent agent={agent} key={index} />)}
                </SimpleGrid>
            </Accordion>
        </Flex >
    )
}

export default AgentList;