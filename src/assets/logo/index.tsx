import styled from "@emotion/styled";
import _Logo from "./logo.svg";

const Logo = styled(_Logo)(({theme}) => ({
    "--primary": `${theme.colors.primary} !important`,
    "--secondary": `${theme.colors.text} !important`,
}))

export default Logo;