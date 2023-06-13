import { useState } from 'react';
import '../containers/App.css';
import { Box, Button, Flex, Input, Text, Image } from '@chakra-ui/react';
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";
import nft1 from '../assets/nfts/Strel04ka_several_Ice_pyramids_snow_desert._Starry_night_Northe_395fafed-8c25-4218-9d36-f1e0ab9ef654.png';
import nft2 from '../assets/nfts/Silent_forsaken_handsome_elf_prince_exhile_mark_on_forehead_kni_f64080ec-0b61-4172-98c3-ae982a3e399c.png';
import nft3 from '../assets/nfts/Strel04ka_3_wise_monkeys_in_cyberpunk_style_09e0db4a-f029-4d60-ab80-2663e89517a8.png';
import nft4 from '../assets/nfts/Strel04ka_lonely_small_boat_at_the_storm_sea_c6e7c345-653d-4154-8c12-b35665803657.png';
import nft5 from '../assets/nfts/Fares_TEMMACHE_cover_of_a_drill_rap_song_voodoo_cursed_dark_dar_9ef1f6ed-0c04-428e-9b64-0cb15e0aff23.png';
import nft6 from '../assets/nfts/user5588_Men_working_in_construction_of_Ancient_egyptian_grand__b92635fa-04b8-4592-9625-d5aef119d87a.png';
import nft7 from '../assets/nfts/Strel04ka_rainy_night_city_with_neon_and_girl_and_the_center_of_2aa86830-0eb1-4a75-bbff-7f9de9a11e2a.png';
import nft8 from '../assets/nfts/4am_illustration_showing_1_world_monument_a_cup_of_tea_some_lea_d7aab7ff-1f43-4eff-8fcf-8516ef2f263e.png';

function LaunchesPage() {
    const [accounts, setAccounts] = useState([]);
    return (
        <MainLayout>
            <Flex justify="flex-start" flexWrap="wrap" align="left" padding="0px 13% 18px 13%" overflowY="auto" maxHeight={['unset', 'calc(100vh - 11.3vh)']}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft1} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">ICE _ LANDS</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft2} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">LURI</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft3} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">MONKEE</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft4} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">SHRORM</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>


                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft5} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">BASHDDD</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                     <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft6} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">EGIPT</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                       <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft7} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">TOKIO</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                       <Box margin="18px 0px 0px 18px" width="327px" height="450px" backgroundColor="white" borderRadius="20px" boxShadow="8px 8px 20px 2px #0F0F0F" color="white" cursor="Pointer" fontFamily="inherit">
                            <Image src={nft8} width="327px" height="327px" borderRadius="20px 20px 0px 0px" margin="0px 0px 4px 0px"></Image>
                            <Text className="Tile_header" margin="0px 0px 4px 0px">Autumn</Text>
                            <Text className="Tile_timer" margin="0px 0px 8px 0px">12 d 06h 30m</Text>
                            <Flex justify="space-around" padding="0px 25px">
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={11}>ITEMS</Text>
                                        <Text className="Tile_tile_number" marginRight={11}>2000</Text>
                                    </Flex>
                                </Box>
                                <Box
                                    width="120px"
                                    height="35px"
                                    backgroundColor="white"
                                    borderRadius="5px"
                                    boxShadow="8px 8px 20px 2px #0F0F0F"
                                    color="white"
                                    cursor="Pointer"
                                    fontFamily="inherit"
                                >
                                    <Flex justify="space-around" align="center" height="100%">
                                        <Text className="Tile_tile_word" marginLeft={4}>PRICE</Text>
                                        <Text className="Tile_tile_number" marginRight={3}>0.01 ETH</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
            </Flex>
        </MainLayout>
    );
}

export default LaunchesPage;
