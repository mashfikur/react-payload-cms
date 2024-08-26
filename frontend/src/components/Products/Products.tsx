import {
  useGetAllProdQuery,
  useGetSearchProductsQuery,
} from "@/redux/features/productsApi";
import { ProductsCard } from "./ProductCard";
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import ProductPagination from "./ProductPagination";
import { useAppSelector } from "@/redux/hooks";
import ProductLimit from "./ProductLimit";

export type ProductType = {
  title: string;
  description: string;
  price: number;
  images: string[];
};

export type ProductsShowType = {
  limit: number;
  products: [];
  skip: number;
  total: number;
};

const Products = () => {
  // global states
  const prodLimit = useAppSelector((state) => state.product.limit);
  const prodSkip = useAppSelector((state) => state.product.skip);

  const dataOptions = {
    limit: prodLimit,
    skip: prodSkip,
  };

  // getting all the products
  const { data } = useGetAllProdQuery(dataOptions);

  // search text term storing in state
  const [search, setSearch] = useState("");

  // handling input change event
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const searchText = event.target.value;

    setSearch(searchText);
  };

  // getting products upon searching
  const { data: searchedProducts } = useGetSearchProductsQuery(search);

  console.log(searchedProducts);

  // storing  product data that want to display
  const displayProducts = search ? searchedProducts : data;

  return (
    <div className="my-12">
      <div className="flex items-center justify-between">
        {/* filtering */}
        <div>
          <ProductLimit />
        </div>

        {/* search bar container */}
        <form className="ml-auto flex w-[30%] items-center gap-4">
          <Input
            onChange={handleInputChange}
            type="text"
            placeholder="Search Product"
            className="focus-visible::outline-green-500 rounded-full text-sm"
          />
          <button className="flex h-10 min-w-10 items-center justify-center rounded-full bg-green-700 text-2xl text-white">
            <IoSearchOutline />
          </button>
        </form>
      </div>

      {/* products grid */}
      <div className="my-12 grid grid-cols-3 gap-6">
        {displayProducts &&
          displayProducts.products.map((item: ProductType, index: number) => (
            <ProductsCard key={index} item={item} />
          ))}
      </div>

      {/* products Pagination */}
      {displayProducts && (
        <ProductPagination
          limitProduct={prodLimit}
          skipItem={prodSkip}
          totalProducts={displayProducts.total}
        />
      )}
    </div>
  );
};

export default Products;
