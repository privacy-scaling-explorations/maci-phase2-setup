import {
    Stack,
    Text,
    AccordionButton,
    Box,
    AccordionIcon,
    Accordion,
    AccordionItem,
    AccordionPanel
} from '@chakra-ui/react'
import { questionAndAnswers } from '../../utils/qa'
import { MaciBlack, MaciLightYellow, MaciWhite, MaciYellow } from '../../utils/colors'

/**
 * A React component which renders the FAQ section of the website.
 * @returns <React.JSX.Element> - the FAQ component
 */
export const FAQ = (): React.JSX.Element => (
    <Stack
        padding="100px"
        direction="row"
        justify="flex-start"
        align="flex-end"
        spacing="100px"
        paddingX="100px"
        background={MaciLightYellow}>
        <Stack direction="row" justify="flex-start" align="center" spacing="0px">
            <Stack justify="flex-start" spacing="20px">
                <Stack justify="flex-start">
                    <Stack justify="flex-start" align="flex-start" width="100%">
                        <Stack justify="flex-start" align="flex-start" textAlign="left">
                            <Text
                                lineHeight="0.99"
                                fontWeight="medium"
                                fontSize="48px"
                                letterSpacing="0.01em"
                                color="gray.900"
                                width="100%">
                                Have a question?
                            </Text>
                            <Text
                                lineHeight="1.56"
                                fontWeight="regular"
                                fontSize="18px"
                                letterSpacing="0.02em"
                                color={MaciBlack}
                                width="100%">
                                Start here. If you can’t find what you are looking for, visit our
                                documentation.
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction="row" justify="flex-start" align="flex-start">
                    <Stack />
                    <Stack justify="center" align="center" spacing="0px" />
                </Stack>
            </Stack>
        </Stack>
        <Stack justify="flex-start" align="flex-end" spacing="0px">
            <Stack justify="flex-start" align="center" spacing="0px">
                <Stack
                    padding="20px"
                    borderRadius="35px"
                    borderColor={MaciBlack}
                    borderWidth="1px"
                    width="669px"
                    maxWidth="100%"
                    background={MaciYellow}>
                    <Stack
                        paddingX="20px"
                        paddingTop="11px"
                        paddingBottom="10px"
                        borderRadius="25px"
                        justify="flex-start"
                        align="flex-start"
                        spacing="4px"
                        borderColor={MaciBlack}
                        borderWidth="1px"
                        alignSelf="stretch"
                        background={MaciWhite}>
                        {questionAndAnswers.map((qa, index) => {
                            return (
                                <Stack width="100%" key={index}>
                                    <Accordion width="100%" allowToggle>
                                        <AccordionItem>
                                            <h1>
                                                <AccordionButton
                                                    width="100%"
                                                    _expanded={{ bg: MaciWhite, color: 'black' }}>
                                                    <Box
                                                        fontWeight="bold"
                                                        as="span"
                                                        flex="1"
                                                        textAlign="left">
                                                        {qa.question}
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h1>
                                            <AccordionPanel textAlign="left">
                                                {qa.answer}
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
)
