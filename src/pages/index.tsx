import { graphql } from "gatsby";
import { DynamicImgProvider } from "../components/dynamic_img/provider";
import Header from "../components/header";
import SwapLang from "../components/swap_lang";
import RootLayout from "../layouts/root_layout";
import About from "../sections/about";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
import Home from "../sections/home";
import Projects from "../sections/projects";
import Stack from "../sections/stack";

export default function Index(){
    return (
        <RootLayout>
          <DynamicImgProvider>
            <Header/>
            <SwapLang/>
            <section id="home">
              <Home bgcolor="bgPrimary"/>
            </section>
            <section id="about">
              <About bgcolor="bgSecondary"/>
            </section>
            <section id="stack">
              <Stack bgcolor="bgPrimary"/>
            </section>
            <section id="projects">
              <Projects bgcolor="bgSecondary"/>
            </section>
            <section id="contact">
              <Contact bgcolor="bgPrimary"/>
            </section>
            <Footer bgcolor="bgSecondary"/>
          </DynamicImgProvider>
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