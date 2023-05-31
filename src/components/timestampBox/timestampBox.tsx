import React from 'react'
import { Stack, Box, Text } from '@chakra-ui/react'
import { MaciBlack, MaciLightYellow, MaciWhite } from '../../utils/colors'
import { ITimestampBoxProps } from '../../utils/interfaces'

/**
 * A component which renders the timestamp box for the instructions video
 * @param <ITimestampBoxProps> - the props for the TimestampBox component (see interfaces.tsx)
 * @returns <React.JSX.Element> - the TimestampBox component
 */
export const TimestampBox = (props: ITimestampBoxProps): React.JSX.Element => {
    return (
        <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Stack
                borderTopRadius="23px"
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                borderColor={MaciLightYellow}
                borderWidth="1px"
                height="88px">
                <Stack
                    paddingX="16px"
                    paddingY="10px"
                    borderRadius="100px"
                    direction="row"
                    justify="center"
                    align="center"
                    spacing="10px"
                    width="248px"
                    maxWidth="100%"
                    background={MaciLightYellow}>
                    <Text
                        fontFamily="Poppins"
                        lineHeight="1.27"
                        fontWeight="bold"
                        fontSize="22px"
                        color={MaciBlack}
                        flex="1">
                        Contribution Steps
                    </Text>
                </Stack>
                <Stack direction="row" justify="flex-start" align="flex-start" spacing="0px">
                    <Box
                        borderRadius="24px"
                        width="47px"
                        height="47px"
                        borderColor={MaciLightYellow}
                        borderStartWidth="1px"
                        borderEndWidth="1px"
                        borderTopWidth="1px"
                        borderBottomWidth="1px"
                        borderStyle="dashed"
                    />
                </Stack>
            </Stack>
            <Stack justify="flex-start" align="flex-start" spacing="0px">
                <Stack
                    paddingX="12px"
                    paddingY="20px"
                    direction="row"
                    justify="flex-start"
                    align="center"
                    spacing="14px"
                    borderColor={MaciLightYellow}
                    borderStartWidth="1px"
                    borderEndWidth="1px"
                    borderTopWidth="1px"
                    borderBottomWidth="1px"
                    width="295px"
                    maxWidth="100%"
                    cursor="pointer"
                    onClick={() => props.setTimestamp(0)}>
                    <Stack direction="row" justify="flex-start" align="flex-start" spacing="12px">
                        <Stack
                            padding="10px"
                            borderRadius="100px"
                            direction="row"
                            justify="center"
                            align="center"
                            spacing="10px"
                            borderColor={MaciWhite}
                            borderStartWidth="1px"
                            borderEndWidth="1px"
                            borderTopWidth="1px"
                            borderBottomWidth="1px"
                            width="24px"
                            height="24px"></Stack>
                        <Stack justify="flex-start" align="flex-start">
                            <Text
                                fontFamily="Poppins"
                                lineHeight="1.25"
                                fontWeight="medium"
                                fontSize="16px"
                                color={MaciWhite}
                                width="152px">
                                CLI Installation
                            </Text>
                        </Stack>
                    </Stack>
                    <Text
                        fontFamily="Poppins"
                        lineHeight="1.25"
                        fontWeight="regular"
                        fontSize="16px"
                        color={MaciWhite}
                        flex="1"
                        textAlign="end">
                        00:00
                    </Text>
                </Stack>
                <Stack
                    paddingX="12px"
                    paddingY="20px"
                    direction="row"
                    justify="flex-start"
                    align="center"
                    spacing="14px"
                    borderColor={MaciLightYellow}
                    borderStartWidth="1px"
                    borderEndWidth="1px"
                    width="295px"
                    maxWidth="100%"
                    cursor="pointer"
                    onClick={() => props.setTimestamp(150)}>
                    <Stack direction="row" justify="flex-start" align="flex-start" spacing="12px">
                        <Stack
                            padding="10px"
                            borderRadius="100px"
                            direction="row"
                            justify="center"
                            align="center"
                            spacing="10px"
                            borderColor={MaciWhite}
                            borderStartWidth="1px"
                            borderEndWidth="1px"
                            borderTopWidth="1px"
                            borderBottomWidth="1px"
                            width="24px"
                            height="24px"></Stack>
                        <Stack justify="flex-start" align="flex-start">
                            <Text
                                fontFamily="Poppins"
                                lineHeight="1.25"
                                fontWeight="medium"
                                fontSize="16px"
                                color={MaciWhite}
                                width="157px">
                                CLI Authentification
                            </Text>
                        </Stack>
                    </Stack>
                    <Text
                        fontFamily="Poppins"
                        lineHeight="1.25"
                        fontWeight="regular"
                        fontSize="16px"
                        color={MaciWhite}
                        flex="1"
                        textAlign="end">
                        00:00
                    </Text>
                </Stack>
                <Stack
                    paddingX="12px"
                    paddingY="20px"
                    borderBottomRadius="10px"
                    direction="row"
                    justify="flex-start"
                    align="center"
                    spacing="14px"
                    borderColor={MaciLightYellow}
                    borderStartWidth="1px"
                    borderEndWidth="1px"
                    borderTopWidth="1px"
                    borderBottomWidth="1px"
                    width="295px"
                    maxWidth="100%"
                    cursor="pointer"
                    onClick={() => props.setTimestamp(300)}>
                    <Stack direction="row" justify="flex-start" align="flex-start" spacing="12px">
                        <Stack
                            padding="10px"
                            borderRadius="100px"
                            direction="row"
                            justify="center"
                            align="center"
                            spacing="10px"
                            borderColor={MaciWhite}
                            borderStartWidth="1px"
                            borderEndWidth="1px"
                            borderTopWidth="1px"
                            borderBottomWidth="1px"
                            width="24px"
                            height="24px">
                            <Stack width="13px" height="13px" />
                        </Stack>
                        <Stack justify="flex-start" align="flex-start">
                            <Text
                                fontFamily="Poppins"
                                lineHeight="1.25"
                                fontWeight="medium"
                                fontSize="16px"
                                color={MaciWhite}
                                width="152px">
                                CLI Contribution
                            </Text>
                        </Stack>
                    </Stack>
                    <Text
                        fontFamily="Poppins"
                        lineHeight="1.25"
                        fontWeight="regular"
                        fontSize="16px"
                        color={MaciWhite}
                        flex="1"
                        textAlign="end">
                        00:00
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}
