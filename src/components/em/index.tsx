import styled from "@emotion/styled";
import DefineDefaultColor from "../../utils/define_default_color";

const Em = styled.em<{color?: ColorType}>(({theme, color}) => ({
    fontStyle: 'normal',
    color: DefineDefaultColor(theme, color, 'primary'),
}));

export default Em;