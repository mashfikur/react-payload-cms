import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProductType } from "./Products";

type ProductCardType = {
  item: ProductType;
};

export function ProductsCard({ item }: ProductCardType) {
  return (
    <Card className="flex w-full flex-col duration-300 ease-in-out hover:border-transparent hover:shadow-2xl">
      <CardHeader className="flex-grow p-4">
        {/* product image */}

        <img
          className="h-[280px] w-[100%] object-contain"
          src={item.images[0]}
          alt=""
        />

        <div className="space-y-4">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-light">
          Price : <span className="font-semibold"> ${item.price} </span>{" "}
        </p>
      </CardContent>

      <CardFooter className="flex justify-center gap-4">
        <Button>Buy Now</Button>
        <Button variant="outline">Show Details</Button>
      </CardFooter>
    </Card>
  );
}
