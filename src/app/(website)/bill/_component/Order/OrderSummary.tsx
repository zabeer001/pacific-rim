'use client'

import { useState } from 'react';
import ProductCard from './ProductCard';
import PaymentOption from './PaymentOption';
import OrderTotal from './OrderTotal';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface PaymentOptionType {
  id: number;
  name: string;
  images?: string[];
  image?: string;
}

interface PaymentOptionProps {
  id: number;
  name: string;
  images?: string[];
  image?: string;
  isFirst: boolean; // Add the isFirst prop type
  selected: boolean;
  onSelect: () => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "American Beauty",
    price: 7000,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ccc5e223761fa5739a8bee65f2cab4ae2cc0c9a95f555ea1248946eb1fe057f?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  },
  {
    id: 2,
    name: "American Beauty",
    price: 700000,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ccc5e223761fa5739a8bee65f2cab4ae2cc0c9a95f555ea1248946eb1fe057f?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  },
  {
    id: 3,
    name: "American Beauty",
    price: 7000,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ccc5e223761fa5739a8bee65f2cab4ae2cc0c9a95f555ea1248946eb1fe057f?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  }
];

const paymentOptions= [
  {
    id: 1,
    name: "Credit Card",
    images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/9fe00476675e2c1990c9c3bb56914959c7c985407828c8975f3d75575105fb2a?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df", "https://cdn.builder.io/api/v1/image/assets/TEMP/1c90657d66f959f2735eb28bbee503146ad88d7d130e1feaaf68f42ef888fbf0?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"]
  },
  {
    id: 2,
    name: "PayPal",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b81887d892c8b0cda4b3af51771e04341ab9e75d128795a2c184c9c05398d349?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  },
  {
    id: 3,
    name: "Cash on delivery",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80de602c0e24735424830e9724c4010c6223046420fc0ffc9a83a3eb6c39eac2?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  }
];

function OrderSummary() {
  const [selectedPaymentId, setSelectedPaymentId] = useState<number>(1);

  const handlePaymentSelection = (id: number): void => {
    setSelectedPaymentId(id);
    const selectedOption = paymentOptions.find(option => option.id === id);
    console.log(selectedOption);
  };

  const subtotal = products.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const shippingCharge = 3000;
  const total = subtotal + shippingCharge;

  return (
    <div className="flex flex-col max-w-[570px]">
      <h1 className="text-3xl font-semibold leading-tight text-green-800 max-md:max-w-full">
        Order Summary
      </h1>
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-base font-medium leading-tight max-md:max-w-full">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <OrderTotal subtotal={subtotal} shippingCharge={shippingCharge} total={total} />
        <div className="flex flex-col mt-5 w-full max-md:max-w-full">
          {paymentOptions.map((option, index) => (
            <PaymentOption 
              key={option.id} 
              {...option} 
              isFirst={index === 0} // Pass isFirst to PaymentOption
              selected={option.id === selectedPaymentId}
              onSelect={() => handlePaymentSelection(option.id)}
            />
          ))}
        </div>
      </div>
      <button 
        className="gap-2.5 self-stretch px-6 py-5 mt-8 w-full text-base font-semibold leading-tight text-white bg-green-800 rounded-lg min-h-[56px] max-md:px-5 max-md:max-w-full"
        aria-label="Place Order"
      >
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;
