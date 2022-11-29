import Image from "next/image";
import Link from "next/link";
import { ApiResponse, ProductCategory } from "typing";

const fetchCategoriesWithProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/product-categories?populate[0]=icon&populate[1]=products.image`);
  const { data: categories }: ApiResponse = await res.json();
  return categories;
}

async function ProductsList() {
  const categories: ProductCategory[] = await fetchCategoriesWithProducts();

  return (
    <section className="text-gray-600 body-font">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <section className="flex flex-col ">
            {
              categories.map((category) => (
                <div key={category.id} id={category.attributes.slug} className="pt-24 pb-10">
                  <div className="relative">
                    <Image
                      src={category.attributes.icon.data.attributes.url}
                      alt={category.attributes.icon.data.attributes.alternativeText}
                      width={category.attributes.icon.data.attributes.width}
                      height={category.attributes.icon.data.attributes.height}
                      className="absolute -left-24"
                    />
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-1 first-letter:uppercase">{category.attributes.label}</h2>
                  </div>
                  <p className="lg:w-2/3 leading-relaxed text-base mb-6">{category.attributes.description}</p>
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                      category.attributes.products.data.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`} className="group">
                          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <Image
                              src={product.attributes.image.data.attributes.url}
                              alt={product.attributes.image.data.attributes.alternativeText}
                              width={product.attributes.image.data.attributes.width}
                              height={product.attributes.image.data.attributes.height}
                              className="max-h-64 w-full object-cover object-center group-hover:opacity-75"
                            />
                          </div>
                          <h3 className="mt-4 text-sm text-gray-700">{product.attributes.label}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">{product.attributes.price} €</p>
                        </Link>
                      ))
                    }
                  </div>
                </ div>
              ))
            }
          </section>
        </div>
      </div>
    </section>
  )
};

export default ProductsList;