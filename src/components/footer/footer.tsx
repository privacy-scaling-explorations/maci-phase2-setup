import React from 'react'
import { Stack, Text, Box } from '@chakra-ui/react'
import { MaciBlack, MaciWhite, MaciYellow } from '../../utils/colors'

export const Footer = (): React.JSX.Element => (
  <Stack
    paddingX="100px"
    paddingTop="40px"
    paddingBottom="26px"
    justify="flex-start"
    align="flex-start"
    spacing="10px"
    overflow="hidden"
    background={MaciBlack}
  >
    <Stack justify="flex-start" align="flex-start" spacing="35px">
      <Stack justify="flex-start" align="flex-start" spacing="43px">
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="173px"
          width="1239px"
          maxWidth="100%"
        >
          <Stack justify="flex-start" align="flex-start" textAlign="left" spacing="20px">
            <Text
              
              lineHeight="1.27"
              fontWeight="black"
              fontSize="22px"
              letterSpacing="0.03em"
              color={MaciYellow}
            >
              <span>MACI V1</span>
              <Box as="span" lineHeight="1.25" fontSize="16px">
                {' '}
              </Box>
              <Box
                as="span"
                lineHeight="0.91"
                fontWeight="regular"
                letterSpacing="0.2em"
              >
                CEREMONY
              </Box>
            </Text>
            <Text
              
              lineHeight="1.27"
              fontWeight="medium"
              fontSize="22px"
              letterSpacing="0.03em"
              color={MaciWhite}
              width="315px"
              maxWidth="100%"
            >
              Arcu scelerisque tristique ultrices feugiat interdum nibh
              porttitor risus. Ullamcorper.
            </Text>
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="110px"
          >
            <Box>
              <Text
                
                lineHeight="1.25"
                fontWeight="bold"
                fontSize="16px"
                letterSpacing="0.03em"
                color={MaciYellow}
              >
                Sponsored by
              </Text>
              <Stack justify="flex-start" align="flex-start" spacing="18px">
                <Box />
                <Box width="102px" height="26px" />
              </Stack>
            </Box>
            <Stack
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing="110px"
              textAlign="left"
            >
              <Box>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  Your privacy
                </Text>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  Legal
                </Text>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  Audit results
                </Text>
              </Box>
              <Box>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  MACI Repo
                </Text>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  P0T10N Repo
                </Text>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  QFI Repo
                </Text>
              </Box>
              <Box>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  FAQ
                </Text>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  Documentation
                </Text>
                <Text
                  
                  lineHeight="1.25"
                  fontWeight="regular"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color={MaciWhite}
                >
                  Get started
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <span className="unsupported" />
      </Stack>
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        spacing="100px"
        width="1239px"
        maxWidth="100%"
      >
        <Text
          
          lineHeight="1.25"
          fontWeight="medium"
          fontSize="16px"
          letterSpacing="0.03em"
          color="#787878"
        >
          Made by Privacy & Scaling Explorations with support from the Ethereum
          Foundation
        </Text>
        <Stack
          direction="row"
          justify="flex-start"
          align="center"
          spacing="10px"
        >
          <Stack width="30px" height="33px" />
          <Stack
            paddingX="2px"
            borderRadius="100px"
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            borderColor={MaciYellow}
            borderStartWidth="0.5px"
            borderEndWidth="0.5px"
            borderTopWidth="0.5px"
            borderBottomWidth="0.5px"
          />
          <Stack width="30px" height="33px" />
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="26px"
        >
          <Stack
            padding="10px"
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
          >
            <Text
              
              lineHeight="1.25"
              fontWeight="medium"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#787878"
            >
              Twitter
            </Text>
          </Stack>
          <Stack
            padding="10px"
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
          >
            <Text
              
              lineHeight="1.25"
              fontWeight="medium"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#787878"
            >
              Discord
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)
