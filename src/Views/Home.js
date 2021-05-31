
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

function Home() {
  const url = `https://60b11d181f26610017fffe7b.mockapi.io/api/v1/products?page=1&limit=10`;
  const [products, setProducts] = useState(
    {loading: false,
        data: null,
       error: false,
    });

  let content = null;
  useEffect(() => {
    setProducts({loading: true,
                   data: null,
                  error: false});
    axios.get(url).then(response => {
      setProducts({loading: true,
                     data: response.data,
                    error: false});
    })
    .catch(() => {
      setProducts({loading: false,
                     data: null,
                    error: true});
    })
  }, [url]
  ) 

  if (products.error) {
    content = <p>
      There was an error. Please refresh or try again later.
    </p>
  }
    
  if (products.loading) {
    content = <Loader />
  }

  if (products.data) {
    content = 
      products.data.map((product,) => 
        <div key={ product.id }>
          <ProductCard product={ product }/>
        </div>
        
    )
  } 

  return(
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>

      { content }
    </div>
  );
}

export default Home