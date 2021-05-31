import HelloWorld from '../Components/HelloWorld';

function Home() {
  return(
    <div>
      <h1 className="font-bold text-2xl mb-3">This is homepage</h1>

      <HelloWorld name="Juleni"/>
    </div>
  );
}

export default Home