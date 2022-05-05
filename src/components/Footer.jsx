import React from 'react'
import { Container, Flex, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
        <Container maxW='container.xl'>
          <Flex py={1} px={4} maxW='100%'
            bgGradient='linear(to-l, #7928CA, #FF0080)' 
            justifyItems="center"
            textColor="whiteAlpha.900"
            fontWeight={'semibold'}>
              <Text 
              fontSize="md">
                GSE
                <Link href="https://github.com/Devkant21">
                | Devkant Swargiary
                </Link>
              </Text> 
            </Flex>
        </Container>
        
    </div>
  )
}

export default Footer