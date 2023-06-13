import { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import '../containers/App.css';
import MainLayout from '../layout/MainLayout'
import { Box, Button, Flex, Input, Text, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import lion from '../assets/icons/lion_110px.png';
import copy from '../assets/icons/copy_26px.png';
import approval from '../assets/icons/approval_26px.png';
import link from '../assets/icons/link_22px.png';
import nft1 from '../assets/nfts/Strel04ka_several_Ice_pyramids_snow_desert._Starry_night_Northe_395fafed-8c25-4218-9d36-f1e0ab9ef654.png';
import nft2 from '../assets/nfts/Silent_forsaken_handsome_elf_prince_exhile_mark_on_forehead_kni_f64080ec-0b61-4172-98c3-ae982a3e399c.png';
import nft3 from '../assets/nfts/Strel04ka_3_wise_monkeys_in_cyberpunk_style_09e0db4a-f029-4d60-ab80-2663e89517a8.png';
import nft4 from '../assets/nfts/Strel04ka_lonely_small_boat_at_the_storm_sea_c6e7c345-653d-4154-8c12-b35665803657.png';
import nft5 from '../assets/nfts/Fares_TEMMACHE_cover_of_a_drill_rap_song_voodoo_cursed_dark_dar_9ef1f6ed-0c04-428e-9b64-0cb15e0aff23.png';
import nft6 from '../assets/nfts/user5588_Men_working_in_construction_of_Ancient_egyptian_grand__b92635fa-04b8-4592-9625-d5aef119d87a.png';
import nft7 from '../assets/nfts/Strel04ka_rainy_night_city_with_neon_and_girl_and_the_center_of_2aa86830-0eb1-4a75-bbff-7f9de9a11e2a.png';
import nft8 from '../assets/nfts/4am_illustration_showing_1_world_monument_a_cup_of_tea_some_lea_d7aab7ff-1f43-4eff-8fcf-8516ef2f263e.png';

function OverviewPage() {
  const [Data, setData] = useState([]);
  //useEffect(() => {setData(6)});

  useEffect(() => {
    console.log('use effect run');
    fetch("/api/transactions", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data, "dfd");
        setData(data, "dfd");
      })
  }, []);
  console.log(Data);

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();

  return (
    <MainLayout>
      <Flex flexDirection='column' padding="15px 250px" >
        <Box align='left' height="110px" width="328px" margin="0px 0px 0px 0px">
          <Flex justify="space-between" align="center" width="30%" padding="0px 0px 18px 0px">
            <Image align="left " src={lion} width="110px" height="110px" margin="0px 0px 0px 0px"></Image>
            <Text className="" margin="52px 0px 0px 0px">0xA980....E439</Text>
            <Image align="left " src={copy} width="26px" height="26px" margin="52px 0px 0px 5px"></Image>
          </Flex>
        </Box>
        {
          Data.map(i => {
            if (!Data) {
              return null
            } else {
              return (
                <Link src={"https://goerli.etherscan.io/tx/".concat(i.hash)} style={{ textDecoration: 'none' }}>
                  <Box width="1340px" height="72px" margin="15px 0px 0px 0px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                    <Flex justify="space-between" align="center" width="100%" padding="4px 0px 18px 0px">
                      <Text className="Tile_header" margin="0px 15px 4px 20px">Mint</Text>
                      <Image src={nft1} width="65px" height="65px" borderRadius="20px 20px 20px 20px" margin="0px 0px 0px 0px"></Image>
                      <Box margin="0px 280px 0px 0px" align="left">
                        <Flex justify="space-between" align="center" width="100%" padding="0px 0px 0px 0px">
                          <Text className="Tile_timer" margin="5px 0px 4px 0px">Series A</Text>
                          <Image src={approval} width="24px" height="24px" margin="0px 87px 0px 0px"></Image>
                        </Flex>
                        <Text className="Tile_header" margin="0px 0px 4px 0px">ICE _ LANDS</Text>
                      </Box>
                      <Box margin="0px 10px 0px 10px" align="left">
                        <Text className="Tile_timer" margin="5px 0px 4px 0px">$ 18.00</Text>
                        <Text className="Tile_header" margin="0px 0px 4px 0px">0.01 ETH</Text>
                      </Box>
                      <Text className="Tile_timer" margin="0px 0px 0px 0px">{i.from.slice(0, 5).concat('...', i.from.slice(37))}</Text>
                      <Text className="Tile_timer" margin="0px 0px 0px 0px">{i.hash.slice(0, 5).concat('...', i.hash.slice(61))}</Text>
                      <Text className="Tile_timer" margin="0px 0px 0px 0px">1</Text>
                      <Flex justify="space-between" align="center" margin="0px 20px 0px 0px" padding="0px 0px 0px 0px">
                        <Text className="Tile_timer" margin="0px 0px 0px 0px">2 days ago</Text>
                        <Image src={link} width="24px" height="24px" margin="0px 0px 0px 5px"></Image>
                      </Flex>
                    </Flex>
                  </Box>
                </Link>
              )
            }
          })
          //  transactions && transactions?.data.map((transaction) => ( "dsf"

          //  ))
          // () => {return(

          //       <Text>Hash: {Data}</Text>

          //     )}
        }
        {/* <Box width="1340px" height="72px" margin="160px 0px 0px 0px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
          <Flex justify="space-between" align="center" width="100%" padding="4px 0px 18px 0px">
            <Text className="Tile_header" margin="0px 15px 4px 20px">Mint</Text>
            <Image src={nft1} width="65px" height="65px" borderRadius="20px 20px 20px 20px" margin="0px 0px 0px 0px"></Image>
            <Box margin="0px 280px 0px 0px" align="left">
              <Flex justify="space-between" align="center" width="100%" padding="0px 0px 0px 0px">
                <Text className="Tile_timer" margin="5px 0px 4px 0px">Series A</Text>
                <Image src={approval} width="24px" height="24px" margin="0px 87px 0px 0px"></Image>
              </Flex>
              <Text className="Tile_header" margin="0px 0px 4px 0px">ICE _ LANDS</Text>
            </Box>
            <Box margin="0px 10px 0px 10px" align="left">
              <Text className="Tile_timer" margin="5px 0px 4px 0px">$ 18.00</Text>
              <Text className="Tile_header" margin="0px 0px 4px 0px">0.01 ETH</Text>
            </Box>
            <Text className="Tile_timer" margin="0px 0px 0px 0px">0x2223...4096</Text>
            <Text className="Tile_timer" margin="0px 0px 0px 0px">0xA980...E439</Text>
            <Text className="Tile_timer" margin="0px 0px 0px 0px">1</Text>
            <Flex justify="space-between" align="center" margin="0px 20px 0px 0px" padding="0px 0px 0px 0px">
              <Text className="Tile_timer" margin="0px 0px 0px 0px">2 days ago</Text>
              <Image src={link} width="24px" height="24px" margin="0px 0px 0px 5px"></Image>
            </Flex>
          </Flex>
        </Box> */}
      </Flex>
    </MainLayout>
  );

}

export default OverviewPage;
