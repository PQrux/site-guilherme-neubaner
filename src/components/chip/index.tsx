import styled from "@emotion/styled";
import Text from "../text";
import Touchable, { TouchableProps } from "../touchable";


interface ChipProps extends TouchableProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
    children: string | any;
    color?: ColorType;
    href?: string;
}

const ChipContainer = styled(Touchable)(() => ({
    borderRadius: '20px',
    textDecoration: 'none'
}))

export default function Chip(props: ChipProps){
    return (
        <ChipContainer {...props as any} as='a'>
            <Text size="normal" align="center" color="inherit">
                {props.children}
            </Text>
        </ChipContainer>
    )
}