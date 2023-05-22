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
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
  } from '@chakra-ui/react'
import { SearchBar } from '../searchBar/searchBar'
import { ICircuit, ITranscript } from '../../utils/interfaces'
import { MaciBlack, MaciLightBase, MaciWhite, MaciYellow } from '../../utils/colors'
import { useEffect, useState } from 'react'
import { getAllVerificationTranscripts } from '../../utils/fetchers'
import { getEllipsisTxt } from '../../utils/formatting'
import Layer17 from "../../assets/Layer_1-7.png"
  
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
        width="100%"
        height="100%"
        maxWidth="100%"
        >
        <Stack 
        justify="flex-start" 
        align="flex-start" 
        spacing="0px">
            <Stack
            direction="row"
            justify="flex-start"
            align="center"
            width="100%"
            >
            </Stack>
            <Stack 
            width="100%"
            justify="flex-start" 
            align="flex-start" 
            spacing="0px">
            <Stack
                padding="20px"
                borderTopRadius="20px"
                direction="row"
                justify="flex-start"
                align="flex-start"
                borderColor="#000000"
                borderWidth="1px"
                width="100%"
                background={MaciLightBase}
            >
                <Stack
                width="80%"
                textAlign="left"
                >
                <Text
                lineHeight="0.99"
                fontWeight="bold"
                fontSize="40px"
                letterSpacing="0.01em"
                color={MaciBlack}
                >
                Verification transcript
                </Text>
                </Stack>
               
                <Stack
                direction="row"
                justify="flex-start"
                align="flex-start"
                width="100%"
                >
                <Stack
                    width="50%"
                    justify="flex-end"
                    align="flex-end"
                >
                    <Stack
                    height="48px"
                    alignSelf="stretch"
                    direction="row"
                    justify="flex-end"
                    align="center"
                    width="100%"
                    >
                        {
                            props.circuits && 
                            <Select 
                            borderWidth="1px"
                            borderColor={MaciBlack}
                            background={MaciWhite}
                            placeholder="Select circuit"
                            >
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
            <TableContainer
                background={MaciWhite}
                paddingBottom="12px"
                width="100%"
                maxWidth="100%"
                borderColor={MaciBlack}
                borderWidth="1px">
                <Table textAlign='center' variant='simple' width="100%" borderColor={MaciBlack}>
                    <Thead>
                        <Tr>
                            <Th lineHeight="1.5"
                                fontWeight="bold"
                                fontSize="16px"
                                letterSpacing="0.02em"
                                color={MaciBlack}>Contribution index</Th>
                            <Th lineHeight="1.5"
                                fontWeight="bold"
                                fontSize="16px"
                                letterSpacing="0.02em"
                                color={MaciBlack}>Contributor ID</Th>
                            <Th lineHeight="1.5"
                                fontWeight="bold"
                                fontSize="16px"
                                letterSpacing="0.02em"
                                color={MaciBlack}>Transcript Content</Th>
                            <Th lineHeight="1.5"
                                fontWeight="bold"
                                fontSize="16px"
                                letterSpacing="0.02em"
                                color={MaciBlack}>Contributor Hash</Th>
                            <Th lineHeight="1.5"
                                fontWeight="bold"
                                fontSize="16px"
                                letterSpacing="0.02em"
                                color={MaciBlack}>Public Attestastion</Th>
                            <Th lineHeight="1.5"
                                fontWeight="bold"
                                fontSize="16px"
                                letterSpacing="0.02em"
                                color={MaciBlack}>Download</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            transcripts &&
                            transcripts.map((transcript: ITranscript, index: number) => {
                                return (
                                    <Tr key={index}>
                                        <Td>
                                            <Text
                                            color={MaciBlack}
                                            >
                                            {transcript.zKeyIndex}
                                            </Text>
                                        </Td>  
                                        <Td>
                                            <Text
                                            color={MaciBlack}
                                            >
                                            {getEllipsisTxt(transcript.contributorId, 10)}
                                            </Text>
                                        </Td>  
                                        <Td>
                                            <Text
                                            color={MaciBlack}
                                            >
                                            {getEllipsisTxt(transcript.contributorId, 10)}
                                            </Text>
                                        </Td>  
                                        <Td>
                                            <Text
                                            color={MaciBlack}
                                            >
                                            {getEllipsisTxt(transcript.contributorId, 10)}
                                            </Text>
                                        </Td>  
                                        <Td>
                                            <Text
                                            color={MaciBlack}
                                            >
                                            {getEllipsisTxt(transcript.url, 10)}
                                            </Text>
                                        </Td>  
                                        <Td>
                                        <Button
                                            key={index}
                                            size="L"
                                            color="Primary"
                                            fill="Solid + outline"
                                            background={MaciYellow}
                                            borderRadius="100px"
                                            borderColor={MaciBlack}
                                            borderWidth="1px"
                                            width="100%"
                                            height="48px"
                                            >   Download
                                            </Button>
                                        </Td>
                                    </Tr>
                            )})
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <Stack
                padding="20px"
                borderBottomRadius="20px"
                direction="row"
                justify="flex-start"
                spacing="70%"
                align="center"
                borderColor={MaciBlack}
                borderWidth="1px"
                width="100%"
                background={MaciLightBase}
            >
                <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="0px"
                >
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
						backgroundImage={Layer17}
						backgroundSize="100%"
						/>
					</Stack>
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
                <Stack>
                    <NumberInput borderRadius="5px" borderWidth="1px" borderColor={MaciBlack} defaultValue="1" size="lg">
                    <NumberInputField borderWidth="0px" />
                    <NumberInputStepper background="white">
                        {/* https://codesandbox.io/s/chakra-ui-react-table-0ojzil?file=/index.tsx for pagination */}
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                    </NumberInput>
                </Stack>   
            </Stack>
            </Stack>
        </Stack>
        </Stack>
  )
}