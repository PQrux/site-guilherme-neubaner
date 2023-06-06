import { Theme, ThemeProvider } from "@emotion/react";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<[theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>]>([] as any);

export const ThemeContextProvider = (props: {theme: Theme, children: any}) => {
    const [theme, setTheme] = useState(props.theme);
    useEffect(() => {
        setTheme(props.theme);
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