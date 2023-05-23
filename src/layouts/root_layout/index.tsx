import { ThemeProvider } from "@emotion/react";
import "@fontsource/inter";
import React from "react";
import GlobalStyles from "../../components/global_styles";
import DarkTheme from "../../themes/dark";

export default function RootLayout({children}: React.PropsWithChildren){
    return (
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyles/>
            {children}
        </ThemeProvider>
    )
}