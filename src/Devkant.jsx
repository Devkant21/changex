import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Container, Flex, VStack,  FormControl, Img, Text } from '@chakra-ui/react'
import Delayed from './Delayed';


const Devkant = () => {
    return (
      <Delayed>
        <Container maxW="container.lg" padding={4}>
            <Flex h="70vh" w="60vw">
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
                        typeSpeed={70}
                        delaySpeed={30000}
                        
                        words={[' Hi Laura. Often, we read outer dialogue, which occurs between two characters as spoken language. Examples of Dialogue: "Lisa," said Kyle, "I need help moving this box of toys for the garage sale. Will you help me?" Hi Laura. Often, we read outer dialogue, which occurs between two characters as spoken language. Examples of Dialogue: "Lisa," said Kyle, "I need help moving this box of toys for the garage sale. Will you help me?" Hi Laura. Often, we read outer dialogue, which occurs between two characters as spoken language. Examples of Dialogue: "Lisa," said Kyle, "I need help moving this box of toys for the garage sale. Will you help me?"']}  
                    />
                </FormControl> 
            </VStack>
            <VStack 
                w="md" 
                h="md" 
                p={10}
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