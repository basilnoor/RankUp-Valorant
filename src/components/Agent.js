import React from 'react';
import { useState, useEffect } from 'react';
import { Flex, Image, Text, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Divider, Heading } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

function Agent({ agent }) {

    const aOneName = agent.abilities[0].displayName
    const aOneIcon = agent.abilities[0].displayIcon
    const aOneDesc = agent.abilities[0].description

    const aTwoName = agent.abilities[1].displayName
    const aTwoIcon = agent.abilities[1].displayIcon
    const aTwoDesc = agent.abilities[1].description

    const aThreeName = agent.abilities[2].displayName
    const aThreeIcon = agent.abilities[2].displayIcon
    const aThreeDesc = agent.abilities[2].description

    const aFourName = agent.abilities[3].displayName
    const aFourIcon = agent.abilities[3].displayIcon
    const aFourDesc = agent.abilities[3].description


    return (
        <AccordionItem paddingBottom="5%">
            <AccordionButton _expanded={{ shadow: "lg" }} >
                < Box flex='1' textAlign='center' >
                    <Image h="20vh" shadow="dark-lg" borderRadius="full" src={agent.displayIcon} />
                    <Heading paddingTop="10px" size="md">{agent.displayName}</Heading>
                </Box >
                <AccordionIcon />
            </AccordionButton >
            <Flex justify="center" w="full" bg='#BD3944' shadow="md">
                <AccordionPanel bg='#BD3944' color="white">
                    <Heading size="xsm">Abilities</Heading>
                    <Tabs variant='soft-rounded' colorScheme='red' >
                        <TabList >
                            <Tab color="white">C</Tab>
                            <Tab color="white">Q</Tab>
                            <Tab color="white">E</Tab>
                            <Tab color="white">X</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Popover isLazy placement='top' trigger='hover'>
                                    <PopoverTrigger>
                                        <Text _hover={{ color: "black", cursor: "pointer" }} p="5px"><Image maxH="5vh" src={aOneIcon} /> {aOneName}</Text>
                                    </PopoverTrigger>
                                    <PopoverContent color="black" shadow="lg">
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader color="#BD3944">Ability 1: {aOneName}</PopoverHeader>
                                        <PopoverBody>{aOneDesc}</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </TabPanel>
                            <TabPanel>
                                <Popover isLazy placement='top' trigger='hover'>
                                    <PopoverTrigger>
                                        <Text _hover={{ color: "black", cursor: "pointer" }} p="5px"><Image maxH="5vh" src={aTwoIcon} /> {aTwoName}</Text>
                                    </PopoverTrigger>
                                    <PopoverContent color="black" shadow="lg">
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader color="#BD3944">Ability 2: {aTwoName}</PopoverHeader>
                                        <PopoverBody>{aTwoDesc}</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </TabPanel>
                            <TabPanel>
                                <Popover isLazy placement='top' trigger='hover'>
                                    <PopoverTrigger>
                                        <Text _hover={{ color: "black", cursor: "pointer" }} p="5px"><Image maxH="5vh" src={aThreeIcon} /> {aThreeName}</Text>
                                    </PopoverTrigger>
                                    <PopoverContent color="black" shadow="lg">
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader color="#BD3944">Ability 3: {aThreeName}</PopoverHeader>
                                        <PopoverBody>{aThreeDesc}</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </TabPanel>
                            <TabPanel>
                                <Popover isLazy placement='top' trigger='hover'>
                                    <PopoverTrigger>
                                        <Text _hover={{ color: "black", cursor: "pointer" }} p="5px"><Image maxH="5vh" src={aFourIcon} /> {aFourName}</Text>
                                    </PopoverTrigger>
                                    <PopoverContent color="black" shadow="lg">
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader color="#BD3944">Ultimate: {aFourName}</PopoverHeader>
                                        <PopoverBody>{aFourDesc}</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </AccordionPanel>
            </Flex>
        </AccordionItem >
    )
}

export default Agent;