import { useGetAllCategoryListQuery } from "@/redux/features/productsApi";

import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCategory } from "@/redux/features/productSlice";

const ProductSidebar = () => {
  const { data: categories } = useGetAllCategoryListQuery(undefined);

  const selectedCat = useAppSelector((state) => state.product.selectedCategory);

  const dispatch = useAppDispatch();

  return (
    <div className="h-full min-w-[280px] px-4 py-2 shadow-md">
      {/* categories */}
      <div className="my-5">
        <p className="border-b pb-2 text-xl font-semibold capitalize leading-7">
          Categories
        </p>
        <div
         
          className="my-3 max-h-[500px] space-y-3 overflow-y-auto"
        >
          {categories &&
            categories.map((item: string) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedCat === item}
                  id={`prod-category-${item}`}
                />
                <label
                  onClick={() => dispatch(setCategory(item))}
                  htmlFor={`prod-category-${item}`}
                  className="cursor-pointer text-base font-semibold capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
