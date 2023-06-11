import { useTranslation } from "gatsby-plugin-react-i18next";
import { IoIosCall, IoIosMail, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Icon from "../../components/icon";
import InfoItem from "../../components/info_item";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";
import Title from "../../components/title";

const contactMethods = [
    {key: 'mail', icon: <IoIosMail/>},
    {key: 'linkedin', icon: <IoLogoLinkedin/>},
    {key: 'phone', icon: <IoIosCall/>},
    {key: 'whatsapp', icon: <IoLogoWhatsapp/>},
    {key: 'github', icon: <IoLogoGithub/>},
]

export default function Contact(props: {bgcolor: ColorType}){
    
    const common = useTranslation('common');

    const socialMedia: {[key: string]: {label: string, prettyValue: string, url: string}} = common.t<any,any>('social_media');
    return (
        <Container bgcolor={props.bgcolor}>
            <Title>
                <RichTrans ns="contact" i18nKey="title"/>
            </Title>
            <Text as="p">
                <RichTrans ns="contact" i18nKey="description"/>
            </Text>
            <Flex style={{padding: '50px 0px'}} gap="50px" justify="space-between" wrap="wrap">
                {contactMethods.filter(c => socialMedia[c.key]).map(c => (
                    <InfoItem
                        key={c.key}
                        icon={<Icon size="large" color="primary">{c.icon}</Icon>}
                        label={socialMedia[c.key].label}
                        value={(
                            //@ts-ignore
                            <Text as="a" href={socialMedia[c.key].url} target="_blank" color="primary">
                                {socialMedia[c.key].prettyValue}
                            </Text>
                        )}
                    />
                ))}
            </Flex>
        </Container>
    )
}