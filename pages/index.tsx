import { motion } from "framer-motion";
import Button from "../components/Button";
import Container from "../components/Container";
import Footer from "../components/Footer";
import GradientHighlightText from "../components/GradientHighlightText";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="flex items-center pt-8">
        <Container className="">
          <div className="flex items-center justify-center flex-col max-w-[600px] mb-44 mx-auto">
            <motion.h1
              animate={{ opacity: 1, y: -10 }}
              initial={{ opacity: 0, y: 0 }}
              className="text-6xl font-extrabold text-slate-900 mb-8 text-center"
            >
              Der offizielle{" "}
              <GradientHighlightText>Kirchenaustritt</GradientHighlightText> in
              der Schweiz ist{" "}
              <GradientHighlightText>gratis</GradientHighlightText>.
            </motion.h1>
            <p className="text-xl mb-1 text-center font-bold">
              Lassen Sie sich nichts anderes erzählen.
            </p>
            <p className="mb-4 text-xl text-center">
              Egal ob Sie Kirchensteuern sparen möchten oder einen anderen Grund
              haben, wir unterstützen Sie mit den nötigen Informationen und
              einem Austrittsformular und zwar 100% gratis.
            </p>
            <Button>Kostenloses Austrittsformular generieren</Button>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-8 text-center">
              Wie funktioniert der Austritt aus der Kirche?
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center flex-col">
                <span className="text-9xl font-extrabold">
                  <GradientHighlightText>1</GradientHighlightText>
                </span>
                <p className="text-xl text-center">
                  Formular ausfüllen, ausdrucken und unterschreiben
                </p>
              </div>
              <div className="flex items-center flex-col">
                <span className="text-9xl font-extrabold">
                  <GradientHighlightText>2</GradientHighlightText>
                </span>
                <p className="text-xl text-center">
                  Unterschriebenes Formular per eingeschriebenen Brief an die
                  Kirche senden
                </p>
              </div>
              <div className="flex items-center flex-col">
                <span className="text-9xl font-extrabold">
                  <GradientHighlightText>3</GradientHighlightText>
                </span>
                <p className="text-xl text-center">
                  Nach 6-8 Wochen erhalten Sie eine Bestätigung von der Kirche
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}
