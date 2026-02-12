/** @format */

import { Banner } from "./Banner/Banner";
import { Benefits } from "./Benfits/Benefits";
import { BestSales } from "./Best-Sales/BestSales";
import { Brands } from "./Brands/Brands";
import Category from "./Categories/Category";
import Deals from "./Deals/Deals";
import Hero from "./Headrer/Hero";
import HotDeals from "./Hot-Deals/HotDeals";
import {Arrivals} from "./New-Arrivals/Arrivals"
import { NewSletter } from "./NewSletter/NewSletter";
import Offers from "./Offers-Banner/Offers";
import { OrganicFood } from "./Organic-Food/OrganicFood";
import Banners from "./Promotion-Banner/Banners";
import Recommend from "./Recommend/Recommend";
import { Products } from "./Short-Products/Products";
import { Vendors } from "./vendors/Vendors";

export default function Index() {
  return (
    <>
      <Hero />
      <Category />
      <Banners />
      <Deals />
      <Offers/>
      <Recommend/>
      <HotDeals/>
      <Vendors/>
      <BestSales/>
      <Banner/>
      <OrganicFood/>
      <Products/>
      <Brands/>
      <Arrivals/>
      <Benefits/>
      <NewSletter/>
    </>
  );
}
