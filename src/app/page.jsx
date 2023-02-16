"use client"; // this is a client component
import { useState, useEffect } from "react";
import { Hero } from "@/components";
export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);
  return (
    <main>
      <Hero />
    </main>
  );
}
