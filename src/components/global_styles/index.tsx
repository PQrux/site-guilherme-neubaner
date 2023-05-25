import { css, Global, useTheme } from "@emotion/react";

export default function GlobalStyles(){
    const theme = useTheme();
    return <Global styles={css({
        'html': {
            scrollBehavior: 'smooth',
        },
        'body':{
            fontFamily: theme.fontFamily,
            margin: 0,
            backgroundColor: theme.colors.bgPrimary,
            color: theme.colors.text,
            
        },
        '*': {
            boxSizing: 'border-box',
            whiteSpace: 'pre-line'
        },
        '::-webkit-scrollbar':{
            width: '10px',
            height: '10px'
        },
        '::-webkit-scrollbar-track':{background: "transparent"},
        '::-webkit-scrollbar-thumb':{
            background: "rgba(255, 255, 255, .3)",
            borderRadius: "5px"
        },
        '::-webkit-scrollbar-thumb:hover':{background: "rgba(255, 255, 255, .5)"},
    })}/>
}