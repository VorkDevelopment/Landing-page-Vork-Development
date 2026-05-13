// Iconos SVG profesionales reutilizables
export const Icons = {
  // Servicios
  Web: () => (
    <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
      <circle cx='12' cy='12' r='10' />
      <path d='M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
    </svg>
  ),
  
  ShoppingCart: () => (
    <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
      <circle cx='9' cy='21' r='1' />
      <circle cx='20' cy='21' r='1' />
      <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
    </svg>
  ),
  
  Smartphone: () => (
    <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
      <rect x='5' y='2' width='14' height='20' rx='2' ry='2' />
      <path d='M12 18h.01' />
    </svg>
  ),
  
  Settings: () => (
    <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
      <circle cx='12' cy='12' r='3' />
      <path d='M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24' />
    </svg>
  ),
  
  Palette: () => (
    <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
      <circle cx='13' cy='13' r='10' />
      <path d='M8 8c-2 0-2.5 3-3 5s0 3 2 3 2.5-1 3-2m0 0c2 0 2.5-3 3-5s0-3-2-3-2.5 1-3 2' />
      <circle cx='18' cy='5' r='1.5' />
    </svg>
  ),
  
  Wrench: () => (
    <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
      <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
    </svg>
  ),
  
  // Navegación y acciones
  Menu: () => (
    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
    </svg>
  ),
  
  ArrowRight: () => (
    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  ),
  
  ExternalLink: () => (
    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
    </svg>
  ),
  
  // Redes sociales
  Github: () => (
    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
    </svg>
  ),
  
  Linkedin: () => (
    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
    </svg>
  ),
  
  Twitter: () => (
    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-1 7-4a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'/>
    </svg>
  ),
};

export default Icons;
