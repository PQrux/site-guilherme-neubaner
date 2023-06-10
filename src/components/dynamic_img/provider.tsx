import { graphql, useStaticQuery } from "gatsby";
import { PropsWithChildren } from "react";
import { DynamicImgContext } from "./context";

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