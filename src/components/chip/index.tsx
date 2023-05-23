import styled from "@emotion/styled";
import Text from "../text";
import Touchable, { TouchableProps } from "../touchable";


interface ChipProps extends TouchableProps{
    children: string;
    href?: string;
}

const ChipContainer = styled(Touchable)(() => ({
    borderRadius: '20px',
    textDecoration: 'none'
}))

export default function Chip(props: ChipProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return (
        <ChipContainer {...props as any} as='a'>
            <Text size="large" align="center" color="inherit">
                {props.children}
            </Text>
        </ChipContainer>
    )
}