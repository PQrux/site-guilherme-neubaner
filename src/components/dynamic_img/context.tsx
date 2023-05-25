import { createContext } from "react";


export interface DynamicImgNode{
    relativePath: string; 
    publicURL: string;
    childImageSharp?: {
        gatsbyImageData: any
    };
}

export interface DynamicImgContextVal{
    allFile: {
        nodes: DynamicImgNode[],
    }
}
export const DynamicImgContext = createContext<DynamicImgContextVal>({allFile: {nodes: []}});