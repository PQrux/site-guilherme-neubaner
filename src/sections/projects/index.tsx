import Container from "../../components/container";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";
import Title from "../../components/title";

export default function Projects(){
    return (
        <Container bgcolor="bgSecondary" fullHeight>
            <Title>
                <RichTrans ns="projects" i18nKey="title"/>
            </Title>
            <Text as="p">
                <RichTrans ns="projects" i18nKey="description"/>
            </Text>
        </Container>
    )
}