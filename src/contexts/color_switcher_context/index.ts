import { createContext, useContext } from "react";

export const ColorSwitcherContext = createContext({
    addItem: (element: Element, color: string) => {},
    removeItem: (element: Element) => {}
})

export const useColorSwitcherContext = () => useContext(ColorSwitcherContext);