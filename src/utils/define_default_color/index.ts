import { Theme } from "@emotion/react";



export default function DefineDefaultColor(theme: Theme, color?: string, fallback: string = 'inherit'){
    const colorType = color || fallback;
    const colorResult = colorType in theme.colors ? (theme.colors as any)[colorType] : colorType;
    return colorResult;
}