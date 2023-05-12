import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai';
import {FaYoutube,FaInstagram,FaGithub} from 'react-icons/fa';
const Footer = () => {
  return (
    <Box bg={"blackAlpha.900"} color={"white"} p="16" minH={'40'}>
        <Stack direction={["column","row"]}>
            <VStack alignItems={'stretch'} w={'full'}>
                <Heading textTransform={'uppercase'} size={'md'}
                    textAlign={["center","left"]}
                >Subscribe to get updates</Heading>
                <HStack
                    borderBottom={' 2px solid white'}
                    p={'2px'}
                    py={'3px'}
                >
                    <Input 
                        placeholder='Enter your email' 
                        borderRadius={'none'}  
                        outline={'none'}
                        border={'none'}
                        focusBorderColor='none'/>
                    <Button
                        p={'0'}
                        variant={'ghost'}
                        colorScheme={'purple'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>
            <VStack 
                w={'full'}
                borderLeft={['none','1px']}
                borderRight={['none','1px']}
            >
                <Heading textTransform={"uppercase"} textAlign={'center'}>
                    Video Hub
                </Heading>
                <Text>@ all right reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading
                    textTransform={'uppercase'}
                    size={'md'}
                    textAlign={'center'}
                >
                    Social Media
                </Heading>
                <Stack direction={["Column","row"]}>
                    <Button mx={'2px'} colorScheme={'purple'} variant={'ghost'}>
                        <FaYoutube/>
                        &nbsp;
                        <a target='blank' href='https://www.youtube.com/@deveshbhardwaj3625'>Youtube</a>
                    </Button>
                    <Button mx={'2'} colorScheme={'purple'} variant={'ghost'}>
                        <FaGithub />
                        &nbsp;
                        <a target='blank' href='https://github.com/Bhardwaj-Devesh'>GitHub</a>
                    </Button>
                    <Button mx={'2px'} colorScheme={'purple'} variant={'ghost'}>
                        <FaInstagram />
                        &nbsp;
                        <a target='blank' href='https://www.instagram.com/devesh_bhardwajj/?next=%2F'>Instagram</a>
                    </Button>
                </Stack>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer
