import styled from "@emotion/styled";
import _AnimatedMouse from "./animated_mouse.svg";

const AnimatedMouse = styled(_AnimatedMouse)(({theme}) => ({
    "--primary": `${theme.colors.primary} !important`,
}))

export default AnimatedMouse;