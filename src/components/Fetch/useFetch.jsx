import React, { useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = "http://194.32.107.29/GaAPI";

export const useFetch = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { info, loading, error };
};
