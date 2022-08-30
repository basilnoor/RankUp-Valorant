import React from 'react';
import Agent from './Agent';

import { Flex, Accordion, SimpleGrid } from '@chakra-ui/react'



function AgentList({ agents }) {

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