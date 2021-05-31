import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Product() {

  const { id } = useParams();
  const url = `https://60b11d181f26610017fffe7b.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState(null);

  let content = null;

  useEffect(() => {
      axios.get(url).then(response => {
        setProduct(response.data);
      });
    }, [url]
  )

  if (product) {
    return(
      content = 
        <div>
          <h1 className="text-2xl font-bold mb-3">
            { product.name }
          </h1>
          <div>
            <img src={ product.images[0].imageUrl }
                 alt={ product.name }
            />
          </div>
          <div className="font-bold text-xl mb-3">
            $ { product.price }
          </div>
          <div>
            { product.description }
          </div>
        </div>
    )
  } else return (
    <div> { content } </div>
  )
}

export default Product