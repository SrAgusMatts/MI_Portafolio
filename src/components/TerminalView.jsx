import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import useSound from '../hooks/useSound';

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
  const playGeneric = useSound('/sounds/key-gen.mp3');
  const playSpace = useSound('/sounds/key-space.mp3');
  const playDelete = useSound('/sounds/key-del.mp3');
  const playEnter = useSound('/sounds/key-enter.mp3');

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const keepFocus = () => inputRef.current?.focus();

  const handleSound = (e) => {
    
    if (e.repeat) return;

    if (['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) return;

    switch (e.key) {
      case ' ':
        playSpace();
        break;
      case 'Backspace':
      case 'Delete':
      case 'Escape':
        playDelete();
        break;
      case 'Enter':
        playEnter();
        break;
      default:
        if (e.key.length === 1) {
          playGeneric();
        }
    }
  };

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
        case 'sudo':
          response = [
            'PERMISSION DENIED: YOU ARE NOT THE SYSTEM ADMIN.',
            'NICE TRY, BUT THE MAGIC WORD IS NOT ENOUGH HERE.'
          ];
          break;

        case 'cat':
          response = [
            '   /\\_/\\  ',
            '  ( o.o )  < MEOW_SYSTEM_ONLINE >',
            '   > ^ <  '
          ];
          break;

        case 'ls':
        case 'dir':
          response = [
            'DIRECTORY LISTING OF /home/visitor:',
            'drwxr-xr-x  projects/',
            'drwxr-xr-x  skills/',
            '-rw-r--r--  contact_info.txt',
            '-rw-r--r--  about_me.md',
            '---',
            'HINT: Type "projects" or "skills" to open directories.'
          ];
          break;

        case 'date':
          response = [`CURRENT SYSTEM TIME: ${new Date().toString()}`];
          break;

        case 'matrix':
          response = [
            'WAKE UP, NEO...',
            'THE MATRIX HAS YOU...',
            'FOLLOW THE WHITE RABBIT.',
            '(just kidding, type "gui" to see the fancy website)'
          ];
          break;

        case 'whoami':
          response = ['YOU ARE VISITOR_USER_001', 'ACCESS LEVEL: GUEST'];
          break;
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
    <div
      onClick={keepFocus}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        background: '#050505',
        color: '#0f0',
        fontFamily: "'VT323', monospace",
        fontSize: '1.2rem',
        padding: '2rem',
        overflowY: 'auto',
        zIndex: 9999
      }}>
      <div className="scanlines"></div>
      {history.map((line, i) => (
        <div
          key={i}
          style={{
            marginBottom: '5px',
            color: line.type === 'user' ? '#fff' : '#0f0'
          }}>
          {line.type === 'user' ? '> ' : ''}{line.content}
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <span
          style={{
            marginRight: '10px'
          }}>
          user@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            handleSound(e);
            handleCommand(e);
          }}
          autoFocus
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            outline: 'none',
            flex: 1
          }} />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}