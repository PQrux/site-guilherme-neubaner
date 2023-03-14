import { css, Global, useTheme } from "@emotion/react";

export default function GlobalStyles(){
    const theme = useTheme();
    return <Global styles={css({
        'body':{
            fontFamily: 'Inter',
            margin: 0,
            backgroundColor: theme.colors.bgPrimary,
            color: theme.colors.text,
        },
        '*': {
            boxSizing: 'border-box'
        }
    })}/>
}