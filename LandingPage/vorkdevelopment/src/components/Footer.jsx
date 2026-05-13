export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    github: 'https://github.com/VorkDevelopment',
    linkedin: 'https://www.linkedin.com/in/vork-development-9927b840a/',
    instagram: 'https://www.instagram.com/vork.development?igsh=cm4wb3VwbmdrZ3Zs',
  };

  return (
    <footer className='bg-slate-950 border-t border-slate-800 py-12 mt-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>V</span>
              </div>
              <span className='text-lg font-bold text-white'>
                Vork Development
              </span>
            </div>
            <p className='text-gray-400 text-sm'>
              Soluciones de desarrollo web, ecommerce y móvil con stack MERN
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Enlaces Rápidos</h4>
            <ul className='space-y-2'>
              {['Inicio', 'Servicios', 'Portafolio', 'Equipo'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className='text-gray-400 hover:text-primary transition-colors duration-300 text-sm'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Síguenos</h4>
            <div className='flex gap-4'>
              <a
                href={socialLinks.github}
                className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
              >
                G
              </a>
              <a
                href={socialLinks.linkedin}
                className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
              >
                L
              </a>
              <a
                href={socialLinks.instagram}
                className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
              >
                I
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-slate-800 pt-8'>
          <p className='text-center text-gray-500 text-sm'>
            © {currentYear} Vork Development. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
