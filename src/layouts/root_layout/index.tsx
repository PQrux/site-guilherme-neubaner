import { ThemeProvider } from "@emotion/react";
import React from "react";
import DarkTheme from "../../themes/dark";
import "@fontsource/inter";
import GlobalStyles from "../../components/global_styles";

export default function RootLayout({children}: React.PropsWithChildren){
    return (
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyles/>
            {children}
        </ThemeProvider>
    )
}