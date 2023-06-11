import { graphql, useStaticQuery } from "gatsby";
import { PropsWithChildren, createContext, useContext } from "react";


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
const DynamicImgContext = createContext<DynamicImgContextVal>({allFile: {nodes: []}});

export default DynamicImgContext;

export function DynamicImgProvider(props: PropsWithChildren){
    const qr = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {in: ["svg", "png", "jpg", "webp"]}}) {
                nodes {
                    relativePath
                    publicURL
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    return (
        <DynamicImgContext.Provider value={qr}>
            {props.children}
        </DynamicImgContext.Provider>
    )
}

export const useDynamicImg = () => useContext(DynamicImgContext);