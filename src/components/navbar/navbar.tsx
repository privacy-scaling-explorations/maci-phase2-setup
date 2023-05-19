import { Stack, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { MaciBlack, MaciLightYellow, MaciWhite, MaciYellow } from '../../utils/colors'
import React, { useEffect, useState } from "react"
import { getTotalNumberOfContributions } from '../../utils/fetchers'

export const NavBar = (props: any): React.JSX.Element => {

	const [totalContributions, setTotalContributions] = useState(0)

	useEffect(() => {
		const _getTotalContributions = async () => {
			const total = await getTotalNumberOfContributions()
			setTotalContributions(total)
		}

		_getTotalContributions().catch()

	}, [])

	return (
		<Stack
		background={props.background}
		paddingEnd="100px"
		width="100%"
		direction="row"
		justify="space-between"
		align="center"
		spacing="537px"
		paddingTop="2%"
		>
			<Stack
			direction="row"
			justify="flex-start"
			align="flex-start"
			spacing="-130px"
			>
			<Stack
				paddingStart="100px"
				paddingEnd="121px"
				paddingY="14px"
				direction="row"
				justify="flex-start"
				align="flex-start"
				spacing="10px"
				borderColor="#000000"
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
				borderStyle="dashed"
				width="449px"
				maxWidth="100%"
			>
				<Link to={'/'}>
					<Text
					
					lineHeight="1.25"
					fontWeight="black"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					<span>MACI V1 CEREMONY </span>
					</Text>
				</Link>
			</Stack>
			<Stack
				paddingX="20px"
				paddingY="14px"
				borderRadius="35px"
				direction="row"
				justify="flex-start"
				align="flex-start"
				spacing="10px"
				borderColor={MaciBlack}
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
				background={MaciWhite}
			>
				<Text
				
				lineHeight="1.25"
				fontWeight="bold"
				fontSize="16px"
				letterSpacing="0.03em"
				color="#18181B"
				>
				<span>{`${totalContributions} CONTRIBUTORS`}</span>
				</Text>
			</Stack>
			</Stack>
			<Stack
			direction="row"
			justify="flex-start"
			align="flex-start"
			spacing="0px"
			>
			<Stack
				paddingX="20px"
				paddingY="14px"
				borderRadius="35px"
				direction="row"
				justify="flex-start"
				align="flex-start"
				spacing="28px"
				borderColor="#000000"
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
			>
				<Link to={'/documentation'}>
					<Text
					
					lineHeight="1.25"
					fontWeight="bold"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					GET STARTED
					</Text>
				</Link>
				<Link to={'https://privacy-scaling-explorations.github.io/maci/'} target='_blank'>
					<Text
					
					lineHeight="1.25"
					fontWeight="regular"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					Documentation
					</Text>
				</Link>
			</Stack>
			<Stack
				padding="11px"
				direction="row"
				justify="flex-start"
				align="flex-start"
				spacing="10px"
				borderColor={MaciBlack}
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
				borderRadius="50px"
			>
				<Stack property="Light" 
				borderRadius="20px"
				width="26px"
				height="26px">
				</Stack>
			</Stack>
			</Stack>
		</Stack>
	)
}