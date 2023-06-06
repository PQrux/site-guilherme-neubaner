import styled from "@emotion/styled";
import { animated, useSpring, useTrail } from "@react-spring/web";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { MdClose } from "react-icons/md";
import Logo from "../../assets/logo";
import AutoSpring from "../auto_spring";
import Flex from "../flex";
import Icon from "../icon";
import Link from "../link";
import Text from "../text";

const DrawerContainer = styled(animated.div)(() => ({
    position: 'fixed',
    height: '100%', 
    width: '0%',
    top: '0', 
    right: '0',
    zIndex: 13,
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderLeft: 'none',
    '&.open':{
        borderLeft: '0.5px rgba(255,255,255,0.2) solid',
    },
    '& > *': {
        display: 'none',
    },
    '&.open > *': {
        display: 'block'
    }
}));

const DrawerInner = styled.div({
    height: '100%', 
    padding: '20px'
});

export default function Drawer(props: {open: boolean, onClose: () => void}){

    const common = useTranslation('common');
    const sections: {label: string, to: string}[] = common.t<any, any>('sections');


    const drawerSpring = useSpring({
        width: props.open ? '70%' : '0%',
        config: {duration: 400},
    });
    const contentSprings = useTrail(sections.length + 2, {
        opacity: props.open ? 1 : 0,
        y: props.open ? 0 : 20,
        delay: props.open ? 600 : 0,
        config: {duration: 300},
    })

    return (
        <DrawerContainer className={props.open ? 'open' : ''} style={drawerSpring}>
            <DrawerInner>
                <Flex style={{height: '100%'}} direction='column' align="center" justify="center" gap="20px">
                    
                    <AutoSpring style={{...contentSprings[0], display: 'flex', justifyContent: 'center'}}>
                        <Logo width='170px'/>
                    </AutoSpring>
                    <Flex align="center" justify="center" direction="column" gap="10px">
                        {sections.map((item, i) => (
                            <AutoSpring style={contentSprings[i+1]} key={item.to}>
                                <Link onClick={props.onClose} to={item.to} color="primary" key={item.to}>
                                    <Text size="xLarge" color="inherit">
                                        {item.label}
                                    </Text>
                                </Link>
                            </AutoSpring>
                        ))}    
                        <AutoSpring style={contentSprings[sections.length]}>
                            <Icon color="primary" size={'3rem'} onClick={props.onClose}>
                                <MdClose/>
                            </Icon>
                        </AutoSpring>
                    </Flex>
                </Flex>
            </DrawerInner>
        </DrawerContainer>
    )
}