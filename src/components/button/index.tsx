
import Touchable, { TouchableProps } from "../touchable";

export default function Button(props: TouchableProps){
    return (
        <Touchable as={"button"} {...props}/>
    )
}