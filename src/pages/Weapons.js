import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WeaponBanner from '../images/weapons.jpg'
import Weapon from '../components/Weapon'

import { Heading, Button, Flex, Image, Box } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'


export const Weapons = () => {

    // state variable storing ufc's current rankings for each weight class
    const [weapons, setWeapons] = useState([]);
    const [shopData, setShopData] = useState([]);

    // Variable stores API key needed to make GET request
    const getWeapons = {
        method: 'GET',
        url: "https://valorant-api.com/v1/weapons",
    };

    useEffect(() => {
        const weaponsData = async () => {
            await axios.request(getWeapons).then(function (response) {
                setWeapons(response.data.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        weaponsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log(weapons)

    return (
        <>
            <Flex h="53vh" maxW="full" w="95vh" bg="#BD3944" align="top" justifyContent="center" shadow="dark-lg" >
                <Image h="50vh" w="90vh" shadow="dark-lg" src={WeaponBanner}></Image>
            </Flex>
            <Box marginLeft="5" marginRight="5" align="center" maxW="100vh" >
                <Heading color="#FD4556" fontFamily='VALORANT' textAlign="center" py="70px" pb="60px" pointerEvents="none" size="lg">
                    Valorant Weapons Data
                </Heading>
            </Box>
            <TableContainer p={15}>
                <Table variant='striped' colorScheme="red" shadow="dark-lg" bg="white">
                    <TableCaption fontFamily="valorant">Valorant Weapons Data</TableCaption>
                    <Thead >
                        <Tr >
                            <Th >Weapon</Th>
                            <Th>Category</Th>
                            <Th>Cost</Th>
                            <Th>Firerate</Th>
                            <Th>Magazine Size</Th>
                            <Th>First Bullet Accuracy</Th>
                            <Th>Reload Time (s)</Th>
                        </Tr>
                    </Thead>
                    <Tbody >
                        {weapons.map((weapon, index) => <Weapon weapon={weapon} shopData={weapons[index].shopData} weaponStats={weapons[index].weaponStats} key={index} />)}
                    </Tbody>
                    <Tfoot >
                        <Tr >
                            <Th>Weapon</Th>
                            <Th>Category</Th>
                            <Th>Cost</Th>
                            <Th>Firerate</Th>
                            <Th>Magazine Size</Th>
                            <Th>First Bullet Accuracy</Th>
                            <Th>Reload Time (s)</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}

export default Weapons;