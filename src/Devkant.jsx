import React from 'react';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Container, Flex, VStack, Heading, FormControl, HStack } from '@chakra-ui/react'

const Devkant = () => {
    const [showComponent, setComponent] = useState(false);
    useEffect(() => {
        setInterval(() => {
        setComponent(!showComponent);
        }, 3000)
  }, [])

  return (
    <>
        {showComponent && <Devkant /> }
        <Container>
        <HStack 
        w="full" 
        h="full" 
        p={10} 
        spacing={10}
        align="flex-start">
            <Heading>
            Devkant Swargiary
            </Heading>
        </HStack>
        <VStack
            bg="gray.100"
            w="md"
            h="sm"
            p={10}
            spacing={10}
            align='flex-start'>
            <FormControl>
                <Typewriter 
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    delaySpeed={200}
                    
                    words={[' Hi Devkant Thanks so much for your interest in our role at ChangeX. What about the role, organisation and sector excites you? I would also be very interested to hear what social or environmental issues you&aposre passionate about and if you&aposve had any experience working on same, even in a voluntary or personal capacity.Thanks! Laura']}  
                />
            </FormControl>   
        </VStack>  
        </Container>
    </>
      
    )
}

export default Devkant
