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
import { questionAndAnswers } from '../utils/qa'

export const FAQ = () => (
  <Stack
    paddingTop="32px"
    direction="row"
    justify="flex-start"
    align="flex-end"
    spacing="0px"
    height="904px"
    paddingX="100px"
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
            <Stack justify="flex-start" align="flex-start" spacing="20px">
              <Text
                fontFamily="Aeonik"
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
                fontFamily="Aeonik"
                lineHeight="1.56"
                fontWeight="regular"
                fontSize="18px"
                letterSpacing="0.02em"
                color="Primary.MACI Black"
                width="443px"
                maxWidth="100%"
              >
                Start here. If you can’t find what you are looking for, visit
                our documentation.
              </Text>
            </Stack>
            <Stack
              paddingX="20px"
              paddingY="12px"
              width="443px"
              maxWidth="100%"
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing="10px"
              borderColor="#000000"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            >
              <Stack width="22px" height="22px" />
              <Text
                fontFamily="Aeonik"
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                letterSpacing="0.02em"
                color="Gray.Gray - 400"
                flex="1"
              >
                Search by keyword
              </Text>
            </Stack>
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
      <Stack width="196px" height="214px" />
      <Stack justify="flex-start" align="center" spacing="0px">
        <Stack
          padding="20px"
          borderRadius="35px"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          borderColor="Primary.MACI Black"
          borderStartWidth="1px"
          borderEndWidth="1px"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          width="669px"
          maxWidth="100%"
          background="Primary.MACI Yellow"
        >
          <Stack
            paddingX="20px"
            paddingTop="11px"
            paddingBottom="10px"
            borderRadius="25px"
            justify="flex-start"
            align="flex-start"
            spacing="4px"
            borderColor="Primary.MACI Black"
            borderStartWidth="1px"
            borderEndWidth="1px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            alignSelf="stretch"
            background="Primary.MACI White"
          >
            {
                questionAndAnswers.map((qa, index) => {
                    return (
                        <Stack key={index}>
                            <Accordion>
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
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
