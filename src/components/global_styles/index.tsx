import { css, Global, useTheme } from "@emotion/react";

export default function GlobalStyles(){
    const theme = useTheme();
    const thumbColor = theme.id === 'light' ? '0, 0, 0' : '255, 255, 255';
    return <Global styles={css({
        'html': {
            scrollBehavior: 'smooth',
        },
        'body':{
            fontFamily: theme.fontFamily,
            margin: 0,
            backgroundColor: theme.colors.bgPrimary,
            color: theme.colors.text,
            transition: 'background-color 0.4s',
        },
        '*': {
            boxSizing: 'border-box',
            whiteSpace: 'pre-line',
        },
        'p, a, span, h1, h2, h3, em, u, b': {
            transition: `color ${theme.colorTransition}`
        },
        'svg *': {
            transition: `fill ${theme.colorTransition}, color ${theme.colorTransition}, stroke ${theme.colorTransition}`,
        },
        '::-webkit-scrollbar':{
            width: '10px',
            height: '10px'
        },
        '::-webkit-scrollbar-track':{background: "transparent"},
        '::-webkit-scrollbar-thumb':{
            background: `rgba(${thumbColor}, .3)`,
            borderRadius: "5px"
        },
        '::-webkit-scrollbar-thumb:hover':{
            background: `rgba(${thumbColor}, .5)`
        },
    })}/>
}