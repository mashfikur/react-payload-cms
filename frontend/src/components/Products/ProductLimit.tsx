import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setLimit } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";

const ProductLimit = () => {
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    const valueNumber = parseInt(value);

    dispatch(setLimit(valueNumber));
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Products Per Page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="30">30</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProductLimit;
