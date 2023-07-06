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
  return axios.get("https://fakestoreapi.com/products").then((res) => res.data);
};

export const useAllProduct = (id?: number) => {
  toast.success("Failed to Product");
  return useQuery<SingleProduct[]>(
    "https://fakestoreapi.com/products",
    () => GetAllProduct(id),
    {
      onError: (err: any) => {
        toast.error("Failed to fetch product(s)");
      },
    }
  );
};
export const GetSingleProduct = (id?: number) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  return axios.get(url).then((res) => res.data);
};

export const useSingleProduct = (id?: number) => {
  toast.success("Failed to Product");
  return useQuery<SingleProduct>(
    `https://fakestoreapi.com/products/${id}`,
    () => GetSingleProduct(id),
    {
      onError: (err: any) => {
        toast.error("Failed to fetch product");
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

//limited
export const GetLimitedProduct = () => {
  return axios
    .get(`https://fakestoreapi.com/products?limit=5`)
    .then((res) => res.data);
};

export const useLimitedProduct = () => {
  toast.success("Failed to Product");
  return useQuery<SingleProduct[]>(
    `https://fakestoreapi.com/products?limit=5`,
    () => GetLimitedProduct(),
    {
      onError: (err: any) => {
        toast.error("Failed to fetch limited product)");
      },
    }
  );
};
