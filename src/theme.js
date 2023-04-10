import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: "#141414",
    colorTextBase: "#f4f4f4",
    colorBgHeader: "#111a20",
    colorBgBlue: "#08567b",
    colorBgBlueText: "#f4f4f4",
    colorBgLightBlue: "#C8DBE4",
    colorBgWhite: "#f4f4f4",
    colorBgGreen: "#32A02E",
    colorTextBlue: "#f4f4f4",
  },
  // components: {
  //   Button: {
  //     colorPrimary: "#6366f2;",
  //     colorPrimaryHover: "#9192f5",
  //   }
  // },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase: "#fefefe",
    colorTextBase: "#141414",
    colorBgHeader: "#fefefe",
    colorBgBlue: "#017AB3",
    colorBgBlueText: "#fefefe",
    colorBgLightBlue: "#E9F8FF",
    colorBgWhite: "#fefefe",
    colorBgGreen: "#38B033",
    colorTextBlue: "#017AB3",
  },
  // components: {
  //   Button: {
  //     colorPrimary: "#017AB3;",
  //     colorPrimaryHover: "#2B99CB",
  //   },
  // },
};

export { lightTheme, darkTheme };