"use client";

import {CloudProviderList} from '@/components/cloud-provider-list';
import {ComparisonTable} from '@/components/comparison-table';
import {useState} from 'react';
import Image from "next/image";

export default function Home() {
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  const handleProviderSelect = (provider: string) => {
    setSelectedProviders((prev) =>
      prev.includes(provider)
        ? prev.filter((p) => p !== provider)
        : [...prev, provider]
    );
  };

    // Real data for comparison with images and sources
    const comparisonData = {
        AWS: {
            name: "Amazon Web Services",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
            description: "Amazon Web Services (AWS) is a comprehensive and widely adopted cloud platform, offering a broad set of services from data centers around the world.",
            link: "https://aws.amazon.com/",
        },
        Azure: {
            name: "Microsoft Azure",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png",
            description: "Microsoft Azure is a growing collection of integrated cloud services—analytics, computing, database, mobile, networking, storage and web—for moving faster, achieving more and saving money.",
            link: "https://azure.microsoft.com/",
        },
        GCP: {
            name: "Google Cloud Platform",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png",
            description: "Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube.",
            link: "https://cloud.google.com/",
        },
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

        {selectedProviders.map((provider) => (
            <div key={provider} className="mb-8">
                <h2 className="text-xl font-bold mb-2">
                    {comparisonData[provider as keyof typeof comparisonData].name}
                </h2>
                <Image
                    src={comparisonData[provider as keyof typeof comparisonData].image}
                    alt={`${
                        comparisonData[provider as keyof typeof comparisonData].name
                    } Logo`}
                    width={150}
                    height={60}
                    className="rounded-md mb-2"
                />
                <p className="mb-2">
                    {comparisonData[provider as keyof typeof comparisonData].description}
                    <a
                        href={
                            comparisonData[provider as keyof typeof comparisonData].link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline ml-1"
                    >
                        Learn more
                    </a>
                </p>
            </div>
        ))}
    </div>
  );
}
