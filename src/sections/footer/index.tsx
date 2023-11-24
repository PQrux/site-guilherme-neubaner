
import styled from "@emotion/styled";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Logo from "../../assets/logo";
import Container from "../../components/container";
import Flex from "../../components/flex";
import Link from "../../components/link";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";

const FooterLogo = styled(Logo)({
    maxWidth: 150,
})

export default function Footer(props: {bgcolor: ColorType}){

    const common = useTranslation('common');
    const url = common.t('source_code_url');

    return (
        <Container bgcolor={props.bgcolor}>
            <Flex direction="column" align="center" style={{padding: 20}} gap="20px">
                <FooterLogo/>
                <Text size="large" align="center">
                    <RichTrans ns="common" i18nKey="sitename"/>
                </Text>
                <Text color="subText">
                    &#169; {new Date().getFullYear()}. <RichTrans ns="common" i18nKey="copyright"/>
                </Text>
                <Link to={url} target="_blank" color="primary">
                    <RichTrans ns="common" i18nKey="source_code_label"/>
                </Link>
            </Flex>
        </Container>
    )
}