import { graphql } from "gatsby";
import ColorSwitcher from "../components/color_switcher";
import ColorSwitcherItem from "../components/color_switcher_item";
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
import DarkTheme from "../themes/dark";

export default function Index(){
    return (
        <RootLayout>
          <DynamicImgProvider>
            <ColorSwitcher delay={200} defaultColor={DarkTheme.colors.primary}>
              <Header/>
              <SwapLang/>
              <section id="home">
                <Home bgcolor="bgSecondary"/>
              </section>
              <ColorSwitcherItem themeSwitch={0}/>
              <section id="about">
                <About bgcolor="bgPrimary"/>
              </section>
              <ColorSwitcherItem themeSwitch={1}/>
              <section id="stack">
                <Stack bgcolor="bgSecondary"/>
              </section>
              <ColorSwitcherItem themeSwitch={2}/>
              <section id="projects">
                <Projects bgcolor="bgPrimary"/>
              </section>
              <ColorSwitcherItem color={DarkTheme.colors.primary}/>
              <section id="contact">
                <Contact bgcolor="bgSecondary"/>
              </section>
              <Footer bgcolor="bgPrimary"/>
            </ColorSwitcher>
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