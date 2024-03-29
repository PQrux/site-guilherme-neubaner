import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { useDynamicImg } from "../../contexts/dynamic_img";
import useBreakpoints from "../../utils/use_breakpoints";
import Container, { ContainerProps } from "../container";

const ImageContainer = styled.div<{bgImg: string}>(({theme, bgImg}) => ({
    backgroundColor: theme.colors.bgPrimary,
    backgroundImage: bgImg,
    transition: 'background-image 2s',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}));

const Filter = styled(Container)(({theme}) => ({
    height: 'inherit',
    width: 'inherit',
    flex: 1,
    backdropFilter: theme.colors.bgCarouselFilter,
    transition: 'backdrop-filter 0.4s',
}))

export default function BackgroundCarousel(props: ContainerProps){
    const ctx = useDynamicImg();
    const tablet = useBreakpoints('tablet');
    const images = useMemo(() => ctx.allFile.nodes.filter(img => img.relativePath.split('/')[0] === 'home_carousel'), []);
    const [current, setCurrent] = useState(0);
    const currentBGs = useMemo(() => tablet ? 
        joinURLs(images.map(i => `url(${i.publicURL})`), current) : 
        `url(${images[0].publicURL})`, 
    [current, tablet]);
    
    useEffect(() => {
        if(tablet){
            const intervalId = setInterval(() => {
                setCurrent(c => images.length - 1 <= c ? 0 : c + 1);
            }, 5000);
            return () => clearInterval(intervalId);
        }
    }, [tablet]);
    
    return (
        <ImageContainer bgImg={currentBGs}>
            <Filter {...props} bgcolor="transparent">
                {props.children}
            </Filter>
        </ImageContainer>
    );
}

const joinURLs = (urls: string[], pos: number) => urls.slice(pos, urls.length).concat(urls.slice(0,pos)).join(', ');