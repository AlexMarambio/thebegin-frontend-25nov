import { Product, Timer } from '../../data/Product';

export const FeaturedProduct = ({ product, timer }: { product: Product; timer: Timer }) => {
  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-gray-100 p-2 rounded">
      <div className="text-xl font-bold text-[#8B4513]">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-lg shadow-md">
      <div className="md:w-1/2">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-serif text-[#8B4513]">{product.name}</h2>
        <p className="text-gray-600 font-light">{product.description}</p>
        {product.isLimited && (
          <p className="text-[#B25D43] font-semibold">¡Edición Limitada!</p>
        )}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-[#B25D43]">USD {product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through">USD {product.originalPrice}</span>
          )}
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          <TimeBox value={timer.days} label="días" />
          <TimeBox value={timer.hours} label="horas" />
          <TimeBox value={timer.minutes} label="min" />
          <TimeBox value={timer.seconds} label="seg" />
        </div>
        <button className="w-full bg-[#B25D43] text-white py-3 rounded-md hover:bg-[#8B4513] transition-colors duration-300">
          Agregar al carro
        </button>
      </div>
    </div>
  );
};