export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) {
  const baseStyles = 'font-roboto font-semibold rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary hover:bg-indigo-700 text-white',
    secondary: 'bg-secondary hover:bg-pink-600 text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
