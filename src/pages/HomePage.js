import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';

import TCheckmark from '../images/twitter_checkmark.png'
import ValTwitter from '../images/val_twitter.jpg'
import TwitterLogo from '../images/twitter_logo.png'

import { Image, Flex, Box, Link, AspectRatio, Container, Button, Text, Heading, HStack, Spacer } from '@chakra-ui/react'

function HomePage() {

    // state variable storing valorant's latest tweet
    const [valTweet, setTweet] = useState([]);

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

    // REMOVE WHEN API LIMIT BACK
    // // useEffect function gets the response from newsData() automatically upon loading HomePage
    // useEffect(() => {
    //     // Uses getVal to make a GET request to API and store the data 
    //     const newsData = async () => {
    //         await axios.request(getVal).then(function (response) {
    //             setTweet(response.data)
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    //     };
    //     newsData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

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


    function Feature({ desc }) {
        return (
            <Box marginBottom="2%">
                <Flex align="center">
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


    return (
        <>
            <Flex w="100%" h="75vh" align="center" pointerEvents="none" bg="#eee" >
                <iframe src="https://giphy.com/embed/QdPy2EL9wr0GpMHD39" width="100%" height="100%" frameBorder="none"></iframe>
            </Flex>
            <Link href="https://twitter.com/PlayVALORANT/" isExternal>
                <HStack spacing={8} marginTop="3%">
                    <Box p={8} shadow='dark-lg' borderWidth='1px' bg="white" marginLeft="5" marginRight="5" align="center" maxW="100vh">
                        <Feature
                            desc={mockTwitter[0]["text"]}
                        />
                        <Image src={media_url_valid()} />
                    </Box>
                </HStack>
            </Link>
        </>
    );
}

export default HomePage;