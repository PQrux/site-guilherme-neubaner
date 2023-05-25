import styled from "@emotion/styled";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Container from "../../components/container";
import { DynamicImg } from "../../components/dynamic_img";
import { DynamicImgProvider } from "../../components/dynamic_img/provider";
import Flex from "../../components/flex";
import RichTrans from "../../components/rich_trans";
import StackItem from "../../components/stack_item";
import Text from "../../components/text";
import Title from "../../components/title";

const StackList = styled(Flex)({
    gap: "5px",
    alignItems: "flex-start",
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
        flex: '0 200px'
    },
});

const levelColor: {[k: string]: string} = {
    'Expert': '#061cc2',
    'Competent': 'primary',
    'Begginer': '#0ccccf'
}

export default function Stack(){
    const stack = useTranslation('stack');
    const stackList: {level: string, name: string, description: string, image: string}[] = stack.t<any, any>('list');
    return (
        <Container bgcolor="bgPrimary" fullHeight>
            <Title>
                <RichTrans ns="stack" i18nKey="title"/>
            </Title>
            <Text as='p'>
                <RichTrans ns="stack" i18nKey="description"/>
            </Text>
            <DynamicImgProvider>
                <StackList gap="20px">
                    {stackList.map(stack => (
                        <StackItem
                            key={stack.name}
                            name={stack.name}
                            description={stack.description}
                            level={stack.level}
                            levelColor={levelColor[stack.level] || 'primary'}
                            image={<DynamicImg src={stack.image} alt={stack.name} style={{height: 70}}/>}
                        />
                    ))}
                </StackList>
            </DynamicImgProvider>
        </Container>
    )
}