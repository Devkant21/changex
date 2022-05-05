import React from 'react'
import { Container, Flex, Img } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
        <Container maxW='container.xl'>
            <Flex  
            bgGradient='linear(to-l, #7928CA, #FF0080)' 
            
            justifyItems="center"
            textColor="whiteAlpha.900"
            fontWeight={'semibold'}>
                <p>DS | </p>
            </Flex>
        </Container>
        
    </div>
  )
}

export default Footer