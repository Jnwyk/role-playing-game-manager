import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, method, body) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (test) => {
    setLoading(true);
    try {
      const response = await axios({
        method: method,
        url: url,
        data: test,
      });
      setLoading(false);
      setData(response.data);
      if (body) {
        window.location.href = "http://localhost/#/dashboard";
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData(body);
  }, [url, method, body]);

  return [{ data, loading, error }, fetchData];
}
