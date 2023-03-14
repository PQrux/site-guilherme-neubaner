import Container from "../components/container";
import RootLayout from "../layouts/root_layout";
import Text from "../components/text";
import Em from "../components/em";
import Logo from "../images/logo.svg";
import Home from "../sections/home";
import Header from "../components/header";

export default function Index(){
    return (
        <RootLayout>
            <Header/>
            <Home/>
        </RootLayout>
    )
}