import { graphql } from "gatsby";
import Header from "../components/header";
import SwapLang from "../components/swap_lang";
import RootLayout from "../layouts/root_layout";
import About from "../sections/about";
import Home from "../sections/home";
import Projects from "../sections/projects";
import Stack from "../sections/stack";

export default function Index(){
    return (
        <RootLayout>
            <Header/>
            <SwapLang/>
            <section id="home">
              <Home/>
            </section>
            <section id="about">
              <About/>
            </section>
            <section id="stack">
              <Stack/>
            </section>
            <section id="projects">
              <Projects/>
            </section>
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