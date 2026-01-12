import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, PROFILE, KnowSkills, InProccess } from '../data';

export default function TerminalView({ onExit }) {
  const [history, setHistory] = useState([
    { type: 'system', content: 'WELCOME TO AGUSTIN_OS V2.0' },
    { type: 'system', content: 'TYPE "help" TO SEE AVAILABLE COMMANDS.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const keepFocus = () => inputRef.current?.focus();

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'user', content: cmd }];

      let response = [];

      switch (cmd) {
        case 'help':
          response = [
            'AVAILABLE COMMANDS:',
            '- about     : Who am I?',
            '- skills    : Tech stack analysis',
            '- projects  : List of deployed projects',
            '- contact   : Communication channels',
            '- clear     : Clear terminal screen',
            '- gui       : Return to Graphical User Interface',
          ];
          break;
        
        case 'about':
          response = [
            `NAME: ${PROFILE.name}`,
            `ROLE: ${PROFILE.role}`,
            `BIO: ${PROFILE.summary}`
          ];
          break;

        case 'skills':
          response = [
            '--- ESTABLISHED SKILLS ---',
            ...KnowSkills.map(s => `> ${s}`),
            '',
            '--- LEARNING ---',
            ...InProccess.map(s => `? ${s}`)
          ];
          break;

        case 'projects':
          response = PROJECTS.map(p => 
            `[${p.title}] - ${p.description} (Link: ${p.link})`
          );
          break;

        case 'contact':
          response = [
            `GITHUB: ${PROFILE.github}`,
            `LINKEDIN: ${PROFILE.linkedin}`,
            'Use the GUI mode to send direct emails.'
          ];
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case 'gui':
        case 'exit':
          onExit();
          return;

        case '':
          break;

        default:
          response = [`Command not found: "${cmd}". Type "help".`];
      }

      if (response.length > 0) {
        response.forEach(line => {
          newHistory.push({ type: 'system', content: line });
        });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div 
      onClick={keepFocus}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: '#050505', color: '#0f0', fontFamily: "'VT323', monospace",
        fontSize: '1.2rem', padding: '2rem', overflowY: 'auto', zIndex: 9999
      }}
    >
      <div className="scanlines"></div>
      
      {/* Historial */}
      {history.map((line, i) => (
        <div key={i} style={{ marginBottom: '5px', color: line.type === 'user' ? '#fff' : '#0f0' }}>
          {line.type === 'user' ? '> ' : ''}{line.content}
        </div>
      ))}

      {/* Input Activo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>user@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
          style={{
            background: 'transparent', border: 'none', color: '#fff',
            fontFamily: 'inherit', fontSize: 'inherit', outline: 'none', flex: 1
          }}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}