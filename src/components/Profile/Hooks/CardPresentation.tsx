import { ReactNode } from 'react';

interface CardPresentationProps {
  title?: string;
  subtitle?: string;
  content?: string;
  bgColor?: string;
  textColor?: string;
  titleTextColor?: string;  // Nuevo prop para color de título
  contentTextColor?: string; // Nuevo prop para color de contenido
  image?: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
}

const CardPresentation = ({
  title,
  subtitle,
  content,
  bgColor = 'bg-white',
  titleTextColor = 'text-gray-800',  // Valor por defecto
  contentTextColor = 'text-gray-800', // Valor por defecto
  image,
  imageAlt,
  className = '',
  children
}: CardPresentationProps) => {
  if (image) {
    return (
      <div className={`${bgColor}  ${className}`}>
        <div className="h-64 w-full relative overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover object-center"
          />
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${bgColor} p-8 ${className}`}>
      {title && (
        <h2 className={`${titleTextColor} text-3xl font-serif mb-4`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <span className="text-3xl font-script">
          {subtitle}
        </span>
      )}
      {content && (
        <p className={`${contentTextColor} text-lg`}>
          {content}
        </p>
      )}
      {children}
    </div>
  );
};

export default CardPresentation;
