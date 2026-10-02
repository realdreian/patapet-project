import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro (dia)' : 'Ativar tema escuro acolhedor (noite)'}
      title={isDark ? 'Tema Claro' : 'Tema Escuro (Warm Dark)'}
      className={`p-2.5 rounded-full border transition-all duration-200 focus-visible:outline-caramel cursor-pointer ${
        isDark
          ? 'bg-dark-elevated text-caramel-400 border-dark-border hover:bg-dark-border hover:text-cream shadow-xs'
          : 'bg-sand/35 text-brown border-sand/70 hover:bg-sand/60 hover:text-caramel shadow-xs'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-caramel-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-brown transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
