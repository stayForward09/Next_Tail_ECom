import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { IProduct } from "../../typings";

type Props = {
  product: IProduct;
};

const MIN_RATING = 1;
const MAX_RATING = 5;

const Product: React.FC<Props> = ({ product }: Props) => {
  const { id, title, price, description, category, image } = product;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasFast] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        className="object-contain w-40 h-40 mx-auto"
        src={image}
        width={200}
        height={200}
        alt={title}
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="CAD" />
      </div>
      {hasFast && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image className="w-12 pt-1" src="/fastblacklogo.svg" width={48} height={48} alt="fast" />
          <p className="text-xs text-gray-500">FREE One-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;