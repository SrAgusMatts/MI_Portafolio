import React from 'react';
import { FaTerminal, FaEye } from 'react-icons/fa'; 
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function ModeSwitcher({ currentMode, toggleMode }) {
  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      background: 'rgba(0, 20, 0, 0.8)',
      padding: '10px',
      border: '1px solid #0f0',
      borderRadius: '8px'
    }}>
      <div style={{ fontSize: '0.8rem', color: '#0f0', textAlign: 'center', marginBottom: '5px' }}>
        MODE
      </div>
      
      <button 
        onClick={() => currentMode !== 'GUI' && toggleMode('GUI')}
        style={{
          background: currentMode === 'GUI' ? '#0f0' : 'transparent',
          color: currentMode === 'GUI' ? '#000' : '#0f0',
          border: '1px solid #0f0',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: '0.3s'
        }}
        title="Modo Visual (Normal)"
      >
        VISUAL
      </button>

      <button 
        onClick={() => currentMode !== 'TERMINAL' && toggleMode('TERMINAL')}
        style={{
          background: currentMode === 'TERMINAL' ? '#0f0' : 'transparent',
          color: currentMode === 'TERMINAL' ? '#000' : '#0f0',
          border: '1px solid #0f0',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: '0.3s'
        }}
        title="Modo Desarrollador (Terminal)"
      >
        DEV_CLI
      </button>
      <LanguageSwitcher />
    </div>
  );
}