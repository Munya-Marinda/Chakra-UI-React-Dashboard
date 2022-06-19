import * as React from "react";
import {
  Center,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Text,
  HStack,
  Stack,
} from "@chakra-ui/react";

import { PieChart } from "react-minimal-pie-chart";

const StatsBar = (props) => {
  return (
    <Center
      textAlign={"center"}
      color={"white"}
      mb={"20px"}
      borderColor={"grey"}
      borderBottomWidth={{ base: "0px", md: "1px" }}
      borderTopWidth={{ base: "0px", md: "1px" }}
    >
      <Box
        display={{ md: "flex" }}
        m={"auto"}
        p={"5px"}
        w={{ base: "100%" }}
        h={{ md: "20vh" }}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <Stack h={"inherit"}>
          <PieChart
            data={[
              { title: "complete", value: props.statData[0], color: "#2a4365" },
              {
                title: "incomplete",
                value: props.statData[1],
                color: "#E53E3E",
              },
            ]}
            lineWidth={50}
            viewBoxSize={[125, 100]}
            center={[63, 50]}
          />
        </Stack>

        <StatGroup mt={"20px"} ml={{ md: "25px" }}>
          <HStack>
            <Stat color={"#2a4365"}>
              <StatLabel fontWeight={"bold"}>COMPLETED</StatLabel>
              <StatNumber>{props.statData[0]}</StatNumber>
            </Stat>
            <Box h={"45px"} m={"auto"} w={"2px"} bg={"black"} />
            <Stat color={"#E53E3E"}>
              <StatLabel fontWeight={"bold"}>INCOMPLETE</StatLabel>
              <StatNumber>{props.statData[1]}</StatNumber>
            </Stat>
          </HStack>
        </StatGroup>
        <Text
          mt={"10px"}
          ml={{ md: "50px" }}
          fontSize={"x-large"}
          color={"#E53E3E"}
          fontWeight={"bold"}
        >
          TOTAL:{props.statData[0] + props.statData[1]}
        </Text>
      </Box>
    </Center>
  );
};

export default StatsBar;
