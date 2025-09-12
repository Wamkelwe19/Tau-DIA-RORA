import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { DetailedHistory } from "./components/DetailedHistory";
import { LeaderQuotes } from "./components/LeaderQuotes";
import { Leadership } from "./components/Leadership";
import { Structure } from "./components/Structure";
import { Membership } from "./components/Membership";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DetailedHistory />
      <LeaderQuotes />
      <Leadership />
      <Structure />
      <Membership />
      <Footer />
    </div>
  );
}