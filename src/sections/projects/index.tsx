import styled from "@emotion/styled";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Container from "../../components/container";
import { DynamicImg } from "../../components/dynamic_img";
import Flex from "../../components/flex";
import ProjectItem from "../../components/project_item";
import RichTrans from "../../components/rich_trans";
import Text from "../../components/text";
import Title from "../../components/title";

const ProjectList = styled(Flex)({
    gap: "20px",
    alignItems: "stretch",
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
        flex: '0 350px'
    },
});

export default function Projects(props: {bgcolor: ColorType}){

    const projects = useTranslation('projects');

    const projectList: {name: string, description: string, image: string, stack: string[], properties: {label: string, value: string}[]}[] = projects.t<any,any>('list');

    return (
        <Container bgcolor={props.bgcolor} fullHeight>
            <Title>
                <RichTrans ns="projects" i18nKey="title"/>
            </Title>
            <Text as="p">
                <RichTrans ns="projects" i18nKey="description"/>
            </Text>
            <ProjectList>
                {projectList.map(p => (
                    <ProjectItem
                        key={p.name}
                        title={p.name}
                        description={p.description}
                        stack={p.stack}
                        properties={p.properties}
                        image={<DynamicImg width="auto" src={p.image} alt={p.name}/>}
                    />
                ))}
            </ProjectList>
        </Container>
    )
}