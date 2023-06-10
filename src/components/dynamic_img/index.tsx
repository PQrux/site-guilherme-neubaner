import { GatsbyImageProps } from "gatsby-plugin-image";
import { useContext } from "react";
import { DynamicImgContext } from "./context";


export interface DynamicImgProps extends Omit<GatsbyImageProps, 'image'|'alt'>{
    src: string;
    alt: string;
    width?: string;
}

export function DynamicImg(props: DynamicImgProps){
    const context = useContext(DynamicImgContext);
    const file = context.allFile.nodes.find(f => f.relativePath === props.src);

    if(file?.childImageSharp){
        const imgData = file?.childImageSharp.gatsbyImageData;
        const sources = imgData.images.fallback;
        return (
            <img
                loading="lazy"
                width={imgData.width}
                {...props as any}
                alt={props.alt}
                srcSet={sources.srcSet}
                sizes={sources.sizes}
                src={sources.src}
            />
        )
    }

    return (
        <img loading="lazy" {...props as any} src={file?.publicURL} alt={props.alt}/>
    )
}