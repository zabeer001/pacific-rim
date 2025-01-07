/* eslint-disable react/prop-types */

interface ProductCardProps {
  image: string;
  name: string;
  price: number; // Update to number type
}

function ProductCard({ image, name, price }: ProductCardProps) {

  // Fallback image handler in case the image fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'path/to/fallback-image.jpg'; // Use a placeholder or fallback image URL
  };

  return (
    <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full mb-4">
      <img
        loading="lazy"
        src={image}
        alt={`Image of ${name}`}
        className="object-contain shrink-0 self-stretch my-auto w-20 rounded-lg aspect-[1.54]"
        onError={handleImageError} // Fallback handler
      />
      <div className="flex flex-1 shrink gap-10 justify-between items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="w-60 text-green-800 overflow-hidden text-ellipsis whitespace-nowrap" title={name}>
          {name}
        </div>
        <div className="text-neutral-900">{`₿${price.toFixed(2)}`}</div> {/* Display the price with two decimal places */}
      </div>
    </div>
  );
}

export default ProductCard;
