import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border py-6">
        <div className="container-custom text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © 2025 Abdullah Sarfaraz. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Solution Architect & AI Innovation Leader
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/abdullah0094" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/abdullah1854" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
