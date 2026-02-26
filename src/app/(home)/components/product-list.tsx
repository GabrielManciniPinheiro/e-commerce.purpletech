import ProductItem from "@/components/ui/product-item";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[]; // Replace 'any' with your actual product type
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
