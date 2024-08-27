import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { setSkip } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";

type IncomingProps = {
  limitProduct: number;
  skipItem: number | null;
  totalProducts: number;
};

const ProductPagination = ({
  limitProduct,
  skipItem,
  totalProducts,
}: IncomingProps) => {
  console.log(skipItem);
  // global state
  const dispatch = useAppDispatch();

  const [selectedPage, setSelectedPage] = useState(1);

  const pages = Math.floor(totalProducts / limitProduct);

  const pagesArray = Array(pages)
    .fill(1)
    .map((_, index) => index);

  const handlePageSelect = (value: number) => {
    // setting at global stage
    dispatch(setSkip(value));

    setSelectedPage(value);
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageSelect(selectedPage - 1)}
              className="cursor-pointer"
            />
          </PaginationItem>
          <div className="flex flex-wrap">
            {pagesArray.map((item, index) => (
              <PaginationItem
                onClick={() => handlePageSelect(item + 1)}
                key={index}
              >
                <PaginationLink
                  className="cursor-pointer"
                  isActive={selectedPage === item + 1}
                >
                  {item + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </div>

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageSelect(selectedPage + 1)}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
