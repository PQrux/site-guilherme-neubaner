import styled from "@emotion/styled";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";
import pSBC from 'shade-blend-color';
import DefineDefaultColor from "../../utils/define_default_color";

type TouchableElements = HTMLDivElement &  HTMLButtonElement & HTMLAnchorElement;

export interface TouchableProps extends DetailedHTMLProps<HTMLAttributes<TouchableElements>, TouchableElements>{
    variant?: 'contained' | 'outlined';
    color?: ColorType;
    children?: any;
    as?: ElementType<any> | undefined;
    href?: string;
    target?: string;
    size?: 'normal' | 'small';
}

export const TOUCHABLE_CONSTS = {
    borderSize: '2px',
    borderRadius: '6px',
}

const Touchable = styled.div<TouchableProps>(({theme, ...props}) => {
    
    const color = DefineDefaultColor(theme, props.color, 'primary');
    const darker = pSBC(-1 * theme.colors.contrastThreshold, color)!;
    const lighter = pSBC(theme.colors.contrastThreshold, color)!;
    const outlined = props.variant === 'outlined';

    return ({
        fontFamily: theme.fontFamily,
        border: `${TOUCHABLE_CONSTS.borderSize} solid`,
        borderColor: color,
        padding: props.size === 'small' ? '2px 4px' : '5px 10px',
        borderRadius: TOUCHABLE_CONSTS.borderRadius,
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        color: outlined ? color : theme.colors.text,
        backgroundColor: outlined ? 'transparent' : color,
        transition: 'color 0.3s, background-color 0.3s, border-color 0.3s',
        userSelect: 'none',
        '&:hover': {
            borderColor: lighter,
            color: outlined ? lighter : undefined,
            backgroundColor: outlined ? 'transparent' : lighter,
        },
        '&:active':{
            borderColor: darker,
            color: outlined ? darker : undefined,
            backgroundColor: outlined ? 'transparent' : darker,
        }
    })
})

export default Touchable;