import { useState } from 'react';
import '../containers/App.css';
import { Box, Button, Flex, Input, Text, Image } from '@chakra-ui/react';
import MainLayout from '../layout/MainLayout';
import discord_ico from '../assets/icons/discord_100px.png';
import twitter_ico from '../assets/icons/twitter_60px.png';
import yuotube_ico from '../assets/icons/youtube_100px.png';
import team_member_1 from '../assets/nfts/Strel04ka_a_turtle_in_a_lava_sea_Cartoon_style_e9f9d347-686f-4a6e-9487-8ae464336608.png';
import team_member_2 from '../assets/nfts/Toto93250_a_merkabah_activation_1f0e12e7-4de7-41a5-8255-0e6de0b7dc17.png';

const team_member_1_name = "Member Name"
const team_member_1_bio = "This is Bob, a member of the team. He is a highly experienced and skilled software engineer with a passion for developing innovative solutions. He has a degree in Computer Science and has worked in the software industry for over 10 years. Bob is a solver and is always looking for ways to make things better. Bob put a part of him self into this solutoin and he won't let this projec fall.";
const team_member_2_name = "Member 2 Name"
const team_member_2_bio = "This is Bob, a member of the team. He is a highly experienced and skilled software engineer with a passion for developing innovative solutions. He has a degree in Computer Science and has worked in the software industry for over 10 years. Bob is a solver and is always looking for ways to make things better. Bob put a part of him self into this solutoin and he won't let this projec fall.";
const About_us = "Abount us, info .... This project is called ABCD: An Advanced Blockchain Data Platform. It is an open source blockchain platform that is designed to provide businesses with the ability to store and manage large amounts of data in a secure, distributed environment. The platform is built on top of the Ethereum blockchain and uses smart contracts to store and manage data. It also provides access to the blockchain network, allowing users to create applications on top of it. The platform is designed to be fast, secure, and scalable, making it ideal for businesses and organizations of any size. The platform is also designed to be decentralized, ensuring that all data is secure and accessible by anyone.";

function AboutPage() {
  const [accounts, setAccounts] = useState([]);
  return (
<MainLayout>
  <Flex justify="flex-start" flexWrap="wrap" align="left" padding="0px 13% 18px 13%" overflowY="auto" maxHeight={['unset', 'calc(100vh - 11.3vh)']}>
  <Flex fontSize="1vw" justify="space-around" align="center" width="30vw" padding="0vw 1.2vw"> <Box align='left' boxSize={['auto', '770px']} >
        <Text margin="0px 0px 18px 0px" width="30vw" className='About_us_title'>Core of the Project</Text>
        <Box
          width="100%"
          height="3vw"
          backgroundColor="white"
          borderRadius="1vw"
          boxShadow="2vw 5vw 20vw rgba(0, 0, 0, 0.25)"
          scolor="white"
          cursor="Pointer"
          fontFamily="inherit"
          borderColor="black"
          borderWidth="5px"
          margin="0px 0px 35px 0px"
        >
          <Flex justify="safe-center" align="center" height="100%" padding="0px 22px">
            <Image
              src={discord_ico}
              cursor="Pointer"
              width="35px"
              height="35px"
              margin="0px 12px 0px 0px"
            //onClick={}
            >
            </Image>
            <Image
              src={twitter_ico}
              cursor="Pointer"
              width="35px"
              height="35px"
              margin="0px 12px 0px 0px"
            >
            </Image>
            <Image
              src={yuotube_ico}
              cursor="Pointer"
              width="35px"
              height="35px"
              margin="0px 12px 0px 0px"
            >
            </Image>
          </Flex>
        </Box>
        <Text className='About_us_info'>{About_us}</Text>
      </Box>
    </Flex>

    <Flex justify={['center', 'center']} align="center" width={['100%', '50%']} padding={['0px', '0px 0px 0px 25px']}>
      <Box width={['auto', '670px']} paddingTop={0}>
        <Flex height="100%" padding={['40px 0px 30px 0px', '40px 15px 30px 15px']}>
          <Button
            fontWeight="800"
            backgroundColor="white"
            color="black"
            borderRadius="40px"
            boxShadow="2vw 2vw 5vw rgba(0, 0, 0, 0.25)"
            cursor="Pointer"
            fontFamily="inherit"
            fontSize={['14px', '18px']}
            border="none"
            width={['65px', '80px']}
            height="30px"
            margin="0px 12px 0px 0px"
          >
            Future
          </Button>
          <Button
            fontWeight="700"
            backgroundColor="#D9D9D9"
            color="black"
            borderRadius="40px"
            boxShadow="2vw 2vw 5vw rgba(0, 0, 0, 0.25)"
            cursor="Pointer"
            fontFamily="inherit"
            fontSize={['14px', '18px']}
            border="none"
            width={['55px', '65px']}
            height={['28px', '33px']}
          >
            Team
          </Button>
        </Flex>
        <Flex padding="0px 0px 35px 0px">
          <Box height={['295px', '335px']} width={['auto', '670px']}>
            <Flex justify="space-between" align="center" width="100%">
              <Box align='left' height={['295px', '335px']} width={['48%', '48%']}>
                <Text className='Team_member_name' margin="0px 0px 20px 0px">{team_member_1_name}</Text>
                <Text className='Team_member_bio'  margin="0px 0px 0px 0px">{team_member_1_bio}</Text>
              </Box>
              <Box align='left' width={['48%', '48%']}>
                <Image src={team_member_1} width={['295px', '335px']}></Image>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex>
          <Box height={['295px', '335px']} width={['auto', '670px']}>
            <Flex justify="space-between" align="center" width="100%">
              <Box align='left' width={['48%', '48%']}>
                <Image src={team_member_2} width={['295px', '335px']}></Image>
              </Box>
              <Box align='right' height={['295px', '335px']} width={['48%', '48%']}>
                <Text className='Team_member_name' margin="0px 0px 20px 0px">{team_member_2_name}</Text>
                <Text className='Team_member_bio'  margin="0px 0px 0px 0px">{team_member_2_bio}</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Flex>
</MainLayout>
  );
}

export default AboutPage;
