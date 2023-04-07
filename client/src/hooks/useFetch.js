import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, method, body) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const response = axios
      .get({
        method: method,
        url: url,
        data: body,
      })
      .then((res) => {
        setLoading(false);
        setData(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
    return () => response.cancel();
  }, [url]);

  return [data, loading, error];
}
