import ProductsList from "./ProductsList";

function Products() {
  return (
    <main>
      {/* This is a little hack because of a TS error from a known bug wich will be fix in the future*/}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ProductsList />
    </main>
  )
}

export default Products;