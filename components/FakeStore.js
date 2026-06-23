"use client";

import { useEffect, useState } from "react";

export default function FakeStore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=6");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-4 p-4 border rounded-2xl animate-pulse">
            <div className="h-48 bg-slate-200 rounded-xl" />
            <div className="h-6 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 w-1/2 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {data.map((product) => (
        <div 
          key={product.id} 
          className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative h-56 mb-6 overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center p-4">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details */}
          <h3 className="font-bold text-lg line-clamp-1 mb-1">{product.title}</h3>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">{product.category}</p>
          
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-black text-primary">${product.price}</span>
            <span className="badge badge-ghost text-xs">In Stock</span>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2">
            <button className="btn btn-primary rounded-xl col-span-2 shadow-lg shadow-primary/20">
              Add to Cart
            </button>
            <button className="btn btn-outline rounded-xl">Wishlist</button>
            <button className="btn btn-ghost rounded-xl">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}