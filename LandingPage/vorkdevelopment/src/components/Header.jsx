import { useState } from 'react';
import LogoOscuro from '../assets/LogoOscuroSolido.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Equipo', href: '#team' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className='fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800'>
      <nav className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <img src={LogoOscuro} alt='Vork Development' className='h-10 w-auto' />
          <span className='text-lg font-bold text-white hidden md:block'>
            Vork Development
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='text-gray-300 hover:text-primary transition-colors duration-300 font-medium'
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className='hidden md:block'>
          <a
            href='#contact'
            className='bg-primary hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300'
          >
            Contactar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-primary'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 md:hidden'>
            <div className='flex flex-col p-6 gap-4'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='text-gray-300 hover:text-primary transition-colors duration-300 font-medium'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href='#contact'
                className='bg-primary hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300'
                onClick={() => setIsOpen(false)}
              >
                Contactar
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
