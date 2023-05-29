import { Stack, Text, Tag, Circle, Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MaciBlack, MaciWhite, MaciYellow } from '../../utils/colors'
import Layer17 from '../../assets/Layer_1-7.png'
import SpiralWire from '../../assets/Isolation_Mode.png'
import { ILiveCeremonyData } from '../../utils/interfaces'
import { getLiveCeremonyData } from '../../utils/fetchers'

export const LiveCeremony = (): React.JSX.Element => {

    const [liveCeremonyData, setLiveCeremonyData] = useState<ILiveCeremonyData>({} as ILiveCeremonyData)

    useEffect(() => {
        const _getLiveCeremonyData = async () => {
            const data = await getLiveCeremonyData()
            setLiveCeremonyData(data)
        }

        _getLiveCeremonyData().catch()
    }, [])

    return (
        <Stack
            paddingTop="10%"
            paddingBottom="10%"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            width="100%"
        >
            <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="-1px"
            width="100%"
            >
            <Stack 
            width="30%"
            justify="flex-start" 
            align="flex-end" 
            spacing="0px"
            >
                <Stack
                padding="10%"
                borderRightRadius="35px"
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="10px"
                borderColor={MaciBlack}
                borderWidth="1px"
                width="100%"
                >
                <Text
                    fontFamily="Poppins"
                    lineHeight="0.99"
                    fontWeight="medium"
                    fontSize="48px"
                    color="#18181B"
                >
                    Live Ceremony
                </Text>
                </Stack>
                <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px">
                    <Box
                        borderRadius="35px"
                        width="69px"
                        height="69px"
                        backgroundImage={Layer17}
                        backgroundSize="100%"
                    />
                </Stack>
            </Stack>
            <Stack 
            width="60%"
            >
                <Stack
                padding="20px"
                borderRadius="35px"
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="16px"
                borderColor={MaciBlack}
                borderWidth="1px"
                background={MaciYellow}
                width="100%"
                >
                <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="-1px"
                    width="100%"
                >
                    <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="-1px"
                    alignSelf="stretch"
                    >
                    <Stack
                        padding="18px"
                        flex="1"
                        justify="center"
                        align="flex-start"
                        spacing="18px"
                        borderColor={MaciBlack}
                        borderWidth="1px"
                        background={MaciWhite}
                        borderRadius="20px"
                    >
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="Muted Colors.500"
                        alignSelf="stretch"
                        >
                        Contributor ID
                        </Text>
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.29"
                        fontWeight="medium"
                        fontSize="28px"
                        color={MaciBlack}
                        alignSelf="stretch"
                        >
                        {liveCeremonyData.currentContributor}
                        </Text>
                    </Stack>
                    <Stack
                        padding="18px"
                        flex="1"
                        justify="center"
                        align="flex-start"
                        spacing="18px"
                        borderColor={MaciBlack}
                        borderWidth="1px"
                        borderRadius="20px"
                        background={MaciWhite}
                    >
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="Muted Colors.500"
                        alignSelf="stretch"
                        >
                        Contribution step
                        </Text>
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.29"
                        fontWeight="medium"
                        fontSize="28px"
                        color={MaciBlack}
                        alignSelf="stretch"
                        >
                        {liveCeremonyData.contributionStep}
                        </Text>
                    </Stack>
                    <Stack
                        padding="18px"
                        flex="1"
                        justify="center"
                        align="flex-start"
                        spacing="18px"
                        borderColor={MaciBlack}
                        borderWidth="1px"
                        borderRadius="20px"
                        background={MaciWhite}
                    >
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="Muted Colors.500"
                        alignSelf="stretch"
                        >
                        Time spent
                        </Text>
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.29"
                        fontWeight="medium"
                        fontSize="28px"
                        color={MaciBlack}
                        alignSelf="stretch"
                        >
                        {liveCeremonyData.timeSpent}
                        </Text>
                    </Stack>
                    </Stack>
                    <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="-1px"
                    alignSelf="stretch"
                    >
                    <Stack
                        padding="18px"
                        flex="1"
                        justify="center"
                        align="flex-start"
                        spacing="18px"
                        borderColor={MaciBlack}
                        borderWidth="1px"
                        borderRadius="20px"
                        background={MaciWhite}
                    >
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="Muted Colors.500"
                        alignSelf="stretch"
                        >
                        Circuit name
                        </Text>
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.29"
                        fontWeight="medium"
                        fontSize="28px"
                        color={MaciBlack}
                        alignSelf="stretch"
                        >
                        {liveCeremonyData.circuitName}
                        </Text>
                    </Stack>
                    <Stack
                        padding="18px"
                        flex="1"
                        justify="center"
                        align="flex-start"
                        spacing="18px"
                        borderColor={MaciBlack}
                        borderWidth="1px"
                        borderRadius="20px"
                        background={MaciWhite}
                    >
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="Muted Colors.500"
                        alignSelf="stretch"
                        >
                        Circuit sequence
                        </Text>
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.29"
                        fontWeight="medium"
                        fontSize="28px"
                        color={MaciBlack}
                        alignSelf="stretch"
                        >
                        {liveCeremonyData.circuitSequence}
                        </Text>
                    </Stack>
                    <Stack
                        padding="18px"
                        flex="1"
                        justify="center"
                        align="flex-start"
                        spacing="18px"
                        borderColor={MaciBlack}
                        borderWidth="1px"
                        borderRadius="20px"
                        background={MaciWhite}
                    >
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                        color="Muted Colors.500"
                        alignSelf="stretch"
                        >
                        ETA (Avg contribution time)
                        </Text>
                        <Text
                        fontFamily="Poppins"
                        lineHeight="1.29"
                        fontWeight="medium"
                        fontSize="28px"
                        color={MaciBlack}
                        alignSelf="stretch"
                        >
                        {liveCeremonyData.ETA}
                        </Text>
                    </Stack>
                    </Stack>
                </Stack>
                <Stack justify="flex-start" align="center" spacing="128px">
                    <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="76px"
                    >
                    <Button borderRadius="100px">
                        <Circle
                            size="8px"
                            background={liveCeremonyData.alive ? 'green' : '#EF4444'}
                            marginRight="5%"
                        />
                        <Text
                            lineHeight="1.33"
                            fontWeight="medium"
                            fontSize="12px"
                            letterSpacing="0.02em"
                            color="Black"
                            textAlign="center">
                            {liveCeremonyData.alive ? 'Live' : 'Finished'}
                        </Text>
                    </Button>
                    </Stack>
                    <Stack
                        borderRadius="35px"
                        padding="10px"
                        justify="flex-start"
                        align="flex-start"
                        overflow="hidden"
                        width="137px"
                        height="137px"
                        marginTop="30%!important"
                        backgroundImage={SpiralWire}
                        backgroundSize="50%"
                        backgroundPosition='center center'
                        backgroundRepeat='no-repeat'
                        />
                </Stack>
                </Stack>
            </Stack>
            </Stack>
        </Stack>
    )
}