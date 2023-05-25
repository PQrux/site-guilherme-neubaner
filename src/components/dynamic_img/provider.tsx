import { graphql, useStaticQuery } from "gatsby";
import { PropsWithChildren } from "react";
import { DynamicImgContext } from "./context";

export function DynamicImgProvider(props: PropsWithChildren){
    const qr = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {in: ["svg", "png", "jpg"]}}) {
                nodes {
                    relativePath
                    publicURL
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