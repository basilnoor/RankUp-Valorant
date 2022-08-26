import React from 'react';
import { Text, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Divider, Heading } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'


function Agent({ agent }) {
    return (
        <AccordionItem paddingBottom="5%">
            <AccordionButton _expanded={{ bg: '#BD3944', color: 'white' }}>
                <Box flex='1' textAlign='center'>
                    <Heading size="sm">{agent.displayName}</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <Text>Yooo</Text>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default Agent;