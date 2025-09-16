import { Dimensions } from "react-native";
const width = (number) => {
  let fullWidth = Dimensions.get("window").width;
  if (number >= 100) return fullWidth;
  else if (number <= 0) return 0;
  else return fullWidth * (number / 100);
};
const height = (number) => {
  let fullHeight = Dimensions.get("window").height;
  if (number >= 100) return fullHeight;
  else if (number <= 0) return 0;
  else return fullHeight * (number / 100);
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const fontSizes = {
  xxxs: SCREEN_WIDTH * 0.018,
  xxs: SCREEN_WIDTH * 0.024,
  xs: SCREEN_WIDTH * 0.026,
  sm: SCREEN_WIDTH * 0.03,
  base: SCREEN_WIDTH * 0.034,
  lg: SCREEN_WIDTH * 0.038,
  xl: SCREEN_WIDTH * 0.042,
  '2xl': SCREEN_WIDTH * 0.05,
  '3xl': SCREEN_WIDTH * 0.062,
  '4xl': SCREEN_WIDTH * 0.074,
  '5xl': SCREEN_WIDTH * 0.098,
};

export { height, width, fontSizes, SCREEN_WIDTH, SCREEN_HEIGHT };
