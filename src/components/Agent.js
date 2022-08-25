import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Divider, Heading } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'


function Agent({ agent }) {
    return (
        <AccordionItem paddingBottom="5%">
            <h2>
                <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
                    <Box flex='1' textAlign='center'>
                        <Heading size="sm">Supp</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <p>yoo</p>
                <p></p>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default Agent;