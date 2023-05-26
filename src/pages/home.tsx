import { Stack, Text, Box, Button, Circle } from '@chakra-ui/react'
import { MaciBlack, MaciLightYellow, MaciWhite, MaciYellow } from '../utils/colors'
import { getAllCircuitsInfo, getAverageData, getCeremonyState, getTotalNumberOfContributions } from '../utils/fetchers'
import { useEffect, useState } from 'react'
import { IAvgStats, ICircuit } from '../utils/interfaces'
import { FAQ } from '../components/faq/faq'
import WireRope from "../assets/ropeYellow.png"
import WireRopeBackground from "../assets/wire-rope1.png"
import { Link } from "react-router-dom"
import Layer17 from "../assets/Layer_1-7.png"
import SpriralGlassYellow from "../assets/Spiral_glass_yellow.png"
import SpiralWire from "../assets/Isolation_Mode.png"
import { NavBar } from '../components/navbar/navbar'
import { VerificationTranscript } from '../components/verificationTrascripts/verificationTranscripts'

export const Home = () => {

	const [averages, setAverages] = useState<IAvgStats>({
		waitingQueue: 0, 
		failedContributions: 0,
		completedContributions: 0,
		avgContributionTime: 0,
		diskSpaceRequired: 0
	})
	// state variables
	const [circuits, setCircuits] = useState<ICircuit[]>([])
	const [totalContributions, setTotalContributions] = useState<number>(0)
	const [isCeremonyOngoing, setIsCeremonyOngoing] = useState<boolean>(false)

	useEffect(() => {
		const _getCircuits = async () => {
			const circuits = await getAllCircuitsInfo()
			setCircuits(circuits)
		}

		const _checkCeremonyState = async () => {
			const state = await getCeremonyState()
			setIsCeremonyOngoing(state)
		}

		const _getAvgData = async () => {
			const data = await getAverageData()
			setAverages(data)
		}

		const _getTotalContributions = async () => {
			const total = await getTotalNumberOfContributions()
			setTotalContributions(total)
		}

		_getCircuits().catch()
		_getAvgData().catch()
		_checkCeremonyState().catch()
		_getTotalContributions().catch()
	}, [])


	return (
		<Stack width={["100%", "100%", "100%", "100%"]}>
			<NavBar background={"transparent"} />
			<Stack
				paddingBottom="5%"
				justify="center"
				align="center"
				height="100%"
				paddingTop="5%"
				backgroundImage={WireRopeBackground}
				backgroundRepeat="no-repeat"
				width="100%"
			>
				<Stack
				justify="flex-start"
				align="flex-start"
				flex="1"
				alignSelf="stretch"
				>
				<Stack 
				direction="row" 
				justify="flex-start" 
				align="center" 
				spacing="-1px"
				width="100%"
				>
					<Stack
					justify="flex-start"
					align="flex-start"
					spacing="-1px"
					width="100%"
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
							padding="2%"
							borderRadius="100px"
							direction="row"
							justify="center"
							align="center"
							spacing="10px"
							borderColor="#000000"
							borderWidth="1px"
							width="100%"
							height="100%"
							maxWidth="100%"
							background={MaciWhite}
							>
							<Text
								
								lineHeight="1.56"
								fontWeight="regular"
								fontSize="18px"
								letterSpacing="0.02em"
								color={MaciBlack}
								flex="1"
								alignSelf="stretch"
							>
								MACI is the privacy king.
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
							<Link 
							to={'get-started'}>
								<Button
								size="L"
								color="Primary"
								fill="Solid + outline"
								background={MaciYellow}
								borderRadius="100px"
								borderColor={MaciBlack}
								borderWidth={"1px"}
								width="190px"
								height="48px"
								>
								<Text
									
									lineHeight="1.25"
									fontWeight="bold"
									fontSize="16px"
									letterSpacing="0.03em"
									color={MaciBlack}
								>
									GET STARTED
								</Text>
								</Button>
							</Link>

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
							backgroundImage={WireRope}
							backgroundSize="100%"
							backgroundRepeat={"no-repeat"}
							backgroundPosition={"right bottom"}
							>
							</Stack>
						</Stack>
						<Stack
							borderRadius="35px"
							padding="10px"
							justify="flex-start"
							align="flex-start"
							overflow="hidden"
							width="137px"
							height="137px"
							marginTop="5%!important"
							backgroundImage={SpiralWire}
							backgroundSize="50%"
							backgroundPosition={"center center"}

							backgroundRepeat={"no-repeat"}
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
						textAlign="left"
						>
						<Text
							
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
						<Button
							borderRadius="100px"
							>
							<Circle size="8px" background={isCeremonyOngoing ? 'green' : "#EF4444"} marginRight="5%" />
							<Text
							lineHeight="1.33"
							fontWeight="medium"
							fontSize="12px"
							letterSpacing="0.02em"
							color="Black"
							textAlign="center"
							>
							{isCeremonyOngoing ? 'Live' : 'Finished'}
							</Text>
							</Button>
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
							lineHeight="0.79"
							fontWeight="medium"
							fontSize="60px"
							letterSpacing="0.01em"
							color={MaciBlack}
						>
							{totalContributions}
						</Text>
						<Text
							
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
					<Stack
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
								borderWidth="1px"
								borderRadius="20px"
								textAlign="left"
							>
								<Text
								
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
								
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								None
								</Text>
							</Stack>
							<Stack
								padding="18px"
								flex="1"
								justify="center"
								align="flex-start"
								spacing="18px"
								borderColor={MaciBlack}
								borderWidth="1px"
								borderRadius="20px"
								textAlign="left"
							>
								<Text
								
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
								
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{averages.completedContributions}
								</Text>
							</Stack>
							<Stack
								padding="18px"
								flex="1"
								justify="center"
								align="flex-start"
								spacing="18px"
								borderColor={MaciBlack}
								borderWidth="1px"
								borderRadius="20px"
								textAlign="left"
							>
								<Text
								
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
								
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{`${averages.diskSpaceRequired} ${averages.diskSpaceUnit}`} 
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
								borderWidth="1px"
								borderRadius="20px"
								textAlign="left"
							>
								<Text
								
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
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{averages.waitingQueue}
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
								borderWidth="1px"
								borderRadius="20px"
								textAlign="left"
							>
								<Text
								
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
								
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{`${averages.avgContributionTime} min`}
								</Text>
							</Stack>
							<Stack
								padding="18px"
								flex="1"
								justify="center"
								align="flex-start"
								spacing="18px"
								borderColor={MaciBlack}
								borderWidth="1px"
								borderRadius="20px"
								textAlign="left"
							>
								<Text
								
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
								
								lineHeight="1.29"
								fontWeight="medium"
								fontSize="28px"
								letterSpacing="0.01em"
								color={MaciBlack}
								alignSelf="stretch"
								>
								{averages.failedContributions}
								</Text>
							</Stack>
							</Stack>
					</Stack>
					</Stack>
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
						backgroundSize="100%"
						backgroundImage={SpriralGlassYellow}
						backgroundRepeat="no-repeat"
						>
						</Stack>
					</Stack>
					</Stack>
				</Stack>
				</Stack>
			</Stack>
			<VerificationTranscript circuits={circuits} />
			<FAQ />
		</Stack>
	)
}
