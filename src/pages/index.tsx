import { graphql } from "gatsby";
import Header from "../components/header";
import Seo from "../components/seo";
import SwapLang from "../components/swap_lang";
import { DynamicImgProvider } from "../contexts/dynamic_img";
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
              <Home bgcolor="bgSecondary"/>
            </section>
            <section id="about">
              <About bgcolor="bgPrimary"/>
            </section>
            <section id="stack">
              <Stack bgcolor="bgSecondary"/>
            </section>
            <section id="projects">
              <Projects bgcolor="bgPrimary"/>
            </section>
            <section id="contact">
              <Contact bgcolor="bgSecondary"/>
            </section>
            <Footer bgcolor="bgPrimary"/>
          </DynamicImgProvider>
        </RootLayout>
    )
}

export const Head = Seo;

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