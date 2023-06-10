import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useMemo } from "react";
import pSBC from 'shade-blend-color';
import Container from "../../components/container";
import { DynamicImg } from "../../components/dynamic_img";
import Flex from "../../components/flex";
import RichTrans from "../../components/rich_trans";
import StackItem from "../../components/stack_item";
import Text from "../../components/text";
import Title from "../../components/title";

const StackList = styled(Flex)({
    gap: "20px",
    alignItems: "flex-start",
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
        flex: '0 200px'
    },
});

export default function Stack(props: {bgcolor: ColorType}){
    const stack = useTranslation('stack');
    const stackList: {level: string, name: string, description: string, image: string}[] = stack.t<any, any>('list');
    const theme = useTheme();
    const levelColor: {[k: string]: string} = useMemo(() => ({
        'Expert': pSBC(-0.3, theme.colors.primary)!,
        'Competent': theme.colors.primary,
        'Begginer': pSBC(0.3, theme.colors.primary)!,
    }), [theme.colors.primary]);
    return (
        <Container bgcolor={props.bgcolor} fullHeight>
            <Title>
                <RichTrans ns="stack" i18nKey="title"/>
            </Title>
            <Text as='p'>
                <RichTrans ns="stack" i18nKey="description"/>
            </Text>
            <StackList>
                {stackList.map(stack => (
                    <StackItem
                        key={stack.name}
                        name={stack.name}
                        description={stack.description}
                        level={stack.level}
                        levelColor={levelColor[stack.level] || 'primary'}
                        image={<DynamicImg width="auto" src={stack.image} alt={stack.name} style={{height: 70}}/>}
                    />
                ))}
            </StackList>
        </Container>
    )
}