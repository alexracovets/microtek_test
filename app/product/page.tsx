"use client";

import { Container } from "@/components/shared";
import dynamic from 'next/dynamic';

const ProductScene = dynamic(() => import('@/components/shared/product/productScene'), {
  ssr: false,
});

export default function Product() {
  return (
    <Container className="flex-grow flex">
      <div className="max-w-[50%] flex flex-grow">
        <ProductScene />
      </div>
    </Container>
  );
}
