import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useColorSwitcherContext } from "../../contexts/color_switcher_context";
import { useThemeContext } from "../../contexts/theme_context";

const StickySpan = styled.span({
    position: 'sticky',
    top: '0px',
    left: '0px'
})

export interface ColorSwitcherItemProps{
    color?: string;
    themeSwitch?: number;
}

export default function ColorSwitcherItem(props: ColorSwitcherItemProps){
    const { addItem, removeItem } = useColorSwitcherContext();
    const ref = useRef<HTMLSpanElement>(null);
    const [theme] = useThemeContext();

    useEffect(() => {
        const color = props.color || theme.colorSwitches[props.themeSwitch!];
        if(ref.current){
            addItem(ref.current, color);
            return () => removeItem(ref.current!);
        }
    }, [ref.current]);

    return (
        <StickySpan
            ref={ref}
        />
    )
}