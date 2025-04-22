"use client";

import {CloudProviderList} from '@/components/cloud-provider-list';
import {ComparisonTable} from '@/components/comparison-table';
import {useState} from 'react';

export default function Home() {
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  const handleProviderSelect = (provider: string) => {
    setSelectedProviders((prev) =>
      prev.includes(provider)
        ? prev.filter((p) => p !== provider)
        : [...prev, provider]
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cloud Provider Comparison</h1>
      <CloudProviderList
        selectedProviders={selectedProviders}
        onProviderSelect={handleProviderSelect}
      />
      {selectedProviders.length > 0 && (
        <ComparisonTable providers={selectedProviders} />
      )}
    </div>
  );
}
