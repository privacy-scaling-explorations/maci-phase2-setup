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
    Tooltip,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
    ModalBody
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SearchBar } from '../searchBar/searchBar'
import { ICircuit, ITranscript, IVerificationTranscriptProps } from '../../utils/interfaces'
import {
    MaciBlack,
    MaciLightBase,
    MaciLightYellow,
    MaciWhite,
    MaciYellow
} from '../../utils/colors'
import { getAllVerificationTranscripts } from '../../utils/fetchers'
import { getEllipsisTxt } from '../../utils/formatting'

import Layer17 from '../../assets/Layer_1-7.png'

/**
 * A component to display the verification transcripts in a table
 * @param <IVerificationTranscriptProps> - the props for the VerificationTranscript component (see interfaces.tsx)
 * @returns <React.JSX.Element> - the VerificationTranscript component
 */
export const VerificationTranscript = (props: IVerificationTranscriptProps): React.JSX.Element => {
    // how many items we show per page
    const itemsPerPage = 20

    // all of the transcripts for the ceremony
    const [transcripts, setTranscripts] = useState<ITranscript[]>([])
    // the first index of the transcripts to show
    const [startIndex, setStartIndex] = useState<number>(0)
    // the last index of the transcripts to show
    const [endIndex, setEndIndex] = useState<number>(itemsPerPage)
    // the search term to filter transcripts by
    const [searchTerm, setSearchTerm] = useState<string>('')
    // the circuit to filter transcripts by
    const [selectedCircuit, setSelectedCircuit] = useState<string>('')
    // the index of the transcript to show in the modal
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    // whether the modal is open or not
    const [isOpen, setIsOpen] = useState<boolean>(false)

    /**
     * Set the index of the transcript and open the modal
     * @param index <number> - the index of the transcript to show in the modal
     */
    const onOpen = (index: number) => {
        setSelectedIndex(index)
        setIsOpen(true)
    }

    // on mount, get all transcripts
    useEffect(() => {
        const _getTranscripts = async () => {
            const response = await getAllVerificationTranscripts()
            setTranscripts(response)
        }

        _getTranscripts().catch()
    }, [])

    /**
     * Change the table view
     * @param index <number> - the page index
     */
    const paginate = (index: number) => {
        if (index === 1) {
            setStartIndex(0)
            setEndIndex(itemsPerPage)
        } else {
            setEndIndex(index * itemsPerPage)
            setStartIndex(index * itemsPerPage - itemsPerPage)
        }
    }

    /**
     * Download a transcript as a text file
     * @param transcriptIndex <number> - the index of the transcript to download
     */
    const download = (transcriptIndex: number) => {
        const transcript = transcripts[transcriptIndex]
        const url = window.URL.createObjectURL(new Blob([transcript.content]))

        const link = document.createElement('a')
        link.href = url
        link.setAttribute(
            'download',
            `transcript-${transcript.circuitName}-${transcript.zKeyIndex}.txt`
        )
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    /**
     * The filter function to check whether a transcript should be shown
     * based on the circuit name
     * @param transcript <ITranscript> - the transcript to check
     * @returns <boolean> - whether the transcript matches the selected circuit
     */
    const checkByCircuit = (transcript: ITranscript): boolean => {
        if (selectedCircuit === '') return true
        return transcript.circuitName === selectedCircuit
    }

    /**
     * The filter function to check whether a transcript should be shown
     * based on the search term
     * @param transcript <ITranscript> - the transcript to check
     * @returns <boolean> - whether the transcript matches the search term
     */
    const checkSearch = (transcript: ITranscript): boolean => {
        if (searchTerm === '') return true
        // if it's alphanumerical it's the zkey index
        if (searchTerm.match(/^[0-9]+$/)) {
            return transcript.zKeyIndex.includes(searchTerm)
        }
        // otherwise is the participant index
        return transcript.contributorId.includes(searchTerm)
    }

    return (
        <>
            {transcripts && transcripts.length > 0 && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <ModalOverlay />
                    <ModalContent borderRadius="25px" background={MaciLightYellow}>
                        <ModalHeader>
                            <Stack
                                direction="row"
                                justify="flex-start"
                                align="flex-start"
                                width="100%"
                                height="100%">
                                <img src={Layer17} width="10%" height="10%" />
                                <Text padding="1.5%">Verification Details</Text>
                            </Stack>
                        </ModalHeader>
                        <ModalCloseButton padding="5%" width="10%" />
                        <ModalBody>
                            <Stack>
                                <Text>Contribution Index</Text>
                                <Text
                                    borderWidth="2px"
                                    borderColor={MaciBlack}
                                    borderRadius="10px"
                                    padding="3%"
                                    background={MaciWhite}>
                                    {transcripts[selectedIndex].zKeyIndex}
                                </Text>
                            </Stack>
                            <Stack>
                                <Text marginTop="3%">Contributor ID</Text>
                                <Text
                                    borderWidth="2px"
                                    borderColor={MaciBlack}
                                    borderRadius="10px"
                                    padding="3%"
                                    background={MaciWhite}>
                                    {transcripts[selectedIndex].contributorId}
                                </Text>
                            </Stack>
                            <Stack>
                                <Text marginTop="3%">Contribution Hash</Text>
                                <Text
                                    borderWidth="2px"
                                    borderColor={MaciBlack}
                                    borderRadius="10px"
                                    padding="3%"
                                    background={MaciWhite}>
                                    {transcripts[selectedIndex].contributionHash}
                                </Text>
                            </Stack>
                            <Stack>
                                <Text marginTop="3%">Verification Transcript</Text>
                                <Text
                                    borderWidth="2px"
                                    borderColor={MaciBlack}
                                    borderRadius="10px"
                                    padding="3%"
                                    background={MaciWhite}>
                                    {transcripts[selectedIndex].url}
                                </Text>
                            </Stack>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}

            <Stack
                paddingBottom="5%"
                direction="row"
                justify="center"
                width="100%"
                height="100%"
                maxWidth="100%">
                <Stack justify="flex-start" align="flex-start" spacing="0px">
                    <Stack direction="row" justify="flex-start" align="center" width="100%"></Stack>
                    <Stack width="100%" justify="flex-start" align="flex-start" spacing="0px">
                        <Stack
                            padding="20px"
                            borderTopRadius="20px"
                            direction="row"
                            justify="flex-start"
                            align="flex-start"
                            borderColor="#000000"
                            borderWidth="1px"
                            width="100%"
                            background={MaciLightBase}>
                            <Stack width="80%" textAlign="left">
                                <Text
                                    lineHeight="0.99"
                                    fontWeight="bold"
                                    fontSize="40px"
                                    letterSpacing="0.01em"
                                    color={MaciBlack}>
                                    Verification transcript
                                </Text>
                            </Stack>

                            <Stack
                                direction="row"
                                justify="flex-start"
                                align="flex-start"
                                width="100%">
                                <Stack width="50%" justify="flex-end" align="flex-end">
                                    <Stack
                                        height="48px"
                                        alignSelf="stretch"
                                        direction="row"
                                        justify="flex-end"
                                        align="center"
                                        width="100%">
                                        {props.circuits && (
                                            <Select
                                                borderWidth="1px"
                                                borderColor={MaciBlack}
                                                background={MaciWhite}
                                                placeholder="Select circuit"
                                                onChange={(e: any) =>
                                                    setSelectedCircuit(e.target.value)
                                                }>
                                                {props.circuits.map(
                                                    (circuit: ICircuit, index: number) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                value={circuit.name}>
                                                                {circuit.name}
                                                            </option>
                                                        )
                                                    }
                                                )}
                                            </Select>
                                        )}
                                    </Stack>
                                </Stack>
                                <Stack width="100%">
                                    <SearchBar
                                        setSearch={setSearchTerm}
                                        placeholder="Search contribution index or contributor ID"
                                    />
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
                            <Table
                                textAlign="center"
                                variant="simple"
                                width="100%"
                                borderColor={MaciBlack}>
                                <Thead>
                                    <Tr>
                                        <Tooltip label="The unique identifier of the contribution (sequential number).">
                                            <Th
                                                lineHeight="1.5"
                                                fontWeight="bold"
                                                fontSize="16px"
                                                letterSpacing="0.02em"
                                                color={MaciBlack}>
                                                Contribution index
                                            </Th>
                                        </Tooltip>
                                        <Tooltip label="The unique identifier of the contributor">
                                            <Th
                                                lineHeight="1.5"
                                                fontWeight="bold"
                                                fontSize="16px"
                                                letterSpacing="0.02em"
                                                color={MaciBlack}>
                                                Contributor ID
                                            </Th>
                                        </Tooltip>
                                        <Tooltip label="The name of the circuit">
                                            <Th
                                                lineHeight="1.5"
                                                fontWeight="bold"
                                                fontSize="16px"
                                                letterSpacing="0.02em"
                                                color={MaciBlack}>
                                                Circuit Name
                                            </Th>
                                        </Tooltip>
                                        <Tooltip label="The hash of the contribution">
                                            <Th
                                                lineHeight="1.5"
                                                fontWeight="bold"
                                                fontSize="16px"
                                                letterSpacing="0.02em"
                                                color={MaciBlack}>
                                                Contribution Hash
                                            </Th>
                                        </Tooltip>
                                        <Tooltip label="A text file hosted on S3 with the transcript of the contribution verification">
                                            <Th
                                                lineHeight="1.5"
                                                fontWeight="bold"
                                                fontSize="16px"
                                                letterSpacing="0.02em"
                                                color={MaciBlack}>
                                                Verification Transcript
                                            </Th>
                                        </Tooltip>
                                        <Tooltip label="Download the verification transcript as a text file">
                                            <Th
                                                lineHeight="1.5"
                                                fontWeight="bold"
                                                fontSize="16px"
                                                letterSpacing="0.02em"
                                                color={MaciBlack}>
                                                Download
                                            </Th>
                                        </Tooltip>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {transcripts &&
                                        transcripts
                                            .filter(checkByCircuit)
                                            .filter(checkSearch)
                                            .slice(startIndex, endIndex)
                                            .map((transcript: ITranscript, index: number) => {
                                                return (
                                                    <Tr
                                                        cursor="pointer"
                                                        onClick={() => onOpen(index)}
                                                        key={index}>
                                                        <Td>
                                                            <Text color={MaciBlack}>
                                                                {transcript.zKeyIndex}
                                                            </Text>
                                                        </Td>
                                                        <Td>
                                                            <Text color={MaciBlack}>
                                                                {getEllipsisTxt(
                                                                    transcript.contributorId,
                                                                    10
                                                                )}
                                                            </Text>
                                                        </Td>
                                                        <Td>
                                                            <Text color={MaciBlack}>
                                                                {transcript.circuitName}
                                                            </Text>
                                                        </Td>
                                                        <Td>
                                                            <Text color={MaciBlack}>
                                                                {getEllipsisTxt(
                                                                    transcript.contributionHash,
                                                                    10
                                                                )}
                                                            </Text>
                                                        </Td>
                                                        <Td>
                                                            <Text color={MaciBlack}>
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
                                                                onClick={() => download(index)}>
                                                                {' '}
                                                                Download
                                                            </Button>
                                                        </Td>
                                                    </Tr>
                                                )
                                            })}
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
                            background={MaciLightBase}>
                            <Stack
                                direction="row"
                                justify="flex-start"
                                align="center"
                                spacing="0px">
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
                                <Stack
                                    direction="row"
                                    justify="flex-start"
                                    align="flex-start"
                                    spacing="0px">
                                    <Box
                                        borderRadius="35px"
                                        width="69px"
                                        height="69px"
                                        background={MaciBlack}
                                    />
                                </Stack>
                            </Stack>
                            <Stack>
                                <NumberInput
                                    min={1}
                                    max={transcripts.length / itemsPerPage}
                                    borderRadius="5px"
                                    borderWidth="1px"
                                    borderColor={MaciBlack}
                                    defaultValue="1"
                                    size="lg"
                                    onChange={(valueString: string, valueNumber: number) => {
                                        paginate(valueNumber)
                                    }}>
                                    <NumberInputField borderWidth="0px" />
                                    <NumberInputStepper background="white">
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
