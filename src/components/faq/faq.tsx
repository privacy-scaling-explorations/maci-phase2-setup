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
import { SearchBar } from '../searchBar/searchBar'
import { MaciBlack, MaciLightYellow, MaciWhite, MaciYellow } from '../../utils/colors'

export const FAQ = () => (
  <Stack
    paddingTop="32px"
    direction="row"
    justify="flex-start"
    align="flex-end"
    spacing="0px"
    height="904px"
    paddingX="100px"
	background={MaciLightYellow}
  >
    <Stack
      direction="row"
      justify="flex-start"
      align="center"
      spacing="0px"
      height="904px"
    >
      <Stack justify="flex-start" align="flex-end" spacing="20px">
        <Stack justify="flex-start" align="center" spacing="0px">
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="32px"
            width="528px"
            height="226px"
            maxWidth="100%"
          >
            <Stack 
			justify="flex-start" 
			align="flex-start" 
			textAlign="left"
			spacing="20px">
              <Text
                
                lineHeight="0.99"
                fontWeight="medium"
                fontSize="48px"
                letterSpacing="0.01em"
                color="gray.900"
                width="422px"
                maxWidth="100%"
              >
                Have a question?
              </Text>
              <Text
                
                lineHeight="1.56"
                fontWeight="regular"
                fontSize="18px"
                letterSpacing="0.02em"
                color={MaciBlack}
                width="443px"
                maxWidth="100%"

              >
                Start here. If you can’t find what you are looking for, visit
                our documentation.
              </Text>
            </Stack>

              <Stack 
				width="443px"
				maxWidth="100%"
				direction="row"
				justify="flex-start"
				align="flex-start"
				
				justifyContent="left" />
				<SearchBar placeholder="Search by keyword"  />
			</Stack>
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="443px"
        >
          <Stack width="59.4px" height="33px" />
          <Stack justify="center" align="center" spacing="0px" />
        </Stack>
      </Stack>
    </Stack>
    <Stack justify="flex-start" align="flex-end" spacing="0px">
      <Stack justify="flex-start" align="center" spacing="0px">
        <Stack
          padding="20px"
          borderRadius="35px"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          borderColor={MaciBlack}
          borderStartWidth="1px"
          borderEndWidth="1px"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          width="669px"
          maxWidth="100%"
          background={MaciYellow}
        >
          <Stack
            paddingX="20px"
            paddingTop="11px"
            paddingBottom="10px"
            borderRadius="25px"
            justify="flex-start"
            align="flex-start"
            spacing="4px"
            borderColor={MaciBlack}
            borderStartWidth="1px"
            borderEndWidth="1px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            alignSelf="stretch"
            background={MaciWhite}
          >
            {
                questionAndAnswers.map((qa, index) => {
                    return (
                        <Stack key={index}>
                            <Accordion width="100%" allowToggle>
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton width="100%"  _expanded={{ bg: MaciWhite, color: 'black' }}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            {qa.question}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        {qa.answer}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Stack>
                    )
                })
            }
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)