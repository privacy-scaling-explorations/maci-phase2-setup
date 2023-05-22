import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MaciBlack, MaciLightYellow, MaciYellow } from '../utils/colors'
import VectorDown from '../assets/Vector.svg'
import AuthGitHubImg from "../assets/authGitHub.svg"
import ContributeImg from "../assets/contributeImg.svg"
import { NavBar } from '../components/navbar/navbar'
import ContributeTitle from "../assets/contributionsteps.svg"

export const Documentation = (): React.JSX.Element => {
	return (
	<>
		<NavBar background={MaciLightYellow} /> 
		<Stack
		backgroundColor={MaciLightYellow}
		paddingTop="5%"
		paddingX="100px"
		paddingBottom="5%"
		justify="center"
		align="center"
		spacing="10px"
		width="100%"
		height="100%"
		maxWidth="100%"
	>
		<Stack
		justify="flex-start"
		align="center"
		spacing="175px"
		width="100%"
		height="100%"
		maxWidth="100%"
		>
		<Stack justify="flex-start" align="center" spacing="123px">
			<Stack justify="flex-start" align="flex-start" spacing="-1px">
			<Stack
				direction="row"
				justify="flex-start"
				align="flex-start"
				spacing="0px"
			>
				<img src={ContributeTitle} />
			</Stack>
			</Stack>
			<Stack
			direction="row"
			justify="flex-start"
			align="flex-start"
			spacing="106px"
			>
			<Stack
				paddingX="20px"
				paddingTop="49px"
				paddingBottom="20px"
				borderRadius="35px"
				justify="flex-end"
				align="center"
				spacing="48px"
				borderColor={MaciBlack}
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
				width="343px"
				height="424.67px"
				maxWidth="100%"
				background={MaciYellow}
			>
				<img src={VectorDown} />
				<Stack
				justify="flex-start"
				align="flex-start"
				spacing="14px"
				alignSelf="stretch"
				>

				<Text
					
					lineHeight="1.29"
					fontWeight="medium"
					fontSize="28px"
					letterSpacing="0.01em"
					color={MaciBlack}
					alignSelf="stretch"
				>
					Be prepared (install everything)
				</Text>
				<span className="unsupported" />
				<Text
					
					lineHeight="1.25"
					fontWeight="medium"
					fontSize="16px"
					letterSpacing="0.03em"
					color={MaciBlack}
					alignSelf="stretch"
				>
					Step 1
				</Text>
				</Stack>
			</Stack>
			<Stack
				paddingX="20px"
				paddingTop="49px"
				paddingBottom="20px"
				borderRadius="35px"
				justify="flex-end"
				align="center"
				spacing="48px"
				borderColor={MaciBlack}
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
				width="343px"
				height="424.67px"
				maxWidth="100%"
				background={MaciYellow}
			>
				<img src={AuthGitHubImg} />
				<Stack
				justify="flex-start"
				align="flex-start"
				spacing="14px"
				alignSelf="stretch"
				>
				<Text
					
					lineHeight="1.29"
					fontWeight="medium"
					fontSize="28px"
					letterSpacing="0.01em"
					color={MaciBlack}
					alignSelf="stretch"
				>
					Authenticate with Github using cli
				</Text>
				<span className="unsupported" />
				<Text
					
					lineHeight="1.25"
					fontWeight="medium"
					fontSize="16px"
					letterSpacing="0.03em"
					color={MaciBlack}
					alignSelf="stretch"
				>
					Step 2
				</Text>
				</Stack>
			</Stack>
			<Stack
				paddingX="20px"
				paddingTop="49px"
				paddingBottom="20px"
				borderRadius="35px"
				justify="flex-end"
				align="center"
				spacing="48px"
				borderColor={MaciBlack}
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
				width="343px"
				height="424.67px"
				maxWidth="100%"
				background={MaciYellow}
			>
				<img src={ContributeImg} />
				<Stack
				justify="flex-start"
				align="flex-start"
				spacing="14px"
				alignSelf="stretch"
				>
				<Text
					
					lineHeight="1.29"
					fontWeight="medium"
					fontSize="28px"
					letterSpacing="0.01em"
					color={MaciBlack}
					alignSelf="stretch"
				>
					Ready to contribute!
				</Text>
				<span className="unsupported" />
				<Text
					
					lineHeight="1.25"
					fontWeight="medium"
					fontSize="16px"
					letterSpacing="0.03em"
					color={MaciBlack}
					alignSelf="stretch"
				>
					Step 3
				</Text>
				</Stack>
			</Stack>
			</Stack>
		</Stack>
		</Stack>
	</Stack>
	</>
	)
}
