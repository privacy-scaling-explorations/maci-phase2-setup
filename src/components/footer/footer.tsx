import React from 'react'
import { Stack, Text, Box } from '@chakra-ui/react'
import { MaciBlack, MaciWhite, MaciYellow } from '../../utils/colors'
import FooterImg from '../../assets/footerimg.png'
import GitcoinImg from '../../assets/gitcoin.svg'
import CLRFundImg from '../../assets/clrfund.svg'
import { Link } from 'react-router-dom'

export const Footer = (): React.JSX.Element => (
    <Stack
        paddingX="100px"
        paddingTop="40px"
        paddingBottom="26px"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
        overflow="hidden"
        background={MaciBlack}>
        <Stack justify="flex-start" align="flex-start" spacing="35px">
            <Stack justify="flex-start" align="flex-start" spacing="43px">
                <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="173px"
                    width="100%"
                    maxWidth="100%">
                    <Stack justify="flex-start" align="flex-start" textAlign="left" spacing="20px">
                        <Text
                            lineHeight="1.27"
                            fontWeight="black"
                            fontSize="22px"
                            letterSpacing="0.03em"
                            color={MaciYellow}>
                            <span>MACI V1 CEREMONY</span>
                        </Text>
                        <Text
                            lineHeight="1.27"
                            fontWeight="medium"
                            fontSize="22px"
                            letterSpacing="0.03em"
                            color={MaciWhite}
                            width="315px"
                            maxWidth="100%">
                            Arcu scelerisque tristique ultrices feugiat interdum nibh porttitor
                            risus. Ullamcorper.
                        </Text>
                    </Stack>
                    <Stack direction="row" justify="flex-start" align="flex-start" spacing="10%">
                        <Box width="100%" textAlign="left" padding="10px">
                            <Text
                                lineHeight="1.25"
                                fontWeight="bold"
                                fontSize="16px"
                                letterSpacing="0.03em"
                                color={MaciYellow}
                                marginBottom="10%">
                                Sponsored by
                            </Text>
                            <img src={GitcoinImg} />
                            <img src={CLRFundImg} />
                        </Box>
                        <Stack
                            direction="row"
                            justify="flex-start"
                            align="flex-start"
                            spacing="110px"
                            textAlign="left"
                            width="100%">
                            <Box width="100%">
                                <Text
                                    lineHeight="1.25"
                                    fontWeight="regular"
                                    fontSize="16px"
                                    letterSpacing="0.03em"
                                    color={MaciWhite}
                                    marginBottom="10%"
                                    width="100%">
                                    Your privacy
                                </Text>
                                <Text
                                    lineHeight="1.25"
                                    fontWeight="regular"
                                    fontSize="16px"
                                    letterSpacing="0.03em"
                                    color={MaciWhite}
                                    marginBottom="10%">
                                    Legal
                                </Text>
                                <a
                                    target="_blank"
                                    href="https://github.com/privacy-scaling-explorations/maci/blob/master/audit/202220930_Hashcloak_audit_report.pdf"
                                    rel="noreferrer">
                                    <Text
                                        lineHeight="1.25"
                                        fontWeight="regular"
                                        fontSize="16px"
                                        letterSpacing="0.03em"
                                        color={MaciWhite}>
                                        Audit results
                                    </Text>
                                </a>
                            </Box>
                            <Box width="100%">
                                <a
                                    href="https://github.com/privacy-scaling-explorations/maci"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Text
                                        lineHeight="1.25"
                                        fontWeight="regular"
                                        fontSize="16px"
                                        letterSpacing="0.03em"
                                        color={MaciWhite}
                                        marginBottom="10%">
                                        MACI Repo
                                    </Text>
                                </a>
                                <a
                                    href="https://github.com/privacy-scaling-explorations/p0tion"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Text
                                        lineHeight="1.25"
                                        fontWeight="regular"
                                        fontSize="16px"
                                        letterSpacing="0.03em"
                                        color={MaciWhite}
                                        marginBottom="10%">
                                        P0T10N Repo
                                    </Text>
                                </a>

                                <a
                                    href="https://github.com/quadratic-funding/qfi"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Text
                                        lineHeight="1.25"
                                        fontWeight="regular"
                                        fontSize="16px"
                                        letterSpacing="0.03em"
                                        color={MaciWhite}>
                                        QFI Repo
                                    </Text>
                                </a>
                            </Box>
                            <Box>
                                <Text
                                    lineHeight="1.25"
                                    fontWeight="regular"
                                    fontSize="16px"
                                    letterSpacing="0.03em"
                                    color={MaciWhite}
                                    marginBottom="10%">
                                    FAQ
                                </Text>
                                <Text
                                    lineHeight="1.25"
                                    fontWeight="regular"
                                    fontSize="16px"
                                    letterSpacing="0.03em"
                                    color={MaciWhite}
                                    marginBottom="10%">
                                    <a
                                        href="https://privacy-scaling-explorations.github.io/maci/"
                                        target="_blank"
                                        rel="noreferrer">
                                        Documentation
                                    </a>
                                </Text>
                                <Link to={'/'}>
                                    <Text
                                        lineHeight="1.25"
                                        fontWeight="regular"
                                        fontSize="16px"
                                        letterSpacing="0.03em"
                                        color={MaciWhite}>
                                        Get Started
                                    </Text>
                                </Link>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                justify="space-between"
                align="center"
                spacing="100px"
                width="1239px"
                maxWidth="100%">
                <Text
                    lineHeight="1.25"
                    fontWeight="medium"
                    fontSize="16px"
                    letterSpacing="0.03em"
                    color="#787878">
                    Made by Privacy & Scaling Explorations with support from the Ethereum Foundation
                </Text>
                <Stack direction="row" justify="flex-start" align="center" spacing="10px">
                    <img src={FooterImg} />
                </Stack>
                <Stack direction="row" justify="flex-start" align="flex-start" spacing="26px">
                    <Stack
                        padding="10px"
                        direction="row"
                        justify="flex-start"
                        align="flex-start"
                        spacing="10px">
                        <Text
                            lineHeight="1.25"
                            fontWeight="medium"
                            fontSize="16px"
                            letterSpacing="0.03em"
                            color="#787878">
                            Twitter
                        </Text>
                    </Stack>
                    <Stack
                        padding="10px"
                        direction="row"
                        justify="flex-start"
                        align="flex-start"
                        spacing="10px">
                        <Text
                            lineHeight="1.25"
                            fontWeight="medium"
                            fontSize="16px"
                            letterSpacing="0.03em"
                            color="#787878">
                            Discord
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
)
