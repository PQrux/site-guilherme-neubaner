import Logo from "../../assets/logo.svg";
import Container from "../../components/container";
import Flex from "../../components/flex";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";

export default function Footer(props: {bgcolor: ColorType}){
    return (
        <Container bgcolor={props.bgcolor}>
            <Flex direction="column" align="center" style={{padding: 20}} gap="20px">
                <Logo style={{maxWidth: 150}}/>
                <Text size="large">
                    <RichTrans ns="common" i18nKey="sitename"/>
                </Text>
                <Text color="subText">
                    &#169; {new Date().getFullYear()}. <RichTrans ns="common" i18nKey="copyright"/>
                </Text>
            </Flex>
        </Container>
    )
}