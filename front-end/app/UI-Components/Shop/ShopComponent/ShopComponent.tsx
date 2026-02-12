"use client";

import { useSearchParams } from "next/navigation";

import BestDeals from "@/app/JsonData/BestDeals.json";
import Arrivals from "@/app/JsonData/Arrivals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortProducts.json";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { Products } from "../Products/Products";



export default function ShopComponent() {
  const allProducts = [
    ...Arrivals,
    ...BestDeals,
    ...BestSales,
    ...HotDeals,
    ...OrganicFood,
    ...Recommend,
    ...(ShortProducts?.Featured || []),
    ...(ShortProducts?.TopSelling || []),
    ...(ShortProducts?.TopRated || []),
    ...(ShortProducts?.OnSale || []),
  ];

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  return (
    <>
      {productId ? (
        <ProductDetails id={productId} products={allProducts} />
      ) : (
        <Products products={allProducts} />
      )}
    </>
  );
}
