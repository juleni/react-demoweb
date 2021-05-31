import { useParams } from 'react-router-dom';
import ErrorMessage from '../Components/ErrorMessage';
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HTTPRequest";

function Product() {

  const { id } = useParams();
  const url = `https://60b11d181f26610017fffe7b.mockapi.io/api/v1/products/${id}`;

  let product = useAxiosGet(url)

  let content = null;

  if (product.error) {
    content = <ErrorMessage clColor="red" message="There was an error. Please refresh or try again later."/>
  }
  
  if (product.loading) {
    content = <Loader />
  }

  if (product.data) {
    content = 
      <div>
        <h1 className="text-2xl font-bold mb-3">
          { product.data.name }
        </h1>
        <div>
          <img src={ product.data.images[0].imageUrl }
                alt={ product.data.name }
          />
        </div>
        <div className="font-bold text-xl mb-3">
          $ { product.data.price }
        </div>
        <div>
          { product.data.description }
        </div>
      </div>
  } 
  
  return (
    <div> { content } </div>
  )
}

export default Product