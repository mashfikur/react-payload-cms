import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
  const [selectedPage, setSelectedPage] = useState(1);

  const pages = Math.ceil(totalProducts / limitProduct);

  const pagesArray = Array(pages)
    .fill(1)
    .map((_, index) => index);

  console.log(pagesArray);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {pagesArray.map((item, index) => (
            <PaginationItem
              onClick={() => setSelectedPage(item + 1)}
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

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
