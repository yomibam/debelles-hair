import React from "react";
import productData from "../data/ProductData";
import hr from "../assets/hr.png";

const ProductLink = ({ productName, productType }) => {
  return (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/2349136225444?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20${productName}, ${productType}.`,
      "_blank",
      "noopener",
      "noreferrer"
    );
  };
};

const DisplayProducts = ({ products }) => {
  return products.map((product) => (
    <div key={product.id} onClick={ProductLink(product)}>
      <div className="w-[300px] h-[300px] overflow-hidden laptop:rounded-[50%] laptop:w-[350px] laptop:h-[350px]">
        <img
          src={require(`../assets/${product.productImg}`)}
          alt={product.productName}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      <h3 className="pt-3 text-xl font-medium text-black">
        {product.productName}
      </h3>
      <p className="text-black text-[1rem] font-light">{product.productType}</p>
      <p className="text-xl font-medium text-violet-700">
        #{product.productPrice}
      </p>
    </div>
  ));
};

function Products() {
  return (
    <div className="flex flex-col items-center justify-center gap-5  py-[10%] bg-[#fff2f2] laptop:py-0">
      <h2 className="text-center text-black text-[2rem] font-medium px-[5%]">
        Our Products
      </h2>
      <h3 className="text-center text-black text-[1rem] font-light px-[6%]">
        When it comes to your looks, your hair is Key! <br />
        Your hair and hair accessories give more importance to your personal
        taste and preferences.
      </h3>
      <div className="flex items-center gap-5 overflow-x-auto text-center flex-nowrap w-[100%] justify-start py-[5%] laptop:gap-10 laptop:pb-0">
        <DisplayProducts products={productData} />
      </div>
      <img
        src={hr}
        alt="line break"
        className="w-[120px] pt-[20%] laptop:pt-[10%]"
      />
    </div>
  );
}

export default Products;
