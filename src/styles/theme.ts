import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  surface2: {
    50: "#F8FAFA",
    100: "#F8FAFA",
    200: "#3F484A",
    300: "#6F797A",
  },
  secondary: {
    200: "#FFF2B0",
  },
};
export const customBackgroundColors = {
  surface2: "#E8E9DE",
};

export const customBackgrounds = {
  surface2: `linear-gradient(0deg, #F8FAFA, #F8FAFA),
linear-gradient(0deg, rgba(107, 95, 0, 0.08), rgba(107, 95, 0, 0.08));
`,
};
const customTheme = extendTheme({ config, colors });

export default customTheme;
