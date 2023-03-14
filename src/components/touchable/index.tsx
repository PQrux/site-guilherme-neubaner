import styled from "@emotion/styled";
import pSBC from 'shade-blend-color';
import DefineDefaultColor from "../../utils/define_default_color";

export interface TouchableProps{
    variant?: 'contained' | 'outlined';
    color?: ColorType;
    children?: any;
}


const Touchable = styled.div<TouchableProps>(({theme, ...props}) => {
    
    const color = DefineDefaultColor(theme, props.color, 'primary');
    const darker = pSBC(-1 * theme.colors.contrastThreshold, color)!;
    const lighter = pSBC(theme.colors.contrastThreshold, color)!;
    const outlined = props.variant === 'outlined';

    return ({
        border: '2px solid',
        borderColor: color,
        padding: '5px 10px',
        borderRadius: '6px',
        //flex: 1,
        display: 'flex',
        justifyContent: 'center',
        color: outlined ? color : theme.colors.text,
        backgroundColor: outlined ? undefined : color,
        transition: 'color 0.3s, background-color 0.3s, border-color 0.3s',
        userSelect: 'none',
        '&:hover': {
            borderColor: lighter,
            color: outlined ? lighter : undefined,
            backgroundColor: outlined ? undefined : lighter,
        },
        '&:active':{
            borderColor: darker,
            color: outlined ? darker : undefined,
            backgroundColor: outlined ? undefined : darker,
        }
    })
})

export default Touchable;