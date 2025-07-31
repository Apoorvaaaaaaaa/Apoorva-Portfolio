// ✅ Import correctly
import MyComponent from '../components/MyComponent';

// Also import other components you're using
import { ScrollProgress } from '../components/magicui/scroll-progress';
import {SmoothCursor } from '../components/ui/smooth-cursor';
import {Header} from '../components/Header';
import {HeroSection} from '../components/Hero';
import {TapeSection} from '../components/Tape';
import {AboutSection} from '../components/About';
import {TechSection} from '../components/Tech';
import Approach from "../components/Approach"; 
import {Projects}from '../components/Projects';
import {ContactSection} from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <SmoothCursor />
      <Header />
      <div id="hero"><HeroSection /></div>
      <MyComponent />
      <TapeSection />
      <div id="about"><AboutSection /></div>
      <TechSection />
      <Approach />
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
}
