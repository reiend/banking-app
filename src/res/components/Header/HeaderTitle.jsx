import { chakra } from "@chakra-ui/react";

export const HeaderTitle = () => {

  return (
    <chakra.a>
      <chakra>
        <chakra.span 
          color="#66e18b"
          fontWeight="600"
          fontSize="clamp(1.75rem, 2.5vw, 3rem)"
          fontStyle="italic"
          >
          many
        </chakra.span>
        <chakra.span
          color="#3b3c54"
          fontWeight="500"
          fontSize="clamp(1.75rem, 2.5vw, 3rem)"
        >
          Bank
        </chakra.span>
      </chakra>
    </chakra.a>
  );
};

