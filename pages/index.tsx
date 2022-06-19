import type { NextPage } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import MainApp from "../components/Dashboard/MainApp.tsx";
import PaginatorPage from "../components/Dashboard/OrderManagement/Table/Paginator/PaginatorPage.tsx";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      {/* <PaginatorPage /> */}
      <MainApp />
    </ChakraProvider>
  );
};

export default Home;
