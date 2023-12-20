import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/one.jpg';
import img2 from '../assets/two.jpg';
import img3 from '../assets/three.jpg';
import img4 from '../assets/four.jpg';
import img5 from '../assets/five.png';

const headingoptions =
{
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl",
}

const Home = () => {
    return <Box>
        <MyCarousel />
        <Container minH={'100vh'} maxW={'container.xl'} p="16">
            <Heading textTransform={"uppercase"} py={"2"}
                w={"fit-content"} borderBottom={"2px solid"} m={'auto'}>Services</Heading>

            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>

                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4', '16']} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus iure ducimus quos earum, rem itaque, non quas veniam hic veritatis voluptates accusantium vel laborum! Similique vitae, sit ipsam eligendi optio quasi dolorem architecto fugit amet totam voluptate facilis incidunt asperiores temporibus explicabo exercitationem officia molestias aut velit necessitatibus laudantium tempora officiis maiores at! Molestiae, doloribus quod accusamus nam odio ducimus consectetur sequi ut eum consequatur libero nesciunt quo harum necessitatibus sint laboriosam delectus et excepturi consequuntur! Officia deleniti dolores iusto reiciendis, perspiciatis eum? Aliquid labore praesentium vel soluta voluptate in adipisci necessitatibus facilis modi, tempore dolorem voluptatum ea, expedita doloribus voluptas non, neque tenetur dolor illo quod. Adipisci omnis beatae voluptatibus, at doloremque ipsa a, similique quisquam est quam id consequatur! Ipsa, repellat vero. Sunt ipsa veniam fuga expedita, doloribus provident nisi. In quae possimus reprehenderit ex praesentium adipisci optio repellat nostrum eos, quod autem assumenda architecto, beatae maiores ducimus omnis at dolorem incidunt. Dolore iste, at aperiam nihil eum ratione tempora doloribus quas cumque ab, veniam dolor sint assumenda facere! Architecto minima asperiores magnam similique impedit in itaque, nihil cupiditate veniam dicta vel iure nemo voluptatem.
                </Text>

            </Stack>


        </Container>
    </Box>;
};

const MyCarousel = () =>
(
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false} showStatus={false}>
        <Box w={"full"} h={'100vh'}>
            <Img src={img1}></Img>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingoptions}>Watch the future</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Img src={img2}></Img>
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingoptions}>Future is Gaming</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Img src={img3}></Img>
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingoptions}>Gamming on Console</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Img src={img4}></Img>
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingoptions}>Night Life is Cool</Heading>
        </Box>

    </Carousel>
)

export default Home;