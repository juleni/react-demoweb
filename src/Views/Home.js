
import ErrorMessage from "../Components/ErrorMessage";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HTTPRequest";

function Home() {
  // Create your own Mock API: https://mockapi.io
  const url = `https://60b11d181f26610017fffe7bX.mockapi.io/api/v1/products?page=1&limit=10`;

  let products = useAxiosGet(url)
  
  let content = null;

  if (products.error) {
    content = <div>
      <ErrorMessage clColor="blue" message="If you see this error: Please remember to create your's own mock API"/>

      <ErrorMessage clColor="red" message="There was an error. Please refresh or try again later."/>
    </div>
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