import "@fontsource/inter";
import React from "react";
import GlobalStyles from "../../components/global_styles";
import LoadingScreen from "../../components/loading_screen";
import { LoadingContextProvider } from "../../contexts/loading_context";
import { ThemeContextProvider } from "../../contexts/theme_context";

export default function RootLayout({children}: React.PropsWithChildren){
    return (
        <ThemeContextProvider>
            <GlobalStyles/>
            <LoadingContextProvider>
                {children}
                <LoadingScreen/>
            </LoadingContextProvider>
        </ThemeContextProvider>
    )
}