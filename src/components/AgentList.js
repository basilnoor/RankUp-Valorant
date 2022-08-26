import React from 'react';
import Agent from './Agent';

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Divider } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'


function AgentList({ agents }) {
    return (
        <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            {agents.map((agent, index) => <Agent agent={agent} key={index} />)}
        </Accordion>
    )
}

export default AgentList;