import {
  HStack,
  Input,
  Stack,
  Text,
  Select,
  Badge,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputLeftElement,
  InputGroup,
  Container,
} from "@chakra-ui/react";
import { InfoIcon, Search2Icon } from "@chakra-ui/icons";
import * as React from "react";
import { useState } from "react";
import OrderDataViewContainer from "./Table/OrderDataViewContainer.tsx";
import StatsBar from "./StatsBar/StatsBar.tsx";
import { data } from "./dummyData.js";

// DashboardDataView Component Starts

const OrderManagementContainer = () => {
  // count of orders (completed | incompleteOrder)
  const [completedVSincompleteOrder, setcompletedVSincompleteOrder] = useState<
    number[]
  >([0, 0]);

  // Show/Hide search-bar
  const [showSearchBar, setshowSearchBar] = useState<boolean>(false);

  // dummy data starts

  const columns = React.useMemo(
    () => [
      {
        Header: "order ID",
        accessor: "orderID",
      },
      {
        Header: "customer Name",
        accessor: "customerName",
      },
      {
        Header: "email",
        accessor: "email",
      },
      {
        Header: "phone",
        accessor: "phone",
      },
      {
        Header: "services",
        accessor: "services",
        //shorten summary
        Cell: ({ cell }) => (
          <>
            <Text as="i" textOverflow={"scroll"}>
              {cell.value.slice(0, 55) + "..."}
            </Text>
          </>
        ),
      },
      { Header: "quote Date", accessor: "quoteDate" },
      { Header: "price", accessor: "price" },
      {
        Header: "completed",
        accessor: "completed",
        // Yes Badge to display order progress
        Cell: ({ cell }) => (
          <>
            {cell.value === "true" ? (
              <Badge colorScheme="green">YES</Badge>
            ) : (
              <Badge colorScheme="red">NO</Badge>
            )}
          </>
        ),
      },
    ],
    []
  );

  // dummy data ends

  // states
  const [orderFilterIndex, setorderFilterIndex] = useState<number>(0);

  // components

  const AboutText = () => {
    return (
      <Stack textAlign={"left"}>
        <Heading size="md"> What is order management?</Heading>
        <Text>
          Order management refers to the process of receiving, tracking, and
          fulfilling customer orders. The order management process begins when
          an order is placed, and ends when the customer receives their package.
          When scaling your business, it’s important to automate and streamline
          this process — otherwise, you’ll eventually be overwhelmed by the
          sheer number of orders coming in.
        </Text>
      </Stack>
    );
  };

  // reference to search bar input
  const inputReference = React.useRef(null);

  React.useEffect(() => {
    // Listen for data changes
    let completedOrders = 0;
    let incompleteOrders = 0;

    data.forEach((item) => {
      item.completed === "true" ? completedOrders++ : incompleteOrders++;
    });
    setcompletedVSincompleteOrder([completedOrders, incompleteOrders]);

    // listen for clicks

    const handleClickOutside = () => {
      if (showSearchBar) {
        inputReference.current.focus();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // OrderManagementContainer starts

  return (
    <Stack alignItems={"center"} justifyContent={"start"} w={"inherit"}>
      {/* Content Header */}
      <Stack mb={"15px"}>
        <Text
          fontWeight={"bold"}
          textAlign={"center"}
          fontSize="xx-large"
          borderColor={"grey"}
          borderBottomWidth={{ base: "1px", md: "0px" }}
        >
          Order Management
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <InfoIcon color="#063668" fontSize={"large"} ml={"10px"} />
            </PopoverTrigger>
            <PopoverContent
              bg={"#063668"}
              color={"white"}
              fontWeight={"light"}
              fontSize={"md"}
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Order Management</PopoverHeader>
              <PopoverBody>
                <AboutText />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Stack>

      {/* Stats Bar */}
      <Container>
        <StatsBar statData={completedVSincompleteOrder} />
      </Container>

      {/* Filter Tab */}
      <Stack w={"auto"}>
        <HStack>
          <Select
            value={orderFilterIndex}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setorderFilterIndex(event.target.value);
            }}
            display={{ base: "block", md: "none" }}
            placeholder="Select option"
            m={"auto"}
            bg={"#2a4365"}
            color={"white"}
            opacity={showSearchBar === true ? "0.7" : "1"}
          >
            <option value="0">All Orders</option>
            <option value="1">Completed</option>
            <option value="2">Continuing</option>
            <option value="3">Restitue</option>
            <option value="4">Canceled</option>
          </Select>
          <HStack
            p={showSearchBar === false ? "10px" : "0"}
            bg={"#2a4365"}
            w="auto"
            borderRadius={"5px"}
            color="white"
            onClick={() => {
              setshowSearchBar(true);
            }}
          >
            <InputGroup display={showSearchBar === true ? "block" : "none"}>
              <InputLeftElement children={<Search2Icon color="white" />} />
              <Input
                ref={inputReference}
                onBlur={() => {
                  setshowSearchBar(false);
                }}
                onFocus={(event) => {
                  event.target.select();
                }}
                borderWidth={"0px"}
                borderRadius="5px"
                placeholder="Search"
                type="text"
                bg={"#2a4365"}
              ></Input>
            </InputGroup>
            <Search2Icon
              color="white"
              display={showSearchBar === false ? "block" : "none"}
            />
          </HStack>
        </HStack>

        <Tabs
          index={parseInt(orderFilterIndex.toString())}
          size={"sm"}
          overflowX={{ base: "scroll", md: "unset" }}
        >
          <TabList display={{ base: "none", md: "inline-flex" }}>
            <Tab
              onClick={(index) => {
                setorderFilterIndex(0);
                // alert("About Clicked");
              }}
            >
              All Orders
            </Tab>
            <Tab
              onClick={(index) => {
                setorderFilterIndex(1);
              }}
            >
              Completed
            </Tab>
            <Tab
              onClick={(index) => {
                setorderFilterIndex(2);
              }}
            >
              Continuing
            </Tab>
            <Tab
              onClick={(index) => {
                setorderFilterIndex(3);
              }}
            >
              Restitue
            </Tab>
            <Tab
              onClick={(index) => {
                setorderFilterIndex(4);
              }}
            >
              Canceled
            </Tab>
          </TabList>
          <TabPanels
            borderWidth={"1px"}
            borderColor={"rgb(224, 224, 224)"}
            overflow="scroll"
          >
            <TabPanel>
              {/* Desktop & Mobile Data View */}
              <OrderDataViewContainer data={data} columns={columns} />
            </TabPanel>
            <TabPanel>
              <p>
                Completed <Text fontWeight={"bold"}>Panel</Text>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Continuing <Text fontWeight={"bold"}>Panel</Text>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Restitue <Text fontWeight={"bold"}>Panel</Text>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Canceled <Text fontWeight={"bold"}>Panel</Text>
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default OrderManagementContainer;
