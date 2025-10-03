import logoVite from '../../assets/vite.svg';
import { useState, useEffect } from 'react';

export default function Header() {
  const [data, setData] = useState('...');

  useEffect(() => {
    const interval = setInterval(() => {
      setData(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <nav className="header-nav">
        <div>
          <img src={logoVite} className="logo" alt="Vite logo" style={{ verticalAlign: 'middle', marginRight: '0.5em' }} />
          <strong>Vite-project</strong>
        </div>
        <strong>Время: {data}</strong>
      </nav>
    </header>
  );
}
