import React from 'react';

import { Text, Image } from '@chakra-ui/react'
import { Tr, Td } from '@chakra-ui/react'

function Weapon({ weapon, shopData, weaponStats }) {

    if (shopData == null) {
        shopData = "N/A"
    }
    if (weaponStats == null) {
        weaponStats = "N/A"
    }

    return (
        <Tr >
            <Td>
                <Image maxW="8rem" src={weapon.displayIcon} />
                <Text>{weapon.displayName}</Text>
            </Td>
            <Td>
                <Text>{shopData.category}</Text>
            </Td>
            <Td isNumeric>
                <Text>{shopData.cost}</Text>
            </Td>
            <Td isNumeric>
                <Text>{weaponStats.fireRate}</Text>
            </Td>
            <Td isNumeric>
                <Text>{weaponStats.magazineSize}</Text>
            </Td>
            <Td isNumeric>
                <Text>{weaponStats.firstBulletAccuracy}</Text>
            </Td>
            <Td isNumeric>
                <Text>{weaponStats.reloadTimeSeconds}</Text>
            </Td>
        </Tr>
    );
}

export default Weapon;