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
    <Card className="w-full">
      <CardHeader>
        {/* product image */}
        <img
          className="h-[350px] w-[350px] object-contain"
          src={item.images[0]}
          alt=""
        />

        <div className="space-y-4">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent></CardContent>

      <CardFooter className="flex justify-center gap-4">
        <Button>Buy Now</Button>
        <Button variant="outline">Show Details</Button>
      </CardFooter>
    </Card>
  );
}
