import Specifications from "./Specifications";
import Priced from "./Priced";

export default interface Product extends Priced {
  id: number;
  name: string;
  description: string;
  // price: number;
  brand: string;
  model: string;
  image: string;
  videoReview: string;
  rate: number;
  tags: string[];
  specifications: Specifications;
}
