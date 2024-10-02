'use client'

import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";

import { Product } from "@/core";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;

  return (
    <div>
      <Link
        href={`/product/${product.id}`}
        className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
      >
        <div className="h-48 w-full relative">
          <Image
            className="object-contain"
            src={product.image}
            fill
            alt="Imagem do produto"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 gap-3 border-t border-white/10">
          <span className="text-lg font-semibold">{props.product.name}</span>

          <span className="text-sm border-b border-dashed self-start">
            {product.specifications.fav}
          </span>

          <div className="flex-1"></div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-400 line-through">
              de {props.product.basePrice}
            </span>

            <span className="text-xl font-semibold text-emerald-400">
              por {props.product.promotionPrice}
            </span>
          </div>

          <button
            className="flex justify-center items-center h-9 gap-2 bg-violet-700 transition-transform duration-300 hover:scale-105 border-emerald/50 rounded-full"
            onClick={(e: any) => {
              e.preventDefault();
              console.log("Adicionado ao carrinho");
            }}
          >
            <IconShoppingCartPlus size={20} />
            <span>Adicionar</span>
          </button>
        </div>
      </Link>
    </div>
  );
}
