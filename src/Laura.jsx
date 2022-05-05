import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Container, Flex, VStack, Heading, FormControl, HStack, Text } from '@chakra-ui/react'
import theme from './theme'
import { Img } from '@chakra-ui/react'

const Laura = () => {
  return (
    <Container maxW="container.lg" padding={4}>
        <Flex h="100vh" p={20}>
            <VStack 
                w="xl" 
                h="xl" 
                p={5} 
                spacing={5}
                align="flex-start">
                  <Img
                    borderRadius='full'
                    boxSize='150px'
                    src='https://angel.co/cdn-cgi/image/width=400,height=400,format=auto,fit=cover/https://photos.angel.co/users/14588839-original?1650981037'
                    alt='Laura Murphy-Clarkin'
                  />
                  <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='xl'
                    fontWeight='bold'
                  >
                    Laura Murphy-Clarkin
                  </Text>          
            </VStack>
            <VStack
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                textColor="white"
                fontSize="xl"
                w="xl"
                h="lg"
                p={10}
                spacing={5}
                align='flex-center'>
                <FormControl>
                    <Typewriter 
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        delaySpeed={100}
                        words={[" Hi Devkant Thanks so much for your interest in our role at ChangeX. What about the role, organisation and sector excites you? I would also be very interested to hear what social or environmental issues you\'re passionate about and if you\'ve had any experience working on same, even in a voluntary or personal capacity.Thanks! Laura"]}  
                    />
                </FormControl>   
            </VStack>
          </Flex>
    </Container>
  )
}

export default Laura