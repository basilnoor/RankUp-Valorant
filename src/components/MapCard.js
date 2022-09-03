import React, { useRef } from 'react';
import { Box, Image, Heading, Text, Link, ScaleFade } from '@chakra-ui/react';
import { useInViewport } from 'react-in-viewport';


function Map({ map }) {

    const blitzMap = `https://blitz.gg/valorant/maps/${map.displayName}`

    // Used to animate ScaleFade when div enters view
    const ref = useRef(null);
    const { enterCount } = useInViewport(ref, { rootMargin: "-150px" }, { disconnectOnLeave: false }, {})

    return (
        <ScaleFade initialScale={0.8} in={enterCount > 0} whileHover={{ scale: 1.1 }}>
            <Box borderRadius="lg" shadow="lg" borderWidth="2px" cursor="pointer" overflow="hidden" ref={ref}>
                <Link href={blitzMap} isExternal>
                    <Image src={map.splash} />
                    <Box p={6}>
                        <Heading fontSize={20} letterSpacing="1px" pb="20px"> {map.displayName} </Heading>
                        <Text>{map.coordinates}</Text>
                    </Box>
                </Link>
            </Box >
        </ScaleFade>
    )
}

export default Map;