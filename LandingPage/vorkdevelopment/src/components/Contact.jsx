import { useState } from 'react';
import Button from './Button';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form Data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', project: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '✉',
      label: 'Email',
      value: 'vork.development@gmail.com',
      link: 'mailto:vork.development@gmail.com',
    },
    {
      icon: '☎',
      label: 'Teléfono',
      value: '+503 7915-1811',
      link: 'tel:+503 7915-1811',
    },
    {
      icon: '◆',
      label: 'Ubicación',
      value: 'El Salvador',
      link: '#',
    },
  ];

  return (
    <section id='contact' className='py-20 bg-slate-950 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
        <div className='absolute -top-40 -left-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <SectionTitle 
          title='Ponte en Contacto'
          description='¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas'
        />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12'>
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center group'
            >
              <div className='text-4xl mb-4'>{info.icon}</div>
              <h4 className='text-white font-semibold mb-2'>{info.label}</h4>
              <p className='text-primary group-hover:text-secondary transition-colors duration-300'>
                {info.value}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className='max-w-2xl mx-auto bg-slate-800 rounded-2xl border border-slate-700 p-8 md:p-12'>
          {submitted ? (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4 text-primary'>✓</div>
              <h3 className='text-2xl font-bold text-white mb-2'>¡Mensaje Enviado!</h3>
              <p className='text-gray-400'>
                Gracias por contactarnos. Nos pondremos en contacto pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name & Email Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-white font-semibold mb-2'>Nombre</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300'
                    placeholder='Tu nombre'
                  />
                </div>
                <div>
                  <label className='block text-white font-semibold mb-2'>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300'
                    placeholder='tu@email.com'
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className='block text-white font-semibold mb-2'>Empresa (Opcional)</label>
                <input
                  type='text'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  className='w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300'
                  placeholder='Nombre de tu empresa'
                />
              </div>

              {/* Project Type */}
              <div>
                <label className='block text-white font-semibold mb-2'>Tipo de Proyecto</label>
                <select
                  name='project'
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className='w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300'
                >
                  <option value=''>Selecciona un tipo...</option>
                  <option value='web'>Desarrollo Web</option>
                  <option value='ecommerce'>Ecommerce</option>
                  <option value='mobile'>App Móvil</option>
                  <option value='otro'>Otro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className='block text-white font-semibold mb-2'>Mensaje</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300 resize-none'
                  placeholder='Cuéntanos sobre tu proyecto...'
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button 
                type='submit'
                variant='primary' 
                size='lg' 
                className='w-full'
              >
                Enviar Mensaje
              </Button>

              <p className='text-gray-400 text-sm text-center'>
                Responderemos en menos de 24 horas
              </p>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            {
              title: 'Respuesta Rápida',
              description: 'Nos ponemos en contacto dentro de 24 horas',
            },
            {
              title: 'Consultoría Gratuita',
              description: 'Primera consulta sin compromiso',
            },
            {
              title: 'Soporte 24/7',
              description: 'Disponibles cuando nos necesites',
            },
          ].map((item, idx) => (
            <div key={idx} className='text-center'>
              <h4 className='text-white font-semibold mb-2'>{item.title}</h4>
              <p className='text-gray-400 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
