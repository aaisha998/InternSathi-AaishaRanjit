import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "../HomePage/Home.scss";

//interface
export interface SingleProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

//Api

export const GetAllProduct = (id?: number) => {
  const url = id
    ? `https://fakestoreapi.com/products/${id}`
    : "https://fakestoreapi.com/products";
  return axios.get(url).then((res) => res.data);
};

export const useAllProduct = (id?: number) => {
  const queryKey = id ? `product_${id}` : "allProducts";
  toast.success("Failed to Product");
  return useQuery<SingleProduct | SingleProduct[]>(
    queryKey,
    () => GetAllProduct(id),
    {
      onError: (err: any) => {
        toast.error("Failed to fetch product(s)");
      },
    }
  );
};

//Api

export const GetAllCategories = () => {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => res.data);
};

export const useAllCategories = () => {
  toast.success("Failed to Fetch Category");
  return useQuery<String[]>(
    "https://fakestoreapi.com/products/categories",
    () => GetAllCategories(),
    {
      onError: (err: any) => {
        toast.error("Failed to fetch Category");
      },
    }
  );
};

export const GetSerchedCategory = (category?: string) => {
  return axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.data);
};

export const useSerchedCategory = (category?: string) => {
  toast.success("Failed to Product");
  return useQuery<SingleProduct[]>(
    `https://fakestoreapi.com/products/category/${category}`,
    () => GetSerchedCategory(category),
    {
      onError: (err: any) => {
        toast.error("Failed to fetch Category");
      },
    }
  );
};
