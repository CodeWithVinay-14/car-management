export async function loader({ params }) {
  let product = await getProduct(params.pid);
  return { product };
}
// Component expects loaderData prop without typing
export default function Product({ loaderData }) {
  return <div>{loaderData.product.name}</div>;
}
