import { Button, useDisclosure, HStack, Stack, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import OrderManagementContainer from "./OrderManagement/OrderManagementContainer.tsx";
import DrawerContainer from "./DrawerContainer.tsx";
import { Drawer, DrawerOverlay } from "@chakra-ui/react";

// MainApp Component Starts

const MainApp = () => {
  //Show/Hide Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Recieves 2 args from Drawer: [MenuIndex | SubMenuIndex]
  const [selectedDrawerIndexes, setSelectedDrawerIndexes] = useState<number[]>([
    1, 0,
  ]);

  // Drawer Component
  const MainDrawer = () => {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        {/* Imported from DrawerContainer.tsx */}
        <DrawerContainer
          return_func_subDrawerSelectedIndexes={(drawerIndexes: number[]) => {
            setSelectedDrawerIndexes(drawerIndexes);
          }}
        />
      </Drawer>
    );
  };

  //
  //
  return (
    <HStack className="main-dashboard-container">
      {/* floating component: open Drawer */}
      <Button
        onClick={onOpen}
        bg={"#2c5282"}
        position="fixed"
        w={"20px"}
        h={"20px"}
        top={"10px"}
        left={"10px"}
        borderRadius={"50px"}
        boxShadow={" 2px 2px 3px #999"}
      >
        <HamburgerIcon color={"white"} w={"15px"} h={"15px"} />
      </Button>
      {/* Drawer component Start */}
      <MainDrawer />
      {/* Main View*/}
      <Stack w={"100%"} alignItems={"center"} justifyContent={"start"}>
        {/* Dashboard Views*/}

        {/* converts number[].toString to compare array values */}
        {selectedDrawerIndexes.toString() === "1,0" ? (
          <OrderManagementContainer />
        ) : (
          <></>
        )}
        {selectedDrawerIndexes.toString() === "1,1" ? (
          <Text p="15px" w={"100%"} textAlign={"center"} bg={"#4a658179"}>
            Dashboard - Menu Item View 1
          </Text>
        ) : (
          <></>
        )}
        {selectedDrawerIndexes.toString() === "1,2" ? (
          <Text p="15px" w={"100%"} textAlign={"center"} bg={"#4a658179"}>
            Dashboard - Menu Item View 2
          </Text>
        ) : (
          <></>
        )}

        {/* Tutorial Views*/}
        {selectedDrawerIndexes.toString() === "2,0" ? (
          <Text p="15px" w={"100%"} textAlign={"center"} bg={"#4a658179"}>
            Tutorial - Menu Item View 0
          </Text>
        ) : (
          <></>
        )}
        {selectedDrawerIndexes.toString() === "2,1" ? (
          <Text p="15px" w={"100%"} textAlign={"center"} bg={"#4a658179"}>
            Tutorial - Menu Item View 1
          </Text>
        ) : (
          <></>
        )}

        {/* Settings Views*/}
        {selectedDrawerIndexes.toString() === "3,0" ? (
          <Text p="15px" w={"100%"} textAlign={"center"} bg={"#4a658179"}>
            Settings - Menu Item View 0
          </Text>
        ) : (
          <></>
        )}
        {selectedDrawerIndexes.toString() === "3,1" ? (
          <Text p="15px" w={"100%"} textAlign={"center"} bg={"#4a658179"}>
            Settings - Menu Item View 1
          </Text>
        ) : (
          <></>
        )}
      </Stack>
    </HStack>
  );
};

export default MainApp;
