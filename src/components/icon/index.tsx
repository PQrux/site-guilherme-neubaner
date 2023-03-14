import styled from "@emotion/styled";
import DefineDefaultColor from "../../utils/define_default_color";

const sizes = {
    'normal': '1.5rem',
    'small': '1rem',
    'large': '2rem'
}

const Icon = styled.div<{size?: keyof typeof sizes | AnyInherit}>(({theme, ...props}) => {
    const color = DefineDefaultColor(theme, props.color);
    
    return {
        color: color,
        fontSize: props.size ? (sizes as any)[props.size] || props.size : sizes.normal,
    }
})

export default Icon;