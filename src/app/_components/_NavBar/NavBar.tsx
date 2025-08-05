import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/freshcart-logo.svg";
import ShoppingCart from "../_icons/ShoppingCartIcon";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-200 p-5">
      <div className="container mx-auto">
        <div className="flex justify-between">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-4">
              <Link href="/" className="pt-1.5 text-gray-500">
                Home
              </Link>
              <Link href="/products" className="pt-1.5 text-gray-500">
                Products
              </Link>
              <Link href="/categories" className="pt-1.5 text-gray-500">
                Categories
              </Link>
              <Link href="/brands" className="pt-1.5 text-gray-500">
                Brands
              </Link>
            </div>
          </div>
          <Link href="/cart">
            <ShoppingCart className="rotate-y-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
