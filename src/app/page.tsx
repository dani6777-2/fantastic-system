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

    // Datos reales para la comparación con imágenes y fuentes
    const comparisonData = {
        AWS: {
            name: "Amazon Web Services",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
            description: "Amazon Web Services (AWS) es una plataforma en la nube integral y ampliamente adoptada, que ofrece un amplio conjunto de servicios desde centros de datos de todo el mundo.",
            link: "https://aws.amazon.com/",
        },
        Azure: {
            name: "Microsoft Azure",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png",
            description: "Microsoft Azure es una creciente colección de servicios en la nube integrados: análisis, computación, bases de datos, dispositivos móviles, redes, almacenamiento y web, para avanzar más rápido, lograr más y ahorrar dinero.",
            link: "https://azure.microsoft.com/",
        },
        GCP: {
            name: "Google Cloud Platform",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png",
            description: "Google Cloud Platform es un conjunto de servicios de computación en la nube que se ejecutan en la misma infraestructura que Google usa internamente para sus productos de usuario final, como Google Search y YouTube.",
            link: "https://cloud.google.com/",
        },
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comparación de Proveedores de Nube</h1>
      <CloudProviderList
        selectedProviders={selectedProviders}
        onProviderSelect={handleProviderSelect}
      />
      {selectedProviders.length > 0 && (
        <ComparisonTable providers={selectedProviders} />
      )}

      <div className="mt-8">
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
                          Aprende más
                      </a>
                  </p>
              </div>
          ))}
      </div>
    </div>
  );
}

