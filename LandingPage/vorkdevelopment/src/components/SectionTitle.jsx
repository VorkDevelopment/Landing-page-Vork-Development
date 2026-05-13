export default function SectionTitle({ title, description, centered = true }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        {title}
      </h2>
      {description && (
        <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
          {description}
        </p>
      )}
    </div>
  );
}
