import {
    Stack,
    Text,
    Box,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
  } from '@chakra-ui/react'
import { SearchBar } from '../searchBar/searchBar'
import { ICircuit, ITranscript } from '../../utils/interfaces'
import { MaciBlack, MaciLightBase, MaciYellow } from '../../utils/colors'
import { useEffect, useState } from 'react'
import { getAllVerificationTranscripts } from '../../utils/fetchers'
  
export const VerificationTranscript = (props: any) => {

    const [transcripts, setTranscripts] = useState<ITranscript[]>([])
   
    useEffect(() => {
        const _getTranscripts = async () => {
            const response = await getAllVerificationTranscripts()
            setTranscripts(response)
        }

        _getTranscripts().catch()
    }, [])

    return (
        <Stack
        paddingBottom="5%"
        direction="row"
        justify="center"
        align="flex-start"
        width="100%"
        height="100%"
        maxWidth="100%"
        >
        <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="425px"
            >
            <Stack width="184px" height="180px" />
            </Stack>
            <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Stack
                paddingX="30px"
                paddingY="25px"
                borderTopRadius="20px"
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="139px"
                borderColor="#000000"
                borderStartWidth="1px"
                borderEndWidth="1px"
                borderTopWidth="1px"
                width="1240px"
                maxWidth="100%"
                background={MaciLightBase}
            >
                <Text
                
                lineHeight="0.99"
                fontWeight="medium"
                fontSize="48px"
                letterSpacing="0.01em"
                color="Primary.MACI Black"
                >
                Verification transcript
                </Text>
                <Stack
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="16px"
                >
                <Stack
                    width="100%"
                    height="48px"
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px"
                    overflow="hidden"
                    borderColor="Primary.MACI Black"
                    borderStartWidth="1px"
                    borderEndWidth="1px"
                    borderTopWidth="1px"
                    borderBottomWidth="1px"
                >
                    <Stack
                    paddingStart="16px"
                    paddingEnd="12px"
                    paddingY="10px"
                    height="48px"
                    alignSelf="stretch"
                    direction="row"
                    justify="flex-start"
                    align="center"
                    width="100%"
                    >
                        {
                            props.circuits && 
                            <Select placeholder="Select circuit">
                                {
                                    props.circuits.map((circuit: ICircuit, index: number) => {
                                        return <option key={index} value={circuit.id}>{circuit.name}</option>
                                    })
                                }
                            </Select>
                        }
                    </Stack>
                </Stack>
                <Stack width="100%">
                    <SearchBar placeholder="Search contribution index or contributor ID" />

                </Stack>
                </Stack>
            </Stack>
            <Stack
                paddingBottom="12px"
                width="100%"
                maxWidth="100%"
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                borderColor={MaciBlack}
                borderStartWidth="1px"
                borderEndWidth="1px"
                borderTopWidth="1px"
                borderBottomWidth="1px"
            >
                <Stack
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                width="196px"
                >
                    <Stack
                        borderTopLeftRadius="8px"
                        height="40px"
                        alignSelf="stretch"
                        background="#FFFFFF"
                    >
                        <Text
                        
                        lineHeight="1.5"
                        fontWeight="bold"
                        fontSize="16px"
                        letterSpacing="0.02em"
                        color={MaciBlack}
                        width="148px"
                        >
                        Contribution Index
                        </Text>
                        <Box width="199px" height="1px" background="Muted Colors.200" />
                    </Stack>
                    {
                        transcripts &&
                        transcripts.map((transcript: ITranscript, index: number) => {
                            return (
                                <Stack key={index} height="52px" alignSelf="stretch" background="white">
                                    <Text
                                    
                                    lineHeight="1.43"
                                    fontWeight="bold"
                                    fontSize="14px"
                                    letterSpacing="0.02em"
                                    color={MaciBlack}
                                    width="148px"
                                    >
                                    {transcript.zKeyIndex}
                                    </Text>
                                    <Box width="196px" height="1px" background="Muted Colors.200" />
                                </Stack>
                            )
                        })
                    }

                </Stack>
                    <Stack
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px"
                    width="179px"
                    height="821px"
                    >
                    <Stack width="179px" height="40px" background="white">
                        <Text
                        
                        lineHeight="1.5"
                        fontWeight="bold"
                        fontSize="16px"
                        letterSpacing="0.02em"
                        color="Primary.MACI Black"
                        width="131px"
                        >
                        Contributor ID
                        </Text>
                        <Box width="179px" height="1px" background="Muted Colors.200" />
                    </Stack>
                    {
                        transcripts &&
                        transcripts.map((transcript: ITranscript, index: number) => {
                            return (
                                <Stack key={index} width="179px" height="52px" background="white">
                                    <Text
                                    
                                    lineHeight="1.43"
                                    fontWeight="regular"
                                    fontSize="14px"
                                    letterSpacing="0.02em"
                                    color={MaciBlack}
                                    width="131px"
                                    >
                                    {transcript.contributorId}
                                    </Text>
                                <Box width="179px" height="1px" background="Muted Colors.200" />
                                </Stack>
                            )
                        })
                    }
                </Stack>
                <Stack
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                width="228px"
                height="821px"
                >
                <Stack width="228px" height="40px" background="white">
                    <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    letterSpacing="0.02em"
                    color={MaciBlack}
                    width="180px"
                    >
                    Transcript Content
                    </Text>
                    <Box width="228px" height="1px" background="Muted Colors.200" />
                </Stack>
                {
                    transcripts &&
                    transcripts.map((transcript: ITranscript, index: number) => {
                        return (
                            <Stack key={index} width="228px" background="white">
                                <Text
                                lineHeight="1.43"
                                fontWeight="regular"
                                fontSize="14px"
                                letterSpacing="0.02em"
                                color={MaciBlack}
                                width="180px"
                                >
                                {transcript.content}
                                </Text>
                            </Stack>
                        )
                    })
                }
               
                </Stack>
                <Stack
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                width="228px"
                >
                <Stack width="228px" background="white">
                    <Text
                    
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    letterSpacing="0.02em"
                    color="Primary.MACI Black"
                    width="180px"
                    >
                    Contributor Hash
                    </Text>
                    <Box width="228px" height="1px" background="Muted Colors.200" />
                </Stack>
                {
                    transcripts && 
                    transcripts.map((transcript: ITranscript, index: number) => {
                        return (
                            <Stack key={index} width="228px" height="52px" background="white">
                                <Text  
                                lineHeight="1.43"
                                fontWeight="regular"
                                fontSize="14px"
                                letterSpacing="0.02em"
                                color={MaciBlack}
                                width="180px"
                                >
                                {transcript.contributorId}
                                </Text>
                            </Stack>
                        )
                    })
                }
                </Stack>
                <Stack
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                width="228px"
                >
                <Stack width="228px" height="40px" background="white">
                    <Text
                    
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    letterSpacing="0.02em"
                    color={MaciBlack}
                    width="180px"
                    >
                    Public Attestation
                    </Text>
                    <Box width="228px" height="1px" background="Muted Colors.200" />
                </Stack>
                {
                    transcripts &&
                    transcripts.map((transcript: ITranscript, index: number) => {
                        return (
                            <Stack key={index} width="228px" background="white">
                                <Text
                                lineHeight="1.43"
                                fontWeight="regular"
                                fontSize="14px"
                                letterSpacing="0.02em"
                                color={MaciBlack}
                                width="180px"
                                >
                                {transcript.url}
                                </Text>
                            </Stack>
                        )
                    })
                }

                </Stack>
                <Stack
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                width="100%"
                >
                <Stack width="100%" height="40px" background="white">
                    <Text>
                        Download
                        </Text>
                </Stack>
                <Stack width="100%" background="white">
                    {
                        transcripts && 
                        transcripts.map((transcript: ITranscript, index: number) => {
                            return (
                                <Button
                                key={index}
                                size="L"
                                color="Primary"
                                fill="Solid + outline"
                                background={MaciYellow}
                                borderRadius="100px"
                                borderColor={MaciBlack}
                                borderWidth={"1px"}
                                width="100%"
                                height="48px"
                                >   Download
                                </Button>
                            )
                        })
                    }
               
                </Stack>               
                </Stack>
               
            </Stack>
            <Stack
                paddingX="30px"
                paddingY="25px"
                borderBottomRadius="20px"
                direction="row"
                justify="flex-start"
                align="center"
                spacing="0px"
                borderColor="#000000"
                borderStartWidth="1px"
                borderEndWidth="1px"
                borderBottomWidth="1px"
                width="1240px"
                maxWidth="100%"
                background={MaciLightBase}
            >
                <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="0px"
                >
                <Stack
                    padding="2px"
                    borderRadius="9999px"
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px"
                    overflow="hidden"
                    borderColor={MaciBlack}
                    borderStartWidth="1px"
                    borderEndWidth="1px"
                    borderTopWidth="1px"
                    borderBottomWidth="1px"
                    borderStyle="dashed"
                />
                <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="0px"
                >
                    <Box
                    borderRadius="35px"
                    width="69px"
                    height="69px"
                    background={MaciBlack}
                    />
                </Stack>
                </Stack>
                <NumberInput defaultValue="1" size="lg" flex="1">
                <NumberInputField background="#FFFFFF" />
                <NumberInputStepper background="white">
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>
            </Stack>
            </Stack>
        </Stack>
        </Stack>
  )
}