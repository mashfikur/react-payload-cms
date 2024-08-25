import { useGetAllProdQuery } from "@/redux/features/productsApi";
import { ProductsCard } from "./ProductCard";
import { Input } from "../ui/input";

export type ProductType = {
  title: string;
  description: string;
  price: number;
  images: string[];
};

const Products = () => {
  const { data } = useGetAllProdQuery(undefined);

  return (
    <div className="my-12">
      {/* search bar container */}
      <div className="ml-auto w-[20%]">
        <Input type="text" placeholder="Search Prodcut" />
      </div>

      {/* products grid */}
      <div className="my-12 grid grid-cols-3 gap-6">
        {data &&
          data.products.map((item: ProductType, index: number) => (
            <ProductsCard key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Products;
