import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectArchive from "./components/ProjectArchive";
import TerminalView from "./components/TerminalView";
import ModeSwitcher from "./components/ModeSwitcher";

import useRevealOnScroll from "./hooks/useRevealOnScroll";

function App() {
  const [booting, setBooting] = useState(true);
  const [bootText, setBootText] = useState([]);
  
  const [appMode, setAppMode] = useState('GUI');
  
  const [guiView, setGuiView] = useState('home'); 

  useEffect(() => {
    const lines = ["INITIALIZING...", "LOADING KERNEL...", "ACCESS GRANTED."];
    let delay = 0;
    lines.forEach((line, i) => {
      delay += 400;
      setTimeout(() => {
        setBootText(p => [...p, line]);
        if (i === lines.length - 1) setTimeout(() => setBooting(false), 800);
      }, delay);
    });
  }, []);

  useRevealOnScroll(".section, .hero-inner");

  if (booting) {
    return (
      <div className="boot-screen text-green">
        {bootText.map((l, i) => <div key={i}>{`> ${l}`}</div>)}
      </div>
    );
  }

  return (
    <div className="app">
      <div className="scanlines"></div>
      <div className="glow-overlay"></div>

      <ModeSwitcher 
        currentMode={appMode} 
        toggleMode={setAppMode} 
      />
      
      {appMode === 'TERMINAL' ? (
        <TerminalView onExit={() => setAppMode('GUI')} />
      ) : (
        <>
          {guiView === 'archive' ? (
             <ProjectArchive onBack={() => setGuiView('home')} />
          ) : (
            <>
              <Header />
              <main id="main">
                <Hero />
                <About />
                <Projects onViewAll={() => setGuiView('archive')} />
                <Skills />
                <Experience />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;