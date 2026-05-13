import Card from './Card';
import SectionTitle from './SectionTitle';
import Icons from './Icons';

export default function Services() {
  const services = [
    {
      icon: 'Web',
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas, rápidas y escalables con React, Node.js y MongoDB.',
      features: ['SPA\'s', 'PWA\'s', 'SEO Optimizado'],
    },
    {
      icon: 'ShoppingCart',
      title: 'Ecommerce',
      description: 'Tiendas online completas con carrito, pagos integrados y administración de inventario.',
      features: ['Pagos Online', 'Gestión Productos', 'Analytics'],
    },
    {
      icon: 'Smartphone',
      title: 'Aplicaciones Móvil',
      description: 'Apps nativas y cross-platform para iOS y Android con experiencia de usuario excepcional.',
      features: ['Native/Hybrid', 'Push Notifications', 'Offline Mode'],
    },
    {
      icon: 'Settings',
      title: 'Backend API',
      description: 'APIs REST robustas y seguras con Node.js y Express, listos para escalar.',
      features: ['Seguridad', 'Escalabilidad', 'Documentación'],
    },
    {
      icon: 'Palette',
      title: 'Diseño UI/UX',
      description: 'Interfaces intuitivas y atractivas que convierten visitantes en clientes.',
      features: ['Diseño Responsivo', 'Prototipado', 'User Testing'],
    },
    {
      icon: 'Wrench',
      title: 'Mantenimiento',
      description: 'Soporte técnico y actualizaciones constantes para que tu proyecto siempre esté óptimo.',
      features: ['Actualizaciones', 'Bug Fixes', 'Optimización'],
    },
  ];

  const iconMap = {
    Web: Icons.Web,
    ShoppingCart: Icons.ShoppingCart,
    Smartphone: Icons.Smartphone,
    Settings: Icons.Settings,
    Palette: Icons.Palette,
    Wrench: Icons.Wrench,
  };

  return (
    <section id='services' className='py-20 bg-slate-900 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/3 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <SectionTitle 
          title='Nuestros Servicios'
          description='Soluciones integrales de desarrollo con enfoque en calidad y resultados'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card key={idx}>
                <div className='text-primary mb-4'>
                  <IconComponent />
                </div>
                <h3 className='text-2xl font-bold text-white mb-3'>{service.title}</h3>
                <p className='text-gray-400 mb-6'>{service.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className='px-3 py-1 bg-slate-800 text-primary text-sm rounded-full border border-slate-700'
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
