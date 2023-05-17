import { Stack, Text, Box, Button, Tag, Circle } from '@chakra-ui/react'
import { MaciBlack, MaciLightYellow, MaciWhite } from '../utils/colors'
import { getAllCircuitsInfo, getCeremonyState, getVerificationTranscript } from '../utils/fetchers'
import { useEffect, useState } from 'react'
import { ICircuit } from '../utils/interfaces'

export const Home = () => {

	const [circuits, setCircuits] = useState<ICircuit[]>([])
	const [totalContributions, setTotalContributions] = useState<number>(0)
	const [isCeremonyOngoing, setIsCeremonyOngoing] = useState<boolean>(false)

	useEffect(() => {
		const _getTranscript = async () => {
			await getVerificationTranscript("00001", false, "u6MzqGMsJuVDQVp9r0Jv")

		}

		const _checkCeremonyState = async () => {
			const state = await getCeremonyState()
			setIsCeremonyOngoing(state)
		}

		const _getCircuitsData = async () => {
			const data = await getAllCircuitsInfo()
			setCircuits(data)
		}

		const _getTotalContributions = async () => {
			const total = circuits.reduce((acc, curr) => acc + curr.completedContributions, 0)
			setTotalContributions(total)
		}

		_getCircuitsData().catch()
		_checkCeremonyState().catch()
		_getTotalContributions().catch()
		_getTranscript().catch()
	}, [])


	return (
		<Stack
			paddingTop="32px"
			paddingBottom="16px"
			paddingX="100px"
			justify="center"
			align="center"
			spacing="0px"
			width="1440px"
			height="983px"
			maxWidth="100%"
		>
			<Stack
			justify="flex-start"
			align="flex-start"
			spacing="175px"
			flex="1"
			alignSelf="stretch"
			>
			<Stack
				paddingEnd="100px"
				width="1440px"
				maxWidth="100%"
				direction="row"
				justify="space-between"
				align="center"
				spacing="537px"
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
					<Text
					fontFamily="Aeonik"
					lineHeight="1.25"
					fontWeight="black"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					<span>MACI V1 </span>
					<Box as="span" fontWeight="regular" letterSpacing="0.2em">
						CEREMONY
					</Box>
					</Text>
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
					fontFamily="Aeonik"
					lineHeight="1.25"
					fontWeight="bold"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					<span>30,000 </span>
					<Box as="span" letterSpacing="0.15em">
						CONTRIBUTORS
					</Box>
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
					<Text
					fontFamily="Aeonik"
					lineHeight="1.25"
					fontWeight="bold"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					GET STARTED
					</Text>
					<Text
					fontFamily="Aeonik"
					lineHeight="1.25"
					fontWeight="regular"
					fontSize="16px"
					letterSpacing="0.03em"
					color="#18181B"
					>
					Documentation
					</Text>
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
				>
					<Stack property="Light" width="26px" height="26px">
					<Box />
					</Stack>
				</Stack>
				</Stack>
			</Stack>
			<Stack direction="row" justify="flex-start" align="center" spacing="-1px">
				<Stack
				justify="flex-start"
				align="flex-start"
				spacing="-1px"
				width="710px"
				maxWidth="100%"
				>
				<Stack
					paddingStart="101px"
					paddingEnd="26px"
					paddingY="14px"
					borderRightRadius="100px"
					direction="row"
					justify="flex-start"
					align="center"
					spacing="0px"
					borderColor="#000000"
					borderStartWidth="1.5px"
					borderEndWidth="1.5px"
					borderTopWidth="1.5px"
					borderBottomWidth="1.5px"
					borderStyle="dashed"
					width="415px"
					height="44px"
					maxWidth="100%"
				>
					<Text
					fontFamily="Aeonik"
					lineHeight="1.33"
					fontWeight="bold"
					fontSize="12px"
					letterSpacing="0.16em"
					color="#18181B"
					flex="1"
					alignSelf="stretch"
					>
					POWERED BY THE P0T10N PROTOCOL
					</Text>
				</Stack>
				<Stack
					direction="row"
					justify="flex-start"
					align="flex-start"
					spacing="0px"
				>
					<Stack
					justify="flex-start"
					align="flex-start"
					spacing="-1px"
					width="572px"
					height="331px"
					maxWidth="100%"
					>
					<Stack
						paddingStart="20px"
						paddingEnd="50px"
						paddingY="22px"
						borderRightRadius="35px"
						direction="row"
						justify="flex-start"
						align="center"
						spacing="12px"
						borderColor="#000000"
						borderStartWidth="1px"
						borderEndWidth="1px"
						borderTopWidth="1px"
						borderBottomWidth="1px"
						width="573px"
						maxWidth="100%"
					>
						<Stack width="67px" height="74px" />
						<Text
						fontFamily="Aeonik"
						lineHeight="0.99"
						fontWeight="medium"
						fontSize="48px"
						letterSpacing="0.01em"
						color="#18181B"
						flex="1"
						>
						MACI V1 Trusted Setup Ceremony
						</Text>
					</Stack>
					<Stack
						paddingEnd="73px"
						direction="row"
						justify="flex-start"
						align="flex-start"
						spacing="0px"
						alignSelf="stretch"
					>
						<Stack
						paddingStart="100px"
						paddingEnd="47px"
						paddingY="12px"
						borderRadius="100px"
						direction="row"
						justify="center"
						align="center"
						spacing="10px"
						borderColor="#000000"
						borderStartWidth="1px"
						borderEndWidth="1px"
						borderTopWidth="1px"
						borderBottomWidth="1px"
						width="572px"
						height="80px"
						maxWidth="100%"
						background={MaciWhite}
						>
						<Text
							fontFamily="Aeonik"
							lineHeight="1.56"
							fontWeight="regular"
							fontSize="18px"
							letterSpacing="0.02em"
							color={MaciBlack}
							flex="1"
							alignSelf="stretch"
						>
							Arcu scelerisque tristique ultrices feugiat interdum nibh
							porttitor risus ullamcorper.
						</Text>
						</Stack>
					</Stack>
					<Stack
						paddingX="100px"
						paddingY="32px"
						justify="flex-start"
						align="flex-start"
						spacing="0px"
						flex="1"
						alignSelf="stretch"
					>
						<Button
						size="L"
						color="Primary"
						fill="Solid + outline"
						width="190px"
						height="48px"
						>
						<Text
							fontFamily="Aeonik"
							lineHeight="1.25"
							fontWeight="bold"
							fontSize="16px"
							letterSpacing="0.03em"
							color={MaciBlack}
						>
							GET STARTED
						</Text>
						<Stack width="20px" height="20px">
						</Stack>
						</Button>
					</Stack>
					</Stack>
					<Stack
					justify="flex-start"
					align="flex-start"
					spacing="-1px"
					width="136px"
					>
					<Stack
						borderRadius="35px"
						justify="flex-start"
						align="flex-start"
						spacing="0px"
						borderColor={MaciBlack}
						borderStartWidth="1px"
						borderEndWidth="1px"
						borderTopWidth="1px"
						borderBottomWidth="1px"
						width="138px"
						height="138px"
					>
						<Stack justify="flex-start" align="flex-start" spacing="0px">
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
							borderColor={MaciBlack}
							borderStartWidth="1px"
							borderEndWidth="1px"
							borderTopWidth="1px"
							borderBottomWidth="1px"
							borderStyle="dashed"
							/>
							<Box
							borderRadius="35px"
							width="69px"
							height="69px"
							borderColor={MaciBlack}
							borderStartWidth="1px"
							borderEndWidth="1px"
							borderTopWidth="1px"
							borderBottomWidth="1px"
							borderStyle="dashed"
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
							borderColor={MaciBlack}
							borderStartWidth="1.5px"
							borderEndWidth="1.5px"
							borderTopWidth="1.5px"
							borderBottomWidth="1.5px"
							borderStyle="dashed"
							/>
							<Box
							borderRadius="35px"
							width="69px"
							height="69px"
							borderColor={MaciBlack}
							borderStartWidth="1px"
							borderEndWidth="1px"
							borderTopWidth="1px"
							borderBottomWidth="1px"
							borderStyle="dashed"
							/>
						</Stack>
						</Stack>
					</Stack>
					<Stack
						borderRadius="35px"
						justify="flex-start"
						align="flex-start"
						spacing="0px"
						overflow="hidden"
						borderColor={MaciBlack}
						borderStartWidth="1px"
						borderEndWidth="1px"
						borderTopWidth="1px"
						borderBottomWidth="1px"
						width="138px"
						height="137px"
					>
						<Stack
						direction="row"
						justify="flex-start"
						align="flex-start"
						spacing="0px"
						width="137px"
						height="137px"
						>
						<Box width="318.87px" height="349.14px" maxWidth="100%" />
						</Stack>
					</Stack>
					<Stack
						borderRadius="35px"
						justify="flex-start"
						align="flex-start"
						spacing="0px"
						overflow="hidden"
						width="137px"
						height="137px"
					>
						<Stack
						direction="row"
						justify="center"
						align="center"
						spacing="0px"
						width="137px"
						height="137px"
						>
						<Stack width="59.4px" height="33px" />
						</Stack>
					</Stack>
					</Stack>
				</Stack>
				</Stack>
				<Stack
				padding="20px"
				borderRadius="35px"
				justify="center"
				align="center"
				spacing="-1px"
				borderColor={MaciBlack}
				borderStartWidth="1px"
				borderEndWidth="1px"
				borderTopWidth="1px"
				borderBottomWidth="1px"
				width="632px"
				maxWidth="100%"
				background="#FFFFFF"
				>
				<Stack
					padding="18px"
					borderRadius="25px"
					justify="flex-start"
					align="flex-start"
					spacing="30px"
					borderColor="#000000"
					borderStartWidth="1px"
					borderEndWidth="1px"
					borderTopWidth="1px"
					borderBottomWidth="1px"
					height="186.5px"
					alignSelf="stretch"
					background={MaciLightYellow}
				>
					<Stack
					direction="row"
					justify="space-between"
					align="flex-start"
					spacing="0px"
					alignSelf="stretch"
					>
					<Text
						fontFamily="Aeonik"
						lineHeight="1.27"
						fontWeight="bold"
						fontSize="22px"
						letterSpacing="0.03em"
						color="#000000"
						width="493px"
						alignSelf="stretch"
						maxWidth="100%"
					>
						Contribution stats
					</Text>
					<Tag width="65px">
						<Circle size="8px" background="#EF4444" />
						<Text
						fontFamily="Aeonik"
						lineHeight="1.33"
						fontWeight="medium"
						fontSize="12px"
						letterSpacing="0.02em"
						color="Black"
						textAlign="center"
						>
						{isCeremonyOngoing ? 'Live' : 'Finished'}
						</Text>
					</Tag>
					</Stack>
					<Stack
					direction="row"
					justify="flex-start"
					align="center"
					spacing="16px"
					flex="1"
					alignSelf="stretch"
					>
					<Text
						fontFamily="Aeonik"
						lineHeight="0.79"
						fontWeight="medium"
						fontSize="60px"
						letterSpacing="0.01em"
						color={MaciBlack}
					>
						{totalContributions}
					</Text>
					<Text
						fontFamily="Aeonik"
						lineHeight="1.25"
						fontWeight="medium"
						fontSize="16px"
						letterSpacing="0.03em"
						color="#000000"
					>
						completed contributions
					</Text>
					</Stack>
				</Stack>
				{
					circuits.map((circuit, index) => {
						return (
							<Stack
							key={index}
							justify="flex-start"
							align="flex-start"
							spacing="-1px"
							alignSelf="stretch"
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
								borderStartWidth="1px"
								borderEndWidth="1px"
								borderTopWidth="1px"
								borderBottomWidth="1px"
							>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.33"
								fontWeight="regular"
								fontSize="12px"
								letterSpacing="0.02em"
								color="Muted Colors.500"
								alignSelf="stretch"
								>
								Current contributor
								</Text>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{circuit.currentContributor}
								</Text>
							</Stack>
							<Stack
								padding="18px"
								flex="1"
								justify="center"
								align="flex-start"
								spacing="18px"
								borderColor={MaciBlack}
								borderStartWidth="1px"
								borderEndWidth="1px"
								borderTopWidth="1px"
								borderBottomWidth="1px"
							>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.33"
								fontWeight="regular"
								fontSize="12px"
								letterSpacing="0.02em"
								color="Muted Colors.500"
								alignSelf="stretch"
								>
								Contributors
								</Text>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{circuit.completedContributions}
								</Text>
							</Stack>
							<Stack
								padding="18px"
								flex="1"
								justify="center"
								align="flex-start"
								spacing="18px"
								borderColor={MaciBlack}
								borderStartWidth="1px"
								borderEndWidth="1px"
								borderTopWidth="1px"
								borderBottomWidth="1px"
							>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.33"
								fontWeight="regular"
								fontSize="12px"
								letterSpacing="0.02em"
								color="Muted Colors.500"
								alignSelf="stretch"
								>
								Disc space required
								</Text>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{circuit.diskSpaceRequired + ' mb'} 
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
								borderStartWidth="1px"
								borderEndWidth="1px"
								borderTopWidth="1px"
								borderBottomWidth="1px"
							>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.33"
								fontWeight="regular"
								fontSize="12px"
								letterSpacing="0.02em"
								color="Muted Colors.500"
								alignSelf="stretch"
								>
								Waiting to contribute
								</Text>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{circuit.waitingQueue}
								</Text>
							</Stack>
							<Stack
								padding="18px"
								height="106px"
								flex="1"
								justify="center"
								align="flex-start"
								spacing="18px"
								borderColor={MaciBlack}
								borderStartWidth="1px"
								borderEndWidth="1px"
								borderTopWidth="1px"
								borderBottomWidth="1px"
							>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.33"
								fontWeight="regular"
								fontSize="12px"
								letterSpacing="0.02em"
								color="Muted Colors.500"
								alignSelf="stretch"
								>
								Avg contribution & verification time
								</Text>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{circuit.avgContributionTime}
								</Text>
							</Stack>
							<Stack
								padding="18px"
								flex="1"
								justify="center"
								align="flex-start"
								spacing="18px"
								borderColor={MaciBlack}
								borderStartWidth="1px"
								borderEndWidth="1px"
								borderTopWidth="1px"
								borderBottomWidth="1px"
							>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.33"
								fontWeight="regular"
								fontSize="12px"
								letterSpacing="0.02em"
								color="Muted Colors.500"
								alignSelf="stretch"
								>
								Failed contributions
								</Text>
								<Text
								fontFamily="Aeonik"
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{circuit.failedContributions}
								</Text>
							</Stack>
							</Stack>
						</Stack>
						)
					})
				}
			
				</Stack>
				<Stack justify="flex-start" align="flex-start" spacing="0px">
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
				<Stack
					borderRadius="35px"
					justify="flex-start"
					align="flex-start"
					spacing="0px"
					overflow="hidden"
					borderColor={MaciBlack}
					borderStartWidth="1px"
					borderEndWidth="1px"
					borderTopWidth="1px"
					borderBottomWidth="1px"
					height="137px"
				>
					<Stack
					direction="row"
					justify="flex-start"
					align="flex-start"
					spacing="0px"
					width="137px"
					height="137px"
					>
					<Box width="86px" height="98px" />
					</Stack>
				</Stack>
				</Stack>
			</Stack>
			</Stack>
		</Stack>
	)

}
