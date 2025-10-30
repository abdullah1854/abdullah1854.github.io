import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border py-8">
        <div className="container-custom text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © 2025 Abdullah Sarfaraz. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Solution Architect & AI Innovation Leader
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
