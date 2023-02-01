import React from 'react';
import book1 from '../Assets/book1.jpg'

const products = [
    {
      id: 1,
      name: 'Banana',
      href: '/productdetail',
      imageSrc: 'https://wallpaperaccess.com/full/25647.jpg',
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Banana',
      href: 'productdetail',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0013/1481/6094/articles/4K-vs-1080p-for-Gaming_1000x.jpg?v=1633718118' ,
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Banana',
      href: 'productdetail',
      imageSrc: 'https://wallpaperaccess.com/full/25640.jpg',
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Banana',
      href: 'productdetail',
      imageSrc: 'https://wallpaperaccess.com/full/25637.jpg',
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Banana',
      href: 'productdetail',
      imageSrc: 'https://wallpaperaccess.com/full/14229.jpg',
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Banana',
      href: 'productdetail',
      imageSrc: 'https://wallpaperaccess.com/full/25643.jpg',
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Banana',
      href: 'productdetail',
      imageSrc: 'https://wallpaperaccess.com/download/4k-16-9-25644',
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Banana',
      href: 'productdetail',
      imageSrc: 'https://wallpaperaccess.com/download/4k-16-9-25645',
      imageAlt: "",
      price: '$35',
      color: 'Black',
    },
    // More products...
  ]

const PicList = () => {
    return (
        <>
        <div className="bg-white">
        <div className="mx-auto max-w-2xl py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-50 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <a key={product.id} href={product.href} className="group no-underline">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
            ))}
            </div>
        </div>
        </div>
        
        </>
      
    );
};

export default PicList;