import { Trans, TransProps } from "gatsby-plugin-react-i18next";
import Em from "../em";

/**
 * Translation component with text formatting resources.
 * 
 * <1></1> -> Emphasis
 * 
 * <2></2> -> Bold
 * 
 * <3></3> -> Underline
 */
export default function RichTrans(props: TransProps<any, string>){
    return (
        <Trans {...props}>
            <Em>&#160;</Em>
            <b>&#160;</b>
            <u>&#160;</u>
        </Trans>
    )
}