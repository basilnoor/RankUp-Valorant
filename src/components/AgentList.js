import React from 'react';
import Agent from './Agent';

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Divider } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'


function AgentList({ agents }) {
    return (
        <Box align="center" minW="450">
            <Accordion defaultIndex={[0]} minW="450" maxW="75%" allowMultiple allowToggle>
                {[...agents].reverse().map((agent, index) => <Agent agent={agent} key={index} />)}
            </Accordion>
        </Box>
    )
}

export default AgentList;