import About from "../Landing/About";
import Courses from "../Landing/Courses";
import Features from "../Landing/Features";
import Footer from "../Landing/Footer";
import Hero from "../Landing/Hero";
import News from "../Landing/News";
import Partner from "../Landing/Partner";

export default function Landing() {
  return (
    <>
      <Hero />
      <Partner />
      <main className="">
        <Features />
        <About />
        <News />
        <Courses />
      </main>
      <Footer />
    </>
  );
}
