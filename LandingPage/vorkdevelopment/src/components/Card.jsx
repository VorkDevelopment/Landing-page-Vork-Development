export default function Card({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) {
  return (
    <div 
      className={`
        bg-slate-800 rounded-xl p-6 
        border border-slate-700
        ${hover ? 'hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
