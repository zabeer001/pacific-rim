import React from 'react';
import CreditCardForm from './CreditCardForm';

interface PaymentOptionProps {
  name: string;
  selected: boolean;
  images?: string[]; // Optional array of image URLs
  image?: string; // Optional single image URL
  isFirst: boolean; // Add the isFirst prop here
  onSelect: () => void; // Function type for onSelect
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ name, selected, images, image, onSelect }) => {
  const borderColor = selected ? 'border-green-800' : 'border-zinc-300';
  const textColor = selected ? 'text-green-800' : 'text-black';

  // Helper function for image fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'path/to/fallback/image'; // specify a fallback image path here
  };

  return (
    <div>
      <label
        className={`flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid ${borderColor} cursor-pointer 
        ${selected ? 'bg-green-100' : ''} mt-2`}
        onClick={onSelect}
      >
        <div className="flex gap-3 items-center my-auto">
          <div className="relative">
            <input
              type="radio"
              checked={selected}
              className="sr-only"
              onChange={onSelect}
              aria-label={`Select ${name} payment option`}
            />
            <div className={`w-5 h-5 border-2 rounded-full cursor-pointer ${selected ? 'border-green-800' : 'border-zinc-300'}`}>
              <div className={`absolute inset-0 rounded-full transition-all ${selected ? 'scale-50 bg-green-800' : 'scale-0'}`}></div>
            </div>
          </div>
          <div className={`text-base ${textColor}`}>{name}</div>
        </div>
        <div className="flex gap-2">
          {images && images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="payment icon"
                className="w-[42px]"
                onError={handleImageError}
              />
            ))
          ) : (
            image && (
              <img
                src={image}
                alt="payment icon"
                className="w-[66px]"
                onError={handleImageError}
              />
            )
          )}
        </div>
      </label>

      {name === 'Credit Card' && selected && (
        <div className="w-full mt-4">
          <CreditCardForm />
        </div>
      )}
    </div>
  );
}

export default PaymentOption;
