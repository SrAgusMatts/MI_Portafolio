import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';

export default function TerminalView({ onExit }) {
  const { data } = useLanguage();
  const { profile, skills, projects } = data;

  const [history, setHistory] = useState([
    { type: 'system', content: 'WELCOME TO AGUSTIN_OS V3.0 (MULTI-LANG KERNEL)' },
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
          response = [`NAME: ${profile.name}`, `ROLE: ${profile.role}`, `BIO: ${profile.summary}`];
          break;
        case 'skills':
          response = [
            '--- ESTABLISHED ---', ...skills.established.map(s => `> ${s}`),
            '--- LEARNING ---', ...skills.learning.map(s => `? ${s}`)
          ];
          break;
        case 'projects':
          response = projects.map(p => `[${p.title}] - ${p.description}`);
          break;
        case 'contact':
          response = [`GITHUB: ${profile.github}`, `LINKEDIN: ${profile.linkedin}`];
          break;
        case 'clear':
          setHistory([]); setInput(''); return;
        case 'gui':
        case 'exit':
          onExit(); return;
        case '': break;
        default:
          response = [`Command not found: "${cmd}".`];
      }

      if (response.length > 0) {
        response.forEach(line => newHistory.push({ type: 'system', content: line }));
      }
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div onClick={keepFocus} style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#050505', color: '#0f0', fontFamily: "'VT323', monospace", fontSize: '1.2rem', padding: '2rem', overflowY: 'auto', zIndex: 9999}}>
      <div className="scanlines"></div>
      {history.map((line, i) => (
        <div key={i} style={{ marginBottom: '5px', color: line.type === 'user' ? '#fff' : '#0f0' }}>
          {line.type === 'user' ? '> ' : ''}{line.content}
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>user@portfolio:~$</span>
        <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCommand} autoFocus style={{background: 'transparent', border: 'none', color: '#fff', fontFamily: 'inherit', fontSize: 'inherit', outline: 'none', flex: 1}} />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}