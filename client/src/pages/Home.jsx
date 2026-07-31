import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data.products);
      } catch (err) {
        setErrorMsg("Could not load products. Is the backend running?");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>

      {loading && <p>Loading products...</p>}
      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      {!loading && !errorMsg && products.length === 0 && (
        <p className="text-gray-500">No products yet — add one from a seller account.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-medium">{product.name}</h2>
            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
            <p className="mt-2 font-semibold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
