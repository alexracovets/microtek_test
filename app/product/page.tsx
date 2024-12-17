"use client";

import { Container } from "@/components/shared";
import { ProductScene } from "@/components/shared/product/productScene";

export default function Product() {
  return (
    <Container>
      <div className="w-full h-full flex-grow flex-col">
        <ProductScene />
      </div>
    </Container>
  );
}
