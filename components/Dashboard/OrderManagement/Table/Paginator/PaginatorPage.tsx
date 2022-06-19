import React, { FC, ChangeEvent, useEffect, useState } from "react";
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";
import {
  Box,
  Stack,
  Text,
  Badge,
  Flex,
  Spacer,
  Circle,
  ButtonProps,
  Image,
} from "@chakra-ui/react";
import {
  EmailIcon,
  PhoneIcon,
  InfoIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";

const PaginatorPage = (props) => {
  // states
  const [totalOrders, settotalOrders] = useState<number>(0);
  const [totalPages, settotalPages] = useState<number>(0);
  const [startToEndIndex, setstartToEndIndex] = useState<number[]>([-1, -1]);
  // const [,set] = useState<>();

  const pagesQuantity = totalPages;
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  // Order card
  const OrderCard = (props) => {
    return (
      <Box
        key={props.uniqueKey}
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
                  w={{ base: "25px", md: "25px" }}
                  h={{ base: "25px", md: "25px" }}
                  src="/icon-user-profile.svg"
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
              key={props.uniqueKey}
              m={"auto"}
              mr="5px"
              w="15px"
              h="15px"
              bg={"#2a4365"}
              children={<EmailIcon w="11px" h="10px" color={"white"} />}
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

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    let orderLength = props.data.length;
    settotalOrders(orderLength);
    settotalPages(Math.ceil(orderLength / 6));

    // set start and end index
    let start = currentPage * 6 - 6;
    let end = start + 5;
    if (end === orderLength) {
      end = orderLength;
    }
    //set the data
    setstartToEndIndex([start, end]);
  });

  //
  //
  //
  //
  //
  //
  //

  // styles
  const baseStyles: ButtonProps = { w: 7, fontSize: "sm" };
  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: { opacity: 0.7 },
    bg: "#2a4365",
    color: "white",
  };
  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: { opacity: 0.7 },
    bg: "#E53E3E",
    color: "white",
  };
  const separatorStyles: ButtonProps = { w: 7, bg: "green.200" };

  //
  //
  //
  //
  //
  //

  return (
    <>
      {props.data.map((order, index, array) => (
        <>
          {index >= startToEndIndex[0] && index <= startToEndIndex[1] ? (
            <OrderCard
              uniqueKey={index}
              orderID={order.orderID}
              customerName={order.customerName}
              email={order.email}
              phone={order.phone}
              services={order.services}
              quoteDate={order.quoteDate}
              price={order.price}
              completed={order.completed}
            />
          ) : null}
        </>
      ))}
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        activeStyles={activeStyles}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
      >
        <Container align="center" justify="space-around" w="full" p={4}>
          <Previous>
            <ArrowLeftIcon />

            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            <ArrowRightIcon />
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
        <Container align="center" justify="center" w="full" p={4}></Container>
      </Paginator>
    </>
  );
};

export default PaginatorPage;
