import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";
import { useContext } from "react";
import { DynamicImgContext } from "./context";


export interface DynamicImgProps extends Omit<GatsbyImageProps, 'image'|'alt'>{
    src: string;
    alt: string;
}

export function DynamicImg(props: DynamicImgProps){
    const context = useContext(DynamicImgContext);
    const file = context.allFile.nodes.find(f => f.relativePath === props.src);

    if(file?.childImageSharp){
        return (
            <GatsbyImage
                {...props}    
                alt={props.alt}
                image={file.childImageSharp.gatsbyImageData}
            />
        )
    }

    return (
        <img {...props as any} src={file?.publicURL} alt={props.alt}/>
    )
}