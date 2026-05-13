import Button from './Button';

export default function HeroSection() {
  return (
    <section id='hero' className='min-h-screen bg-slate-950 flex items-center justify-center pt-20 overflow-hidden relative'>
      {/* Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10' style={{ animation: 'blob 7s infinite' }}></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10' style={{ animation: 'blob 7s infinite 2s' }}></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 py-20 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8 animate-fade-in'>
            <div>
              <div className='inline-block mb-4 px-4 py-2 bg-slate-800 rounded-full border border-slate-700'>
                <span className='text-primary text-sm font-semibold'>▸ Transformamos ideas en soluciones digitales</span>
              </div>
              <h1 className='text-5xl md:text-6xl font-bold text-white leading-tight'>
                Desarrollo Web Profesional
              </h1>
            </div>

            <p className='text-lg text-gray-400 leading-relaxed max-w-lg'>
              Creamos soluciones digitales innovadoras en desarrollo web, ecommerce y aplicaciones móviles. 
              Especializados en el stack MERN para entregar proyectos de calidad que generan resultados.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button variant='primary' size='lg'>
                Empezar Proyecto
              </Button>
              <Button variant='outline' size='lg'>
                Ver Portafolio
              </Button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-6 pt-8 border-t border-slate-700'>
              {[
                { number: '50+', label: 'Proyectos Completados' },
                { number: '99%', label: 'Satisfacción de Clientes' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className='text-3xl font-bold text-primary'>
                    {stat.number}
                  </div>
                  <div className='text-gray-400 text-sm'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className='relative h-96 md:h-full min-h-[500px]'>
            <div className='absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-6 space-y-3 overflow-hidden'>
              <div className='flex gap-2'>
                <div className='w-3 h-3 rounded-full bg-red-500'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
              </div>
              <div className='space-y-2 font-mono text-sm'>
                <div className='text-green-400'>{'> const project = buildWeb()'}</div>
                <div className='text-blue-400'>{'const features = ['}</div>
                <div className='text-gray-300 ml-4'>{'React, MongoDB, Express,'}</div>
                <div className='text-gray-300 ml-4'>{'Node.js, Responsive Design'}</div>
                <div className='text-blue-400'>{'];'}</div>
                <div className='text-green-400'>{'> return successfulProject()'}</div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className='absolute -top-6 -right-6 bg-slate-800 rounded-lg p-4 border border-slate-700 shadow-lg' style={{ animation: 'bounce-custom 2s infinite' }}>
              <div className='text-2xl text-primary'>★</div>
            </div>
            <div className='absolute -bottom-6 -left-6 bg-slate-800 rounded-lg p-4 border border-slate-700 shadow-lg' style={{ animation: 'bounce-custom 2s infinite 1s' }}>
              <div className='text-2xl text-primary'>◆</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
