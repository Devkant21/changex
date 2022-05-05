import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Container, Flex, VStack,  FormControl, Img, Text } from '@chakra-ui/react'
import Delayed from './Delayed';


const Devkant = () => {
    return (
      <Delayed>
        <Container maxW='container.xl' padding={20}>
            <Flex h="50vh">
                <VStack
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                textColor="white"
                fontSize="sm"
                w="lg"
                h="lg"
                p={10}
                align='flex-start'>
                <FormControl>
                    <Typewriter 
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        delaySpeed={30000}
                        
                        words={[' Hi Laura. Thank you for your email. I am intrigued by the work ChangeX is doing to bring together the various strata of communities. I believe "it\"ll be an exciting endeavour to work and bring change in the lives of people.']}  
                    />
                </FormControl> 
            </VStack>
            <VStack 
                w="md" 
                h="md" 
                p={5}
                align="flex-end">
                    <Img
                    borderRadius='full'
                    boxSize='100px'
                    src='https://photos.angel.co/users/6976103-medium_jpg?1554460749'
                    alt='Devkant Swargiary'
                    />
                    <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='md'
                    fontWeight='bold'
                    >
                    Devkant Swargiary
                    </Text>
                </VStack>
            </Flex>
        </Container>
      </Delayed>
    );
  };

  export default Devkant;