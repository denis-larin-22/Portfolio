import { MatrixBackground } from "./components/ui/MatrixBackground";
import Header from "./components/Header";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { Reviews } from "./components/Reviews";
import Contacts from "./components/Contacts";
import { Hands } from "./components/ui/Hands";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div >
      <MatrixBackground />

      <div className="min-h-dvh">
        <Header />
        <Main />
      </div>
      <AboutMe />
      <Skills />
      <Works />
      <Reviews />
      <Contacts />
      <Hands />
      <Footer />
    </div >
  );
}
