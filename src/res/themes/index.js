import { 
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
      primary: {
        50: "#CCF5DA",
        100: "#AAEEC1",
        200: "#88E7A8",
        300: "#66E18F",
        400: "#44DA76",
        500: "#28CC5F",
        600: "#22AA4F",
        700: "#1B883F",
        800: "#14672F",
        900: "#0D441F",
      },
      secondary: {
        50: "#CFCFDD",
        100: "#B7B7CC",
        200: "#A0A0BB",
        300: "#8888AA",
        400: "#707199",
        500: "#5D5E83",
        600: "#4C4D6B",
        700: "#3B3C54",
        800: "#2A2B3C",
        900: "#191A24",
      },
    },
    fonts: {
      heading:  'Open Sans, sans-serif',
      body:     'Raleway, sans-serif',
    },
    fontSizes: {
      "fluid-100": "clamp(1rem, 0.5vw, 1.25rem)",
      "fluid-200": "clamp(1rem, 1vw, 1.5rem)",
      "fluid-300": "clamp(1rem, 1.5vw, 1.5rem)",
      "fluid-400": "clamp(1.25rem, 1vw, 1.75rem)",
      "fluid-500": "clamp(1.75rem, 2.5vw, 3rem)",
    },
    components: {
      Input: {
        variants: {
          filled: {
            field: {
              _focus: {
                borderColor: "primary.300"
              }
            }
          }
        },
        sizes: {
          md: {
            field: {
              borderRadius: "2rem"
            }
          }
        }
      }
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input"],
  })
)

export {theme};

