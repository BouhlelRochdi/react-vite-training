import React, { useEffect, useState } from 'react'
import { ListProducts } from '../services/productService/ProductService';

export const useProducts = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await ListProducts();
      console.log('list of posts: ', response);
      setData(response);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return [ isLoading, data, error ]
}

