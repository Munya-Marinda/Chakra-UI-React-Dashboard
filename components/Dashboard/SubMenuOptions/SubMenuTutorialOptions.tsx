import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";

// Dashboard-List Component Starts

const SubMenuTutorialOptions = (props) => {
  const [selectedItemIndex, setselectedItemIndex] = useState<number>(-1);
  const [listOfItems, setlistOfItems] = useState([
    { id: 0, text: "Tutorial 0" },
    { id: 1, text: "Tutorial 1" },
  ]);

  return (
    <Stack p={"5px"} w={"inherit"} alignItems={"center"}>
      <Stack overflowY="scroll" scrollMargin={5} w={"100%"} pl="5px">
        <Stack color={"grey"}>
          {listOfItems.map((item) => (
            <Box
              p="7px"
              variant={"unstyled"}
              color="rgb(85, 85, 85)"
              borderRadius="0px"
              textAlign="left"
              borderBottomWidth={"1px"}
              borderBottomColor={"rgb(224, 224, 224)"}
              bg={selectedItemIndex === item.id ? "#f0f6fc" : "transparent"}
              onClick={() => {
                setselectedItemIndex(item.id);
                props.return_func_SubMenuTutorialIndex(item.id);
              }}
              key={item.id}
            >
              {item.text}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SubMenuTutorialOptions;
