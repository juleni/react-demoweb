
import axios from "axios";
import { useEffect, useState } from "react";

// function name with 'use' prefix is used for HOOKS
export function useAxiosGet(url) {
  const [request, setRequest] = useState(
    {loading: false,
        data: null,
       error: false,
    });

  useEffect(() => {
    setRequest({loading: true,
                    data: null,
                  error: false});
    axios.get(url).then(response => {
      setRequest({loading: true,
                      data: response.data,
                    error: false});
    })
    .catch(() => {
      setRequest({loading: false,
                      data: null,
                    error: true});
    })
  }, [url]
  ) 

  return request
}