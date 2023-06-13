import { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text, Image} from '@chakra-ui/react';
import roboPunksNFT from './RoboPunksNFT.json';
import nft from './assets/nfts/Strel04ka_several_Ice_pyramids_snow_desert._Starry_night_Northe_395fafed-8c25-4218-9d36-f1e0ab9ef654.png';
import buy from './assets/icons/buy_52px.png';

//import {useDispatch} from 'react-redux';

//const dispatch = useDispatch()
 
const roboPunksNFTAddress = "0xB820475A5d3166c67F516CdFF00aef08E0ea15f6";
const mintAmount = 1; // Temporarly 

const price = 0.01;
const info_text = "Info text.... An asset is anything that has value and can be owned or controlled to produce positive value or benefit. Examples of assets include cash, stocks, bonds, real estate, cars, jewelry, artwork, and other tangible and intangible items. Assets can also be intangible, such as patents, trademarks, copyrights, licenses, contracts, and goodwill. Assets are typically categorized as either current assets, fixed assets, or intangible assets. Current assets are those that can be easily converted into cash, such as cash, accounts receivable, and inventory, while fixed assets are those that are used to produce goods or services, such as buildings and equipment. Intangible assets are non-physical assets that cannot be seen, touched or physically measured, such as patents, trademarks, and copyrights.";
const attributes_text = "Atributes are ...";

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    function getInfo(){
        document.getElementById('info').textContent = info_text;
    }
    function getAttributes(){
        document.getElementById('info').textContent = attributes_text;
    }
    
    async function handleMint(){
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
            console.log('response: ', response);
            const { from, hash, gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas} = response;
            //const { _hex } = gasLimit; const gasLimitHex = _hex;
            const { _hex } = gasPrice; const gasPriceHex = _hex;
            //const { _hex } = maxFeePerGas; const maxFeePerGas = _hex;
            //const { _hex } = maxPriorityFeePerGas; const maxPriorityFeePerGas = _hex;
            console.log(from);
            console.log(hash);
            //console.log(gasLimit);
            console.log(gasPriceHex);

            fetch("/api/transactions").then(
                response => response.json()
                ).then(
                data => { 
                    console.log(data)
                })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ from : from, hash : hash, gasPriceHex: gasPriceHex})
                //body: JSON.stringify({ from : '0xc81a7b1153Af21134E0502eE575F5df602a2B293', hash : '0x67d6124d87e4684a44644c10ccb4ffe54c977895ebb5955d9bedc3df3d0dddf3', gasPriceHex: '0x064953df34'})
            };
            fetch("/api/transactions", requestOptions).then(
                response => response.json()
                ).then(
                data => { 
                    //console.log(data)
                    //console.log(data.map((udata, index) => {udata.name}))
                    //const { name } = data; // This is how to get values from json
                    //console.log(name);
                })


            } catch (err) {
                console.log('error: ', err)
            }
            
        }

    }
    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };
    return(
<Flex margin="5vh 0vw" flexWrap="wrap" justify="space-between" align="center" padding="0vw 15vw" overflowY="auto" maxHeight={['unset', 'calc(100vh - 11.3vh)']}>
  <Flex justify="center" align="center" width="80vh" padding="0vw 1vw">
    <Box margin={["0vh 15vw", "2vh 1vh"]} maxHeight={['unset', 'calc(90vh - 0.1vw)']}>
      <Image
        src={nft}
        width={['80vw', '40vw']}
        padding="0vw 0.8vw"
        borderRadius="2vw"
        maxHeight={['unset', '90vh']}
        objectFit="contain"
      />
    </Box>
  </Flex>
  <Flex justify="center" align="center" width="50vh" marginTop="5vw">
    <Box width="50vw">
    <Text fontSize={["2vw", "3vw"]} textShadow="#000000" margin={["1.5vh 0vw 2vh 0vw", "3vh 0vw 4vh 0vw"]}>ICE _ LANDS</Text>
    <Box
      width="25vw"
      height={["12vh", "14vh"]}
      backgroundColor="white"
      borderRadius="2vw"
      boxShadow="0.2vw 0.4vw 1vw 0.1vw #0F0F0F"
      color="white"
      cursor="pointer"
      fontFamily="inherit"
      fontSize="2vw"
      margin="0vh 0vw 3vh 0vw"
    >
        <Flex justify="space-between" align="center" height="6.5vw" width="5vh" padding={['1vh', '7vh']}>
          <Flex justify="space-between" align="center" fontSize="1vw" maxHeight={['unset', 'calc(100vh - 1vh)']}>
            <Image height="2vw" width="3vw" marginRight="1vh" src={buy}></Image>
            <Text className="Launches" textColor="black" marginRight="4vh">0.01 ETH</Text>
          </Flex>
          <Flex>
            <Button
              backgroundColor="#4497F9"
              borderRadius="2vw"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              fontSize="1vw"
              border="none"
              width={['10vw', '20vh']}
              height={['4.5vw', '3vw']}
              onClick={handleMint}
            >
              Mint now
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box
        backgroundColor="white"
        width="25vw"
        height="4.5vw"
        borderRadius="2vw"
        boxShadow="0.2vw 0.4vw 1vw 0.1vw #0F0F0F"
        color="white"
        cursor="pointer"
        fontFamily="inherit"
        borderColor="black"
        borderWidth="5vh"
        margin="5vh 0vh 3vh 0vh"
      >
        <Flex justify="center" align="center" height="100%" padding="0vh 2.2vh">
          <Button
            backgroundColor="white"
            color="black"
            borderRadius="40vh"
            boxShadow="0px 0px 2vw 0.1vw rgba(0, 0, 0, 0.25)"
            cursor="pointer"
            fontFamily="inherit"
            fontSize="1.3vw"            
            border="none"
            width="8vw"
            height="5.5vh"
            margin="0vh 4vh 0vh 0vh"
            onClick={getAttributes}
          >
            Attributes
          </Button>
          <Button
            backgroundColor="#D9D9D9"
            color="black"
            borderRadius="40vh"
            cursor="pointer"
            fontFamily="inherit"
            fontSize="1.3vw"            
            border="none"
            width="6vw"
            height="5.5vh"
            onClick={getInfo}
          >
            Info
          </Button>
        </Flex>
      </Box>
      <Text id="info" fontSize="1vw" letterSpacing="-5.5%" height="20vh" width="50vh">
        {info_text}
      </Text>
    </Box>
  </Flex>
</Flex>


    );
};
export default MainMint;