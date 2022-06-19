import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from "@chakra-ui/react";
import { Stack, Image, Text, HStack } from "@chakra-ui/react";
import * as React from "react";

import SubMenuDashboardOptions from "./SubMenuOptions/SubMenuDashboardOptions.tsx";
import SubMenuTutorialOptions from "./SubMenuOptions/SubMenuTutorialOptions.tsx";
import SubMenuSettingsOptions from "./SubMenuOptions/SubMenuSettingsOptions.tsx";

const DrawerContainer = (props) => {
  //Selected Index from Drawer menu options
  const [selectedDrawerIndex, setSelectedDrawerIndex] =
    React.useState<number>(0);

  return (
    <DrawerContent w="25px">
      <DrawerCloseButton />
      <DrawerHeader>
        <HStack
          className="sub-head-userInfo-box"
          alignItems={{ base: "left", md: "center" }}
          pl={"15"}
        >
          <Center
            h="50px"
            w="50px"
            margin={"auto"}
            marginLeft={{ base: "0px", md: "10px" }}
            marginRight={"2px"}
          >
            <Image
              w={{ base: "45px", md: "45px" }}
              h={{ base: "45px", md: "45px" }}
              src="/icon-user-profile.svg"
            />
          </Center>
          <Stack className="sub-head-userInfo-text-container">
            <Text color={"#063668"} fontSize={"medium"} fontWeight={"bold"}>
              User Full Name
              <br />
              <Text color={"black"} fontSize={"small"}>
                User Full Job Position
              </Text>
            </Text>
          </Stack>
        </HStack>
      </DrawerHeader>

      <DrawerBody>
        <Accordion>
          <AccordionItem>
            <AccordionButton
              onClick={() => {
                setSelectedDrawerIndex(1);
              }}
            >
              <HStack
                pl={"10px"}
                w={"100%"}
                h={{ base: "35px", md: "50px" }}
                borderLeftWidth={{ base: "2px", md: "3px" }}
                borderColor={
                  selectedDrawerIndex === 1 ? "#2c5282ff" : "transparent"
                }
              >
                <Image
                  w={{ base: "20px", md: "35px" }}
                  h={{ base: "20px", md: "35px" }}
                  src="/icon-dashboard.svg"
                />
                <Text m={"auto"} fontSize={"large"} fontWeight={"black"}>
                  DASHBOARD
                </Text>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <SubMenuDashboardOptions
                return_func_SubMenuDashboardIndex={(subMenuIndex: number) => {
                  props.return_func_subDrawerSelectedIndexes([1, subMenuIndex]);
                }}
              />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton
              onClick={() => {
                setSelectedDrawerIndex(2);
              }}
            >
              <HStack
                pl={"10px"}
                borderLeftWidth={{ base: "2px", md: "3px" }}
                borderColor={
                  selectedDrawerIndex === 2 ? "#2c5282ff" : "transparent"
                }
              >
                <Image
                  w={{ base: "20px", md: "35px" }}
                  h={{ base: "20px", md: "35px" }}
                  src="/icon-premium.svg"
                />
                <Text m={"auto"} fontSize={"large"} fontWeight={"black"}>
                  TUTORIAL
                </Text>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <SubMenuTutorialOptions
                return_func_SubMenuTutorialIndex={(subMenuIndex: number) => {
                  props.return_func_subDrawerSelectedIndexes([2, subMenuIndex]);
                }}
              />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton
              onClick={() => {
                setSelectedDrawerIndex(3);
              }}
            >
              <HStack
                pl={"10px"}
                w={"100%"}
                h={{ base: "35px", md: "50px" }}
                borderLeftWidth={{ base: "2px", md: "3px" }}
                borderColor={
                  selectedDrawerIndex === 3 ? "#2c5282ff" : "transparent"
                }
              >
                <Image
                  w={{ base: "20px", md: "35px" }}
                  h={{ base: "20px", md: "35px" }}
                  src="/icon-settings.svg"
                />
                <Text m={"auto"} fontSize={"large"} fontWeight={"black"}>
                  SETTINGS
                </Text>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <SubMenuSettingsOptions
                return_func_SubMenuSettingsIndex={(subMenuIndex: number) => {
                  props.return_func_subDrawerSelectedIndexes([3, subMenuIndex]);
                }}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Stack
          pt={"15vh"}
          pl={"20px"}
          alignItems={"left"}
          bg={"#4a65812a"}
          spacing={10}
          h="100%"
        >
          {/* Map DashboardTabList ends */}
        </Stack>
      </DrawerBody>
    </DrawerContent>
  );
};

export default DrawerContainer;
