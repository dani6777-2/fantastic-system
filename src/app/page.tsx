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
            opinion: "AWS es ideal para empresas que buscan una amplia gama de servicios y una gran escalabilidad. Su madurez y adopción en el mercado la hacen una opción segura, aunque a veces compleja para principiantes.",
        },
        Azure: {
            name: "Microsoft Azure",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png",
            description: "Microsoft Azure es una creciente colección de servicios en la nube integrados: análisis, computación, bases de datos, dispositivos móviles, redes, almacenamiento y web, para avanzar más rápido, lograr más y ahorrar dinero.",
            link: "https://azure.microsoft.com/",
            opinion: "Azure es una excelente opción para organizaciones que ya utilizan productos de Microsoft, ofreciendo una integración perfecta con su ecosistema. Es fuerte en soluciones híbridas y cumple con normativas específicas.",
        },
        GCP: {
            name: "Google Cloud Platform",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png",
            description: "Google Cloud Platform es un conjunto de servicios de computación en la nube que se ejecutan en la misma infraestructura que Google usa internamente para sus productos de usuario final, como Google Search y YouTube.",
            link: "https://cloud.google.com/",
            opinion: "GCP destaca en análisis de datos y aprendizaje automático, siendo una opción innovadora para empresas que buscan soluciones de vanguardia. Su enfoque en open source y Kubernetes la hacen atractiva para desarrolladores.",
        },
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Comparador de Proveedores de Nube</h1>
      <CloudProviderList
        selectedProviders={selectedProviders}
        onProviderSelect={handleProviderSelect}
      />
      {selectedProviders.length > 0 && (
        <ComparisonTable providers={selectedProviders} />
      )}

      {/* Sección de Información de Proveedores */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {selectedProviders.map((provider) => (
              <div key={provider} className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-2">
                      {comparisonData[provider as keyof typeof comparisonData].name}
                  </h2>
                  <div className="flex justify-center mb-4">
                      <Image
                          src={comparisonData[provider as keyof typeof comparisonData].image}
                          alt={`${
                              comparisonData[provider as keyof typeof comparisonData].name
                          } Logo`}
                          width={150}
                          height={60}
                          className="rounded-md"
                      />
                  </div>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
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
        {/* Sección de Opiniones */}
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Nuestras Opiniones</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedProviders.map((provider) => (
                    <div key={provider} className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold mb-2">{comparisonData[provider as keyof typeof comparisonData].name}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{comparisonData[provider as keyof typeof comparisonData].opinion}</p>
                    </div>
                ))}
            </div>

            {/* Conclusión Final */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Conclusión</h2>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                    En resumen, la elección del proveedor de nube ideal depende de tus necesidades específicas. AWS ofrece una amplia gama de servicios maduros, Azure se integra bien con productos Microsoft, y GCP destaca en innovación y análisis de datos. Evalúa cuidadosamente tus prioridades antes de tomar una decisión.
                </p>
            </div>
        </div>
    </div>
  );
}

