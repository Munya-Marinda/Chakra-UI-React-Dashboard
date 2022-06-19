import {
  Box,
  Stack,
  Text,
  Badge,
  Flex,
  Spacer,
  Circle,
  Image,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, InfoIcon } from "@chakra-ui/icons";
import * as React from "react";
import PaginatorPage from "./Paginator/PaginatorPage.tsx";

const OrderDataMobileView = (props) => {
  // components

  // Order card
  const OrderCard = (props) => {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        p={"10px"}
        mx={"10px"}
        my={"10px"}
        w="150px"
        h="200px"
        bg="white"
        boxShadow={"2xl"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        borderColor={"#2a4365"}
        position={"relative"}
      >
        <Flex justifyContent="right" mb={"10px"}>
          <Badge fontSize={"xx-small"} colorScheme={"blackAlpha"}>
            ID: {props.orderID}
          </Badge>
          <Spacer />
          <Badge
            fontSize={"x-small"}
            colorScheme={props.completed === "true" ? "green" : "red"}
          >
            {props.completed === "true" ? "YES" : "NO"}
          </Badge>
        </Flex>
        <Stack>
          <Badge
            w={"fit-content"}
            fontSize="1em"
            mb={"5px"}
            colorScheme={"facebook"}
          >
            {props.price}
          </Badge>
          <Flex borderWidth={"1px"} borderColor={"white"} w={"fit-content"}>
            <Circle
              m={"auto"}
              opacity={0.8}
              children={
                <Image
                  w={{ base: "20px", md: "35px" }}
                  h={{ base: "20px", md: "35px" }}
                  src="/icon-dashboard.svg"
                />
              }
            />
            <Text
              m={"auto"}
              fontSize={"small"}
              fontWeight={"bold"}
              casing={"uppercase"}
              pl={"7px"}
              lineHeight={"1"}
            >
              {props.customerName}
            </Text>
          </Flex>
          <Text m={"auto"} fontSize={"x-small"}>
            {props.services.slice(0, 40) + "..."}
          </Text>
        </Stack>
        <Flex position={"absolute"} bottom={"10px"} w={"86%"}>
          {props.email === "none" ? (
            <></>
          ) : (
            <Circle
              m={"auto"}
              mr="5px"
              w="15px"
              h="15px"
              bg={"#2a4365"}
              children={<EmailIcon w="10px" h="10px" color={"white"} />}
            />
          )}

          {props.phone === "none" ? (
            <></>
          ) : (
            <Circle
              m={"auto"}
              w="15px"
              h="15px"
              bg={"green"}
              children={<PhoneIcon w="10px" h="10px" color={"white"} />}
            />
          )}
          {props.phone === "none" ? (
            props.email === "none" ? (
              <InfoIcon color={"red"} />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          <Spacer />
          <Badge w={"fit-content"}>{props.quoteDate}</Badge>
        </Flex>
      </Box>
    );
  };

  return (
    <Box
      w={"100%"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
    >
      <PaginatorPage data={props.data} />
    </Box>
  );
};

export default OrderDataMobileView;
