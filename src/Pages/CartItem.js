import React from "react";
import book1 from '../Assets/book1.jpg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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

const CartItem = () => {

  // const {id, name, imagesrc, price, ammout} = item;
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className=" lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {products.map((product, productIdx) => (
                  <li key={product.id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">{product.color}</p>
                            {product.size ? (
                              <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">{product.size}</p>
                            ) : null}
                          </div>
                          <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                            Quantity, {product.name}
                          </label>
                          <select
                            id={`quantity-${productIdx}`}
                            name={`quantity-${productIdx}`}
                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>

                          <div className="absolute top-0 right-0">
                            <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >
              <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">$100.00</dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Checkout
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default CartItem;