import styled from "@emotion/styled";
import DefineDefaultColor from "../../utils/define_default_color";

const sizes = {
    small: '0.90rem',
    normal: '1rem',
    large: '1.2rem',
    xLarge: '1.7rem',
    xxLarge: '2rem',
    xxxLarge: '2.5rem'
}

const Text = styled.span<{
    size?: keyof typeof sizes,
    align?: 'center' | 'right' | 'left' | 'justify',
    color?: ColorType, 
}>(({theme, ...props}) => ({
    color: DefineDefaultColor(theme, props.color, 'text'),
    fontSize: props.size ? sizes[props.size] : sizes.normal,
    textAlign: props.align ?? undefined,
}))

export default Text;