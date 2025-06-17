<<<<<<< HEAD

import React from "react";
import AddToCart from "./AddTocart";
export default function Product() {
  //javascript area before return
  const products = [
    {
      id: 1,
      brand: "Oppo",
      model: "o24 super",
      price: 1000000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgt0DbXX8CZR0GFZRy1ZZNvWq8Uk-ZG0t3Q&s",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      brand: "Vivo",
      model: "v24 super",
      price: 1000000,
      image:
        "https://tiimg.tistatic.com/fp/1/007/612/vivo-v23-5g-mobile-phone-with-4200mah-battery-capacity-8gb-ram-128gb-storage-sunshine-gold-891.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      brand: "Samsung",
      model: "pixels",
      price: 1000000,
      image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03032023/1.jpg?$product-details-jpg$",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <div className="flex justify-around">
      {products.map((pro) => (
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure className="h-125 w-full overflow-hidden">
            <img
              src={pro.image}
              alt={pro.brand}
              className="w-full h-full object-fit"
            />
          </figure>
          <div className="card-body bg-blue-50">
            <h2 className="card-title">{pro.brand}</h2>
            <p>{pro.description}</p>
            <div className="card-actions justify-end">
              <AddToCart />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
=======

import React from "react";
import AddToCart from "./AddTocart";
export default function Product() {
  //javascript area before return
  const products = [
    {
      id: 1,
      brand: "Oppo",
      model: "o24 super",
      price: 1000000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgt0DbXX8CZR0GFZRy1ZZNvWq8Uk-ZG0t3Q&s",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      brand: "Vivo",
      model: "v24 super",
      price: 1000000,
      image:
        "https://tiimg.tistatic.com/fp/1/007/612/vivo-v23-5g-mobile-phone-with-4200mah-battery-capacity-8gb-ram-128gb-storage-sunshine-gold-891.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      brand: "Samsung",
      model: "pixels",
      price: 1000000,
      image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03032023/1.jpg?$product-details-jpg$",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <div className="flex justify-around">
      {products.map((pro) => (
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure className="h-125 w-full overflow-hidden">
            <img
              src={pro.image}
              alt={pro.brand}
              className="w-full h-full object-fit"
            />
          </figure>
          <div className="card-body bg-blue-50">
            <h2 className="card-title">{pro.brand}</h2>
            <p>{pro.description}</p>
            <div className="card-actions justify-end">
              <AddToCart />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
>>>>>>> 846b000 (Success)
