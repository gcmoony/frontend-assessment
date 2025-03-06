export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

interface Product {
    id: Number
    name: string
    price: Number
    image: string
    active: boolean
    seller: string
    brand: string
    model: string
    color: string
    category: string
    description: string
}

// export async function getProducts() {
//   const data = await fetch('http://localhost:3000/data.json')
//   const products = await data.json()
//   return (
//     <ul>
//     {products.map((product) => (
//       <li key={product.id}>{product.name}</li>
//     ))}
//     </ul>
//   )
// }
