import {
  useGetAllProdQuery,
  useGetSearchProductsQuery,
} from "@/redux/features/productsApi";
import { ProductsCard } from "./ProductCard";
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import ProductPagination from "./ProductPagination";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ProductLimit from "./ProductLimit";
import { DNA } from "react-loader-spinner";
import { setDisplayProducts } from "@/redux/features/productSlice";

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
  const prodCategory = useAppSelector(
    (state) => state.product.selectedCategory,
  );
  const displayProducts = useAppSelector(
    (state) => state.product.displayProducts,
  );

  const dispatch = useAppDispatch();

  const dataOptions = {
    limit: prodLimit,
    skip: prodSkip * prodLimit,
    category: prodCategory,
  };

  // getting all the products
  const { data, isLoading } = useGetAllProdQuery(dataOptions);

  // search text term storing in state
  const [search, setSearch] = useState("");

  // handling input change event
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTimeout(() => {
      const searchText = event.target.value;

      console.log(searchText);

      setSearch(searchText);
    }, 500);
  };

  // getting products upon searching
  const { data: searchedProducts } = useGetSearchProductsQuery(search);

  console.log(searchedProducts);

  // setting it into state
  dispatch(setDisplayProducts(search ? searchedProducts : data));

  return (
    <div className="w-full">
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

      {/* products area */}
      <div className="my-12">
        {isLoading ? (
          <div className="mx-auto flex h-[50vh] w-fit items-center justify-center">
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <div className="space-y-10">
            {/* products grid */}
            <div className="grid grid-cols-4 gap-6">
              {displayProducts &&
                displayProducts.products.map(
                  (item: ProductType, index: number) => (
                    <ProductsCard key={index} item={item} />
                  ),
                )}
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
        )}
      </div>
    </div>
  );
};

export default Products;
