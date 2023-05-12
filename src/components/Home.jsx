import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Box,Container,Heading,Image, Stack,Text } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';
const headingOptions={
  pos:'absolute',
  left: '50%',
  top:'50%',
  transform:'translate(-50%, -50%)',
  textTransform:'uppercase',
  p:'4',
  size:'2xl',
};
const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
          <Heading w={'fit-content'} borderBottom={'2px solid white'} textTransform={'uppercase'} m={'auto'} py={'2'} >Services</Heading>
          <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column','row']}
          >
            <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore veniam odio enim laborum omnis incidunt tempore architecto laudantium labore ut minima quae earum magni dolor fuga, explicabo, hic expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus possimus fuga ut harum! Aliquid quidem inventore ad perferendis repudiandae provident ipsam dignissimos, fuga sequi necessitatibus, voluptates sunt odit atque illum, accusantium magni a. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolore provident fugit iusto! Alias maxime eveniet provident ex quae numquam, quis tenetur repellat. Repudiandae numquam debitis, voluptatem fugiat laboriosam sapiente minima natus quaerat eveniet vel magnam reprehenderit saepe similique facere provident earum totam ducimus inventore.
            </Text>
          </Stack>
        </Container>
    </Box>
  )
}
const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false} >
        <Box w={"full"} h={'100vh'}> 
            <Image src={img1}/>
            <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}> 
            <Image src={img2}/>
            <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>Future is Gaming</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}> 
            <Image src={img3}/>
            <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>Gaming is art</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}> 
            <Image src={img4}/>
            <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingOptions}>Nights the secret of everything</Heading>
        </Box>
    </Carousel>
)

export default Home
