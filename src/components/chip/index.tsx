import styled from "@emotion/styled";
import Text from "../text";
import Touchable, { TouchableProps } from "../touchable";


interface ChipProps extends TouchableProps{
    children: string | any;
    color?: ColorType;
}



const ChipContainer = styled(Touchable)<ChipProps>(({
    borderRadius: '20px',
}))

export default function Chip(props: ChipProps){
    return (
        <ChipContainer {...props}>
            <Text size={props.size} align="center" color="inherit">
                {props.children}
            </Text>
        </ChipContainer>
    )
}