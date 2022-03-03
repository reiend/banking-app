import { chakra } from "@chakra-ui/react";

export const HeaderTitle = () => {

  return (
    <chakra.a>
      <chakra>
        <chakra.span 
          color="primary.300"
          fontWeight="600"
          fontSize="fluid-500"
          fontStyle="italic"
          >
          many
        </chakra.span>
        <chakra.span
          color="secondary.700"
          fontWeight="500"
          fontSize="fluid-500"
        >
          Bank
        </chakra.span>
      </chakra>
    </chakra.a>
  );
};

