
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function GradientButton({ children, onClick, size = 'medium', type = 'button', className }: ButtonProps) {

  const varientClasses = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white';

  const sizeClasses  = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const baseClasses = `${varientClasses} ${sizeClasses[size]} rounded cursor-pointer ${className || ''}`;
  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}