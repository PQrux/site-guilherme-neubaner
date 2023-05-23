import { graphql } from "gatsby";
import Header from "../components/header";
import RootLayout from "../layouts/root_layout";
import About from "../sections/about";
import Home from "../sections/home";

export default function Index(){
    return (
        <RootLayout>   
            <Header/>
            <Home/>
            <About/>
        </RootLayout>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;