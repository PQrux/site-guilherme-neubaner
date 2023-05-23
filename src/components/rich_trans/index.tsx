import { Trans, TransProps } from "gatsby-plugin-react-i18next";
import Em from "../em";

export default function RichTrans(props: TransProps<any, string>){
    return (
        <Trans {...props}>
            .<Em/>.<b/>.
        </Trans>
    )
}