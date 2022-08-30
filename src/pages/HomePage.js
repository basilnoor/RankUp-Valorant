import React, { useRef } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useInViewport } from 'react-in-viewport';

import TCheckmark from '../images/twitter_checkmark.png'
import ValTwitter from '../images/val_twitter.jpg'
import '../App.css'

import { ScaleFade, SimpleGrid, GridItem, Image, Flex, Box, Text, Heading } from '@chakra-ui/react'

function HomePage() {

    // state variable storing valorant's latest tweet
    const [compSeason, setCompSeason] = useState([]);
    const [version, setVersion] = useState([]);
    const [bundle, setBundle] = useState([]);

    // Variable stores API key needed to make GET request
    const getVal = {
        method: 'GET',
        url: 'https://twitter154.p.rapidapi.com/user/tweets',
        params: { username: 'PlayVALORANT', limit: '100' },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };
    const getCompSeason = {
        method: 'GET',
        url: "https://valorant-api.com/v1/seasons/competitive",
    };
    const getVersion = {
        method: 'GET',
        url: "https://valorant-api.com/v1/version",
    };
    const getBundle = {
        method: 'GET',
        url: "https://valorant-api.com/v1/bundles",
    };

    // MOCK TWITTER API REQUEST
    const mockTwitter = [{
        "tweet_id": "1517995317697916928",
        "creation_date": "Sat Apr 23 22:34:21 +0000 2022",
        "text": "Sometimes you know an exception can be thrown, and you just want to ignore it. Take advantage of the context manager, which allows you to allocate and release resources.Use “ignore instead”. Here's a full code example:Credits to: @raymondh https://t.co/ACw677xTtN",
        "media_url": "https://pbs.twimg.com/media/FREAsbkXIAYiaVV.jpg",
        "user": [],
        "language": "en",
        "favorite_count": 17,
        "retweet_count": 2,
        "reply_count": 2,
        "quote_count": 0,
        "retweet": false,
        "timestamp": 1650753261
    }]

    function media_url_valid() {
        if (mockTwitter[0]["media_url"] != null) {
            const media = mockTwitter[0]["media_url"]
            return media
        } else {
            return "https://images7.alphacoders.com/108/1081933.jpg"
        }

    };

    useEffect(() => {
        const compSeasonData = async () => {
            await axios.request(getCompSeason).then(function (response) {
                const res = response.data.data
                const resParsed = res[res.length - 1]
                setCompSeason(resParsed);
            }).catch(function (error) {
                console.error(error);
            });
        };
        compSeasonData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const versionData = async () => {
            await axios.request(getVersion).then(function (response) {
                setVersion(response.data.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        versionData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const bundleData = async () => {
            await axios.request(getBundle).then(function (response) {
                const res = response.data.data
                const randomBundle = res[Math.floor(Math.random() * res.length)]
                setBundle(randomBundle);
            }).catch(function (error) {
                console.error(error);
            });
        };
        bundleData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Ui for tweet
    function Feature({ desc }) {
        return (
            <Box marginBottom="2%" >
                <Flex align="center" >
                    <Image src={ValTwitter} w="5%" paddingRight="1%"></Image>
                    <Heading fontSize='2xl' paddingRight="1%">VALORANT</Heading>
                    <Image src={TCheckmark} w="5" ></Image>

                </Flex>
                <Flex align="left" p="1">
                    <h3>@PlayVALORANT</h3>
                </Flex>
                <Text mt={10}>{desc}</Text>
            </Box>
        )
    }

    // variables storing data for competitive tiers
    const ironName = "IRON"
    const ironIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/5/smallicon.png"
    const bronzeName = "BRONZE"
    const bronzeIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/8/smallicon.png"
    const silverName = "SILVER"
    const silverIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/11/smallicon.png"
    const goldName = "GOLD"
    const goldIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/14/smallicon.png"
    const platName = "PLATINUM"
    const platIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/17/smallicon.png"
    const diamondName = "DIAMOND"
    const diamondIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/20/smallicon.png"
    const ascendantName = "ASCENDANT"
    const ascendantIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/23/smallicon.png"
    const immortalName = "IMMORTAL"
    const immortalIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/26/smallicon.png"
    const radiantName = "RADIANT"
    const radiantIcon = "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/smallicon.png"

    const ref = useRef(null);
    const { inViewport } = useInViewport(ref, { rootMargin: "-200px" }, { disconnectOnLeave: false }, {})

    return (
        <>
            <Flex w="full" h="75vh" align="center" pointerEvents="none" bg="#eee" pb="80px">
                <iframe src="https://giphy.com/embed/QdPy2EL9wr0GpMHD39" width="100%" height="100%" frameBorder="none"></iframe>
            </Flex>
            <Box marginLeft="5" marginRight="5" align="center" maxW="125vh" >
                <SimpleGrid columns={[1, null, 2]} spacing='50px' paddingRight="10px">
                    <GridItem rowSpan={2} colSpan={1} marginLeft="5" marginRight="5" align="center" ref={ref}>
                        <Box align="center" >
                            <Heading fontFamily="valorant" size="lg" pb="25px" color="#FD4556" pointerEvents="none">Competitive Tiers</Heading>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={ironIcon} />
                                    <Text pointerEvents="none">{ironName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={bronzeIcon} />
                                    <Text pointerEvents="none">{bronzeName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={silverIcon} />
                                    <Text pointerEvents="none">{silverName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={goldIcon} />
                                    <Text pointerEvents="none">{goldName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={platIcon} />
                                    <Text pointerEvents="none">{platName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={diamondIcon} />
                                    <Text pointerEvents="none">{diamondName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={ascendantIcon} />
                                    <Text pointerEvents="none">{ascendantName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={immortalIcon} />
                                    <Text pointerEvents="none">{immortalName}</Text>
                                </Box>
                            </Box>
                            <Text color="#BD3944" fontWeight="bold">V</Text>
                            <Box className='boxScale'>
                                <Box borderRadius="2xl" shadow="lg" bg="white" >
                                    <Image pointerEvents="none" src={radiantIcon} />
                                    <Text pointerEvents="none">{radiantName}</Text>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem marginLeft="5" marginRight="5" align="center" >
                        <Heading fontFamily="valorant" size="lg" pb="5px" color="#FD4556" pointerEvents="none">Competitive Season</Heading>
                        <Box marginTop="35px" marginBottom="50px" p={5} borderRadius="2xl" shadow="lg" bg="white" maxW="400px">
                            <Heading size="sm">Start time</Heading>
                            <Text>{compSeason.startTime}</Text>
                            <Heading size="sm">End time</Heading>
                            <Text>{compSeason.endTime}</Text>
                        </Box>
                        <Heading fontFamily="valorant" size="lg" pb="5px" color="#FD4556" pointerEvents="none">Build Version</Heading>
                        <Box p={5} borderRadius="2xl" shadow="lg" bg="white" maxW="400px">
                            <Heading size="sm">Version</Heading>
                            <Text>{version.version}</Text>
                            <Heading size="sm">Build date</Heading>
                            <Text>{version.buildDate}</Text>
                        </Box>
                    </GridItem>
                    <GridItem p={5} shadow='dark-lg' borderWidth='1px' bg="white" marginLeft="5" marginRight="5" align="center" h="425px" overflow="auto">
                        <TwitterTimelineEmbed sourceType="profile" screenName="PlayVALORANT" options={{ borderColor: 'red' }} />
                    </GridItem>
                    <GridItem colSpan={[1, null, 2]} p={8} marginLeft="5" marginRight="5" align="center" ref={ref}>
                        <Heading fontFamily="valorant" size="lg" pb="5px" color="#FD4556" pointerEvents="none">Featured Bundle</Heading>
                        <Heading fontFamily="valorant" size="sm" pb="45px" color="#BD3944" pointerEvents="none">{bundle.displayName}</Heading>
                        <ScaleFade initialScale={0.5} in={inViewport} whileHover={{ scale: 1.1 }}>
                            <Box marginTop="3px" marginBottom="50px" p={5} borderRadius="2xl" shadow="dark-lg">
                                <Image shadow="dark-lg" borderRadius="2xl" src={bundle.displayIcon} />
                            </Box>
                        </ScaleFade>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
}

export default HomePage;