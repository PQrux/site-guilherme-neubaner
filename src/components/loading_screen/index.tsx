import styled from "@emotion/styled";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import Puff from "../../assets/puff/puff.svg";
import { useLoading } from "../../contexts/loading_context";
const Loading = styled(animated.div)({
    zIndex: 100,
    position: 'fixed',
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
    inset: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const LoadingContent = styled(animated.div)({

});


export default function LoadingScreen(){
    const [animate, setAnimate] = useState(false);
    const [, setLoading] = useLoading();
    
    const containerSpring = useSpring({
        height: animate ? '0px' : '100vh',
        delay: 1000,
        onResolve: s => !s.noop && s.finished ? setLoading({loaded: true}) : null,
    });
    const contentSpring = useSpring({
        opacity: animate ? 0 : 1,
        config: { duration: 500 },
    });

    useEffect(() => {
        let listening = false;
        document.body.style.overflow = 'hidden';
        const commit = () => {
            document.body.style.overflow = '';
            if(document.readyState !== 'complete') return;
            if(listening) document.removeEventListener('readystatechange', commit);
            setAnimate(true);
        }
        if(document.readyState === "complete") commit();
        else{
            listening = true;
            document.addEventListener('readystatechange', commit);
        }
    }, []);

    return (
        <Loading style={containerSpring}>
            <LoadingContent style={contentSpring}>
                <Puff width={'70px'} height={'70px'}/>
            </LoadingContent>
        </Loading>
    )
}