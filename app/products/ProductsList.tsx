import { ApiResponse, Product } from "typing";

const fetchProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/products?populate=*`);
  const { data: products }: ApiResponse = await res.json();
  return products;
}

async function ProductsList() {
  const products: Product[] = await fetchProducts();
  console.log(products);

  return (
    <section className="text-gray-600 body-font">
      <div>Products</div>
    </section>
  )
};

export default ProductsList;