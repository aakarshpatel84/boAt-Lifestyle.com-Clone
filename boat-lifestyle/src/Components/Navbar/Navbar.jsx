import { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  HStack,
  Image,
  Input,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Categories } from "./Categories";
import { MenuDrop } from "./MenuDrop";

export function Navbar() {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleDrop = () => {
    setShow(!show);
  };

  const removeDrop = () => {
    setShow(!show);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const removeMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Box color={"white"} bg="black" textAlign={"center"} p="7px 20px">
        Plug in to festivities with 75% OFF! Come Sail with boAt 💃{" "}
      </Box>
      <Flex bg="white" color={"black"}>
        <Box>
          <Link>
            <Image
              padding={"15px"}
              width={"85%"}
              marginLeft={"20px"}
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672"
              alt="boAt"
            />
          </Link>
        </Box>

        <UnorderedList ml="7rem" alignItems={"center"} listStyleType={"none"}>
          <Grid
            templateColumns={"repeat(4,1fr)"}
            gap={2.5}
            fontSize="18px"
            color={"black"}
          >
            <ListItem
              onMouseEnter={handleDrop}
              onMouseLeave={removeDrop}
              padding={"1rem"}
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              CATEGORIES <ChevronDownIcon />
              {show && <Categories />}
            </ListItem>
            <ListItem
              padding={"1rem"}
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              SAIL WITH BOAT
            </ListItem>
            <ListItem
              p="1rem"
              _hover={{ textDecoration: "underline" }}
              cursor="pointer"
            >
              Offer Zone
            </ListItem>
            <ListItem
              onMouseEnter={handleMenu}
              onMouseLeave={removeMenu}
              padding={"1rem"}
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              More <ChevronDownIcon />
              {menu && <MenuDrop />}
            </ListItem>
          </Grid>
        </UnorderedList>

        <Box ml="200px">
          <SearchIcon
            alignItems={"center"}
            position={"absolute"}
            zIndex="5"
            color={"black"}
            top="65px"
            ml="10px"
          />
          <Input
            w="250px"
            p="0px 35px"
            placeholder="Search..."
            color={"black"}
            borderRadius={"20px"}
            bg="#EAEAEA"
            top="15px"
          />
        </Box>
        <HStack
          mr="1rem"
          fontSize={"1.5rem"}
          color="black"
          p="1rem"
          spacing="14px"
        >
          <Box>
            <FaUser cursor={"pointer"} onClick={() => setLogin(!login)} />
            {/* {login ? <LoginPopup setLogin={setLogin} login={login} /> : null} */}
          </Box>
          <Box>
            <IoMdCart cursor={"pointer"} />
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
