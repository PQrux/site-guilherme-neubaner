import { Theme, ThemeProvider } from "@emotion/react";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { GetUserPreferedTheme } from "../../utils/user_prefered_theme";

const ThemeContext = createContext<[theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>]>([] as any);

export const ThemeContextProvider = (props: {theme?: Theme, children: any}) => {
    const [theme, setTheme] = useState(() => props.theme || GetUserPreferedTheme());
    console.log(theme);
    useEffect(() => {
        if(props.theme) setTheme(props.theme);
    }, [props.theme]);
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);