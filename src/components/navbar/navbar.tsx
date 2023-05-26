import { Stack, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { MaciBlack, MaciWhite } from '../../utils/colors'
import React, { useEffect, useState } from "react"
import { getNumberOfContributors } from '../../utils/fetchers'

export const NavBar = (props: any): React.JSX.Element => {

	const [totalContributors, setTotalContributors] = useState(0)

	useEffect(() => {
		const _getTotalContributors = async () => {
			const total = await getNumberOfContributors()
			setTotalContributors(total)
		}

		_getTotalContributors().catch()

	}, [])

	return (
		<Stack
		background={props.background}
		width="100%"
		direction="row"
		justify="space-between"
		align="center"
		paddingTop="2%"
		>
			<Stack
			direction="row"
			justify="flex-start"
			align="flex-start"
			spacing="-10%"
			>
				<Stack
					padding="2.2%"
					paddingLeft="10%"
					direction="row"
					justify="flex-start"
					align="flex-start"
					borderColor={MaciBlack}
					borderWidth="1px"
					borderStyle="dashed"
					width="449px"
				>
					<Link to={'/'}>
						<Text
						lineHeight="1.25"
						fontWeight="black"
						fontSize="16px"
						letterSpacing="0.03em"
						color={MaciBlack}
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
					borderWidth="1px"
					background={MaciWhite}
				>
					<Text
					lineHeight="1.25"
					fontWeight="bold"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					<span>{`${totalContributors} CONTRIBUTORS`}</span>
					</Text>
				</Stack>
			</Stack>
			<Stack
			direction="row"
			justify="flex-start"
			align="flex-start"
			>
				<Stack
					paddingX="20px"
					paddingY="14px"
					borderRadius="35px"
					direction="row"
					justify="flex-start"
					align="flex-start"
					spacing="28px"
					borderColor={MaciBlack}
					borderWidth="1px"
				>
					<Link to={'/get-started'}>
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
			</Stack>
		</Stack>
	)
}