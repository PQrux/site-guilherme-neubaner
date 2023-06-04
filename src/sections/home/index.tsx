import styled from "@emotion/styled";
import { useTrail } from "@react-spring/web";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { IoIosMail, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import _AnimatedLogo from "../../assets/animated_logo";
import AnimatedMouse from "../../assets/animated_mouse";
import AutoSpring from "../../components/auto_spring";
import Button from "../../components/button";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Icon from "../../components/icon";
import Link from "../../components/link";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";

const AnimatedLogo = styled(_AnimatedLogo)(({theme}) => ({
    maxWidth: '300px',
    [theme.breakpoints.mobile_query]: {
        width: '50%',
    },
    alignSelf: 'center',
}))

const ChipContainer = styled(Flex)(({theme}) => ({
    '& > *': {
        flex: '0 120px',
        [theme.breakpoints.tablet_query]: {
            flex: '0 150px',
        }
    },
    gap: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
}))

const contactMethods = [
    {key: 'mail', color: '#f01811', icon: <IoIosMail/>},
    {key: 'linkedin', color: '#0E76A8', icon: <IoLogoLinkedin/>},
    {key: 'whatsapp', color: '#25D366', icon: <IoLogoWhatsapp/>},
    {key: 'github', color: '#8C8C8C', icon: <IoLogoGithub/>},
];

export default function Home(props: {bgcolor: ColorType}){
    const common = useTranslation('common');
    const contactLabels: {[key: string]: {label: string, prettyValue: string, url: string}} = common.t<any,any>('social_media');

    const springs = useTrail(3 + contactMethods.length, {
        from: { opacity: 0, x: -20 },
        to: { opacity: 1, x: 0 },
        delay: 1000,
        config: { duration: 2000, }
    })
    
    return (
        <Container fullHeight bgcolor={props.bgcolor}>
            <Flex direction="column" justify="space-between" gap="10px" style={{marginTop: 30, minHeight: '80vh'}}>
                <AnimatedLogo className="light"/>
                <div>
                    <AutoSpring style={springs[0]}>
                        <Text size="xxxLarge" align="center" as="h1" style={{marginBottom: 0}}>
                            <RichTrans ns="home" i18nKey="title"/>
                        </Text>
                    </AutoSpring>
                    <AutoSpring style={springs[1]}>
                        <Text align="center" size="large" as='p'>
                            <RichTrans ns="home" i18nKey="subtitle"/>
                        </Text>
                    </AutoSpring>
                </div>
                <ChipContainer style={{marginBottom: '20px'}}>
                    {contactMethods.map((method, i) => (
                        <AutoSpring 
                            component={Button} 
                            variant="outlined" 
                            key={method.key} 
                            color={method.color} 
                            onClick={() => window.open(contactLabels[method.key].url, '_blank')}
                            style={springs[i+2]}
                        >
                            <Flex align="center">
                                <Icon>
                                    {method.icon}
                                </Icon>
                                <Text color="inherit">
                                    {contactLabels[method.key].label}
                                </Text>
                            </Flex>
                        </AutoSpring>
                    ))}
                </ChipContainer>
                <AutoSpring style={springs[springs.length-1]} component={Flex} justify="center" align="center" gap="10px">
                    <AnimatedMouse/>
                    <Link to="#about" color="primary">
                        <RichTrans ns="home" i18nKey="about_button"/>
                    </Link>
                </AutoSpring>
            </Flex>
        </Container>
    )
}