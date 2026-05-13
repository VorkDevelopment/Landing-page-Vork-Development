import Card from './Card';
import SectionTitle from './SectionTitle';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Salvador Martinez',
      role: 'Full Stack Developer & Co-founder',
      specialty: 'Backend & Database Architecture',
      initials: 'SM',
      skills: ['Node.js', 'MongoDB', 'Express', 'API Design', 'DevOps'],
      bio: 'Especialista en arquitectura de sistemas escalables y optimización de bases de datos. Apasionado por crear soluciones robustas.',
      social: {
        linkedin: '#',
        github: 'https://github.com/EduxDeveloper',
      },
    },
    {
      id: 2,
      name: 'Javier Iraheta',
      role: 'Frontend Developer & Co-founder',
      specialty: 'UI/UX & Frontend Architecture',
      initials: 'JI',
      skills: ['React', 'Tailwind CSS', 'UI Design', 'Performance', 'Mobile Dev'],
      bio: 'Creador de interfaces modernas y responsivas. Experto en crear experiencias de usuario excepcionales.',
      social: {
        linkedin: 'https://www.linkedin.com/in/javier-iraheta-2a1b273a9/',
        github: 'https://github.com/IrahetaISaDeveloper',
      },
    },
  ];

  return (
    <section id='team' className='py-20 bg-slate-900 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
          <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <SectionTitle 
          title='Nuestro Equipo'
          description='Profesionales apasionados por crear soluciones tecnológicas innovadoras'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {teamMembers.map((member) => (
            <Card key={member.id} className='flex flex-col h-full'>
              {/* Avatar & Basic Info */}
              <div className='mb-6'>
                <div className='w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mb-4 font-bold text-white text-2xl'>
                  {member.initials}
                </div>
                <h3 className='text-2xl font-bold text-white'>{member.name}</h3>
                <p className='text-primary font-semibold'>{member.role}</p>
                <p className='text-gray-400 text-sm'>{member.specialty}</p>
              </div>

              {/* Bio */}
              <p className='text-gray-400 mb-6 flex-grow'>{member.bio}</p>

              {/* Skills */}
              <div>
                <p className='text-white font-semibold mb-3'>Habilidades:</p>
                <div className='flex flex-wrap gap-2'>
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className='px-3 py-1 bg-slate-800 text-primary text-xs rounded-full border border-slate-700'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className='flex gap-3 mt-6 pt-6 border-t border-slate-700'>
                <a
                  href={member.social.linkedin}
                  className='flex-1 py-2 bg-slate-700/50 hover:bg-primary hover:text-white rounded-lg text-center text-sm font-semibold transition-all duration-300'
                >
                  LinkedIn
                </a>
                <a
                  href={member.social.github}
                  className='flex-1 py-2 bg-slate-700/50 hover:bg-primary hover:text-white rounded-lg text-center text-sm font-semibold transition-all duration-300'
                >
                  GitHub
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-bold text-white mb-4'>¿Necesitas más equipo para tu proyecto?</h3>
          <p className='text-gray-400 mb-6'>Contratamos talento especializado según las necesidades de cada cliente</p>
          <button className='bg-primary hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300'>
            Consultanos
          </button>
        </div>
      </div>
    </section>
  );
}
