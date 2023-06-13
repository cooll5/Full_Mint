import React from 'react';
import { Box, Button, Flex, Image, /*Link,*/ Spacer, Text} from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/launchpad_54px.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import { Link } from "react-router-dom";

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    };
    return(
        <Flex justify="space-between" align="center" padding="0.9vw 2.4vw">
            <Flex justify="safe center" align="center" width="15vw" padding="0vw 1.2vw"> {/* justify="safe center" */}
                <Link to="/LaunchesPage" style={{textDecoration: 'none'}}>
                    <Box margine="0vw 0.9vw" textColor={'black'}>
                        <Text fontSize="1.1vw" className="Launches">Launches</Text>
                    </Box>
                </Link>
                <Link to="/LaunchesPage">
                    <Box margine="0vw 3vw" textColor={'black'} >
                        <Image src={Facebook} boxSize="2vw" margin="0 0vw"></Image>
                    </Box>
                </Link>
            </Flex>

            {/*Right Side - Sections & Connect*/}
            <Flex fontSize="1vw" justify="space-around" align="center" width="30vw" padding="0vw 1.2vw">
                <Link to="/AboutPage" style={{textDecoration: 'none', color: 'black'}}>
                    <Box margin="0vw 0.9vw">About</Box>
                </Link>
                <Link to="/OverviewPage" style={{textDecoration: 'none', color: 'black'}}>
                    <Spacer/>
                        <Box margin="0vw 0.9vw">Overview</Box>
                    <Spacer/>
                </Link>
                {isConnected ? (
                    <Box margin="0vw 0.9vw">Connected</Box>
                ) : (
                    <Button
                        backgroundColor="#000000"
                        borderRadius="calc(6px + 0.4vw)"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        fontSize="1vw"
                        cursor="Pointer"
                        fontFamily="inherit"
                        padding="0.5vw 1vw"
                        margin="0vw 0.9vw"
                        onClick={connectAccount}
                    >
                        Connect
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};
export default NavBar;