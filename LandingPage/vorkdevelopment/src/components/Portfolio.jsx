import { useState } from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Portfolio() {
  const [filter, setFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'DayReady',
      category: 'ecommerce',
      image: '/src/assets/dayreadyweb.png',
      description: 'Plataforma ecommerce con carrito avanzado, múltiples métodos de pago e integración con Stripe',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#',
    },
    {
      id: 2,
      title: 'App movil de pedidos para "Taqueria El Corral"',
      category: 'mobile',
      image: '/src/assets/taqueriamovil.png',
      description: 'Aplicación móvil para gestión de proyectos con sincronización en tiempo real',
      tech: ['React Native', 'MongoDB', 'Node.js', 'Express'],
      link: '#',
    },
    {
      id: 3,
      title: 'Sistema de Gestion de "Taqueria El Corral"',
      category: 'ecommerce',
      image: '/src/assets/taqueriaElCorral.png',
      description: 'Sistema de análisis en tiempo real con gráficos interactivos y reportes automáticos',
      tech: ['React', 'Chart.js', 'Express', 'MongoDB', 'Node.js'],
      link: '#',
    },
    {
      id: 4,
      title: 'Sistema de Gestión de Gimnasio Smart',
      category: 'ecommerce',
      image: '/src/assets/sysgym.png',
      description: 'Plataforma de facturación digital con gestión de clientes y reportes financieros',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    }
  ];

  const categories = [
    { value: 'todos', label: 'Todos' },
    { value: 'web', label: 'Web' },
    { value: 'ecommerce', label: 'Ecommerce' },
    { value: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id='portfolio' className='py-20 bg-slate-950 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -left-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
        <div className='absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <SectionTitle 
          title='Nuestro Portafolio'
          description='Proyectos de éxito que demuestran nuestra experiencia y compromiso con la calidad'
        />

        {/* Filter Buttons */}
        <div className='flex justify-center gap-4 mb-12 flex-wrap'>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === cat.value
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-gray-300 hover:text-primary border border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <Card key={project.id} className='group overflow-hidden flex flex-col'>
              {/* Image Area */}
              <div className='h-48 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-all duration-300 overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className='text-4xl text-primary'>{project.icon}</div>
              </div>

              {/* Content */}
              <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-400 text-sm mb-4 flex-grow'>{project.description}</p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className='px-2 py-1 bg-slate-700 text-xs text-primary rounded border border-primary/30'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Button 
                variant='secondary' 
                size='sm' 
                className='w-full'
              >
                Ver Proyecto
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
