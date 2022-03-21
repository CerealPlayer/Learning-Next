import path from "path";
import fs from "fs/promises";

import Link from "next/link";

export default function Home(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
