

'use client'
import Link from 'next/link'
import {useState} from 'react'
import FavouriteIcon from '../_icons/FavouriteIcon'
import RatingIcon from '../_icons/RatingIcon';


export default function ProductCard({product}:{ product: any }) {

  const [favourite, setFavourite] = useState<boolean>(false);

  const toggleFavourite = () => {
    setFavourite(!favourite);
  };
  return (
    <div key={product.id} className="w-1/6">
    <div className="product p-2 rounded-lg">
      <Link href={`/productdetails/${product.id}`}>
        <img
          src={product.imageCover}
          className="w-full "
          alt={product.title}
        />
        <h3 className="text-green-500">{product.category.name}</h3>
        <h3 className="text-xl text-gray-400">
          {product.title.split(' ', 2).join(' ')}
        </h3>
        <div className="flex justify-between text-gray-500">
          <span>{product.price} EGP</span>
          <span className="flex justify-between gap-1 items-center">
            <RatingIcon className='text-amber-300'/>{' '}
            {product.ratingsAverage}
          </span>
        </div>
      </Link>

      <button className={"text-black bg-transparent rounded-full px-2 py-1 hover:bg-transparent"} onClick={toggleFavourite}>
        <FavouriteIcon  />
      </button>

      <button className="btn w-full px-3.5 py-1.5 mx-1 my-2 rounded-lg bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-700">
        Add to cart
      </button>
    </div>
  </div>
  )
}
