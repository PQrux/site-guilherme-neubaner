import styled from "@emotion/styled";
import { Property } from "csstype";

export interface FlexProps{
    direction?: Property.FlexDirection;
    gap?: Property.Gap;
    wrap?: Property.FlexWrap;
    justify?: Property.JustifyContent;
    align?: Property.AlignItems;
    alignSelf?: Property.AlignSelf;
    flex?: Property.Flex;
}

const Flex = styled.div<FlexProps>((props) => ({
    display: "flex",
    gap: props.gap,
    flexWrap: props.wrap,
    justifyContent: props.justify,
    alignItems: props.align,
    alignSelf: props.alignSelf,
    flexDirection: props.direction,
    flex: props.flex,
}))

export default Flex;