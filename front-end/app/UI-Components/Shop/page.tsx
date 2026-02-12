"use client";

import { Suspense } from "react";
import ShopComponent from "./ShopComponent/ShopComponent";


export const dynamic = "force-dynamic";

export default function ShopPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopComponent />
    </Suspense>
  );
}
