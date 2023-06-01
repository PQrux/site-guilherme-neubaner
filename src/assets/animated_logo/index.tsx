import styled from "@emotion/styled";
import _AnimatedLogo from "./animated_logo.svg";

const AnimatedLogo = styled(_AnimatedLogo)(({theme}) => ({
    "--primary": `${theme.colors.primary} !important`,
    "--secondary": `${theme.colors.text} !important`,
}))

export default AnimatedLogo;