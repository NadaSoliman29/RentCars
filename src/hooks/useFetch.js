import axios from "axios"
import { useEffect, useState } from "react"
import { data } from "react-router-dom";

export function useFetch(url) {
  const [cars, setCars] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);



  const getDetails = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url);
      setCars(response?.data?.cars);
       setLoading(false)
    } catch (error) {
      console.log(error);
      setError(error)
    }
  };

  useEffect(() => {
    getDetails();
  }, [url]);

  return { data: cars  , loading , error}; 
}