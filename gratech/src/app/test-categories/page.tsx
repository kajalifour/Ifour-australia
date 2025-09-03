"use client";

import { useEffect, useState } from "react";
import { getBlogCategory } from "@/utils/api";

export default function TestCategoriesPage() {
  const [categories, setCategories] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testCategories = async () => {
      try {
        setLoading(true);
        const response = await getBlogCategory();
        console.log('Raw API Response:', response);
        setCategories(response);
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    testCategories();
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Categories API Test</h1>
      <pre style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
        {JSON.stringify(categories, null, 2)}
      </pre>
    </div>
  );
}
