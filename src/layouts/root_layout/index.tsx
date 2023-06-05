import { ThemeProvider } from "@emotion/react";
import "@fontsource/inter";
import React from "react";
import GlobalStyles from "../../components/global_styles";
import LoadingScreen from "../../components/loading_screen";
import { LoadingContextProvider } from "../../contexts/loading_context";
import DarkTheme from "../../themes/dark";

export default function RootLayout({children}: React.PropsWithChildren){
    return (
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyles/>
            <LoadingContextProvider>
                {children}
                <LoadingScreen/>
            </LoadingContextProvider>
        </ThemeProvider>
    )
}