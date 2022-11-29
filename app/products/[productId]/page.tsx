import Image from "next/image";
import { notFound } from 'next/navigation';
import { ApiResponse, Product } from "typing";

export const dynamicParams = true;

type ProductDetailProps = {
  params: {
    productId: string
  }
}

const fetchProduct = async (productId: string) => {
  const res = await fetch(
    `${process.env.API_URL}/products/${productId}?populate=*`, {
    // To use ISR wich allow us to revalidate the cache after a certain time :
    next: { revalidate: 60 }
  });

  const { data: product }: ApiResponse = await res.json();
  return product;
};

async function ProductDetail({ params: { productId } }: ProductDetailProps) {
  const product: Product = await fetchProduct(productId);
  // notFound
  if (!product) return notFound();

  // const dateFormated = new Date(product.attributes.publishedAt).toLocaleDateString('fr-FR', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });

  return (
    <article className="px-60 py-20 min-h-[80vh]">
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <Image
            src={product.attributes.image.data.attributes.url}
            alt={product.attributes.image.data.attributes.alternativeText}
            className="h-full w-full object-cover object-center"
            width={product.attributes.image.data.attributes.width}
            height={product.attributes.image.data.attributes.height}
          />
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4 flex flex-col justify-evenly">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl tracking-tight text-gray-900 first-letter:uppercase">{product.attributes.label}</h2>
            <p className="text-2xl tracking-tight text-gray-900">{product.attributes.price} €</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <p className="text-gray-500 text-lg mr-2">3.9</p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              </div>
            </div>
            <strong className="text-sm tracking-wide cursor-pointer text-blue-500 underline decoration-blue-500 decoration-1">Voir les 512 commentaires.</strong>
          </div>
          <div className="mb-4 prose">
            <h3 className="text-lg mb-1 prose-h3">Description</h3>
            <p className="whitespace-pre-line prose-p">{product.attributes.detail}</p>
          </div>
          <button className="btn w-full">Ajouter au panier</button>
        </div>
      </div>
    </article >
  )
}

export default ProductDetail;

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/products`);
  const { data: products }: ApiResponse = await res.json();
  return products.map((product: Product) => ({
    productId: product.id.toString(),
  }));
}