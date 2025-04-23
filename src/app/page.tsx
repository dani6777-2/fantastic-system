"use client";

import {CloudProviderList} from '@/components/cloud-provider-list';
import {ComparisonTable} from '@/components/comparison-table';
import {useState} from 'react';
import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

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
            overview: "AWS es el pionero y líder del mercado de nube pública, lanzado por Amazon en 2006. Ofrece la mayor variedad de servicios en la industria (más de 200 servicios completos) y opera sobre una infraestructura global muy extensa. AWS cuenta con millones de clientes activos en todo el mundo, desde startups hasta grandes empresas y sector público, que ejecutan prácticamente cualquier caso de uso en su plataforma. La comunidad y ecosistema de AWS es el más grande y maduro, con innumerables socios, integradores y desarrolladores contribuyendo con herramientas y conocimiento. AWS se destaca por su amplio catálogo de servicios y su historial de innovación continua en la nube.",
            precios: "AWS utiliza un modelo de pago por uso, similar a pagar por la electricidad o el agua. Ofrecen Savings Plans e Instancias Reservadas con descuentos de hasta el 72% a cambio de compromisos a largo plazo. También ofrecen instancias Spot con descuentos aún mayores, pero sujetas a interrupción."
        },
        Azure: {
            name: "Microsoft Azure",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png",
            description: "Microsoft Azure es una creciente colección de servicios en la nube integrados: análisis, computación, bases de datos, dispositivos móviles, redes, almacenamiento y web, para avanzar más rápido, lograr más y ahorrar dinero.",
            link: "https://azure.microsoft.com/",
            opinion: "Azure es una excelente opción para organizaciones que ya utilizan productos de Microsoft, ofreciendo una integración perfecta con su ecosistema. Es fuerte en soluciones híbridas y cumple con normativas específicas.",
            overview: "Azure es la plataforma de nube de Microsoft, lanzada en 2010, y se ha posicionado como el segundo mayor proveedor global. Aprovecha la larga trayectoria de Microsoft en entornos empresariales, ofreciendo una integración fluida con productos corporativos existentes (Windows Server, SQL Server, Microsoft 365, etc.). Azure ofrece también más de 200 servicios en la nube y una red global de centros de datos muy amplia. Es la opción de confianza para el 95% de las empresas Fortune 500, que la utilizan para ejecutar aplicaciones clave como SAP, herramientas de analítica (Databricks) y entornos VMware. Azure se destaca en especial por sus capacidades de nube híbrida: permite integrar con facilidad entornos on-premises y la nube (por ejemplo, a través de Azure Arc y Azure Stack), lo cual es atractivo para organizaciones con centros de datos propios. Microsoft ha construido además una gran red de socios a nivel mundial para soportar a sus clientes empresariales. En resumen, Azure es reconocida por su enfoque empresarial, soporte híbrido y fuerte integración con el ecosistema Microsoft.",
            precios: "Azure ofrece un modelo de pago por uso con Instancias Reservadas y descuentos de hasta el 70%. Destacan el beneficio Hybrid Use Benefit, permitiendo a clientes reutilizar licencias on-premises de Windows Server o SQL Server en Azure. También tienen opciones de Azure Spot VMs con descuento para cargas interruptibles."
        },
        GCP: {
            name: "Google Cloud Platform",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png",
            description: "Google Cloud Platform es un conjunto de servicios de computación en la nube que se ejecutan en la misma infraestructura que Google usa internamente para sus productos de usuario final, como Google Search y YouTube.",
            link: "https://cloud.google.com/",
            opinion: "GCP destaca en análisis de datos y aprendizaje automático, siendo una opción innovadora para empresas que buscan soluciones de vanguardia. Su enfoque en open source y Kubernetes la hacen atractiva para desarrolladores.",
            overview: "Google Cloud (lanzado formalmente en 2008 con Google App Engine) es la oferta de nube de Google, reconocida por aprovechar la experiencia de Google en tecnologías de contenedores, datos y machine learning. De hecho, Google fue el creador original de Kubernetes (orquestación de contenedores) e Istio (malla de servicios), lo que evidencia su ADN cloud-native. GCP ocupa el tercer lugar en cuota de mercado global, pero ha ganado popularidad especialmente entre empresas nativas digitales y startups enfocadas en datos, análisis e IA. Sus clientes incluyen desde compañías tradicionales (Mercedes-Benz, PayPal, Toyota) hasta empresas tecnológicas modernas. Google Cloud ha fortalecido en años recientes sus servicios empresariales y alianzas, por ejemplo con soporte mejorado para cargas de trabajo de VMware y Oracle. Se le reconoce por su innovación en inteligencia artificial (ej. modelos generativos propios) y una estructura de precios transparente y competitiva.",
            precios: "GCP aplica descuentos por uso continuo automáticamente en instancias de cómputo que corren gran parte del mes, sin necesidad de reserva previa (hasta ~30% de descuento automático). Ofrecen Committed Use Discounts con compromisos de 1 o 3 años, logrando descuentos de hasta ~57%. También disponen de VMs preemptibles con precios muy reducidos para trabajos tolerantes a interrupciones."
        },
    };

  const miOpinion = {
    AWS: "AWS ofrece la mayor variedad de servicios y una gran escalabilidad, ideal para empresas de todos los tamaños. Sin embargo, su complejidad puede ser abrumadora para principiantes.",
    Azure: "Azure es una excelente opción para empresas que ya utilizan productos de Microsoft, gracias a su perfecta integración y enfoque en soluciones híbridas.",
    GCP: "GCP destaca en innovación y análisis de datos, siendo una opción atractiva para empresas que buscan soluciones de vanguardia y un enfoque en open source.",
  };

  const conclusion =
    "En conclusión, la elección del proveedor de nube ideal depende de tus necesidades específicas. AWS es el líder del mercado con una amplia gama de servicios, Azure ofrece una gran integración con el ecosistema Microsoft, y GCP destaca por su innovación y enfoque en datos. Recomiendo evaluar cuidadosamente tus prioridades antes de tomar una decisión.";

    const infraestructuras = {
        AWS: "AWS es el pionero y líder del mercado de nube pública, lanzado por Amazon en 2006. Ofrece la mayor variedad de servicios en la industria (más de 200 servicios completos) y opera sobre una infraestructura global muy extensa",
        Azure: "Azure es la plataforma de nube de Microsoft, lanzada en 2010, y se ha posicionado como el segundo mayor proveedor global. Aprovecha la larga trayectoria de Microsoft en entornos empresariales, ofreciendo una integración fluida con productos corporativos existentes (Windows Server, SQL Server, Microsoft 365, etc.).",
        GCP: "Google Cloud (lanzado formalmente en 2008 con Google App Engine) es la oferta de nube de Google, reconocida por aprovechar la experiencia de Google en tecnologías de contenedores, datos y machine learning. De hecho, Google fue el creador original de Kubernetes (orquestación de contenedores) e Istio (malla de servicios), lo que evidencia su ADN cloud-native",
    };

    const comparacionInfraestructura = {
        AWS: "AWS cuenta con una amplia red global y 135 locaciones de Direct Connect para conexiones dedicadas",
        Azure: "Azure opera una de las mayores redes terrestres y submarinas (con cableado propio) para conectar sus centros de datos, buscando garantizar baja latencia.",
        GCP: "Google destaca su red definida por software con más de 3.2 millones de km de fibra óptica que enlaza sus regiones, lo que se traduce en alta velocidad y fiabilidad."
    };

    const preciosYModeloFacturacion = {
        AWS: "AWS utiliza un modelo de pago por uso, similar a pagar por la electricidad o el agua. Ofrecen Savings Plans e Instancias Reservadas con descuentos de hasta el 72% a cambio de compromisos a largo plazo. También ofrecen instancias Spot con descuentos aún mayores, pero sujetas a interrupción.",
        Azure: "Azure ofrece un modelo de pago por uso con Instancias Reservadas y descuentos de hasta el 70%. Destacan el beneficio Hybrid Use Benefit, permitiendo a clientes reutilizar licencias on-premises de Windows Server o SQL Server en Azure. También tienen opciones de Azure Spot VMs con descuento para cargas interruptibles.",
        GCP: "GCP aplica descuentos por uso continuo automáticamente en instancias de cómputo que corren gran parte del mes, sin necesidad de reserva previa (hasta ~30% de descuento automático). Ofrecen Committed Use Discounts con compromisos de 1 o 3 años, logrando descuentos de hasta ~57%. También disponen de VMs preemptibles con precios muy reducidos para trabajos tolerantes a interrupciones."
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Comparador de Proveedores de Nube</h1>
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
                <Card key={provider} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">
                            {comparisonData[provider as keyof typeof comparisonData].name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
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
                        <CardDescription className="text-gray-700 dark:text-gray-300">
                            {comparisonData[provider as keyof typeof comparisonData].description}
                            <a
                                href={
                                    comparisonData[provider as keyof typeof comparisonData].link
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline ml-1"
                            >
                                Aprende más
                            </a>
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Sección de Descripción General de Infraestructura */}
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
                Descripción General
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedProviders.map((provider) => (
                    <Card key={provider} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-50">{comparisonData[provider as keyof typeof comparisonData].name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700 dark:text-gray-300">{comparisonData[provider as keyof typeof comparisonData].overview}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Sección de Comparación de Infraestructura */}
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
                Comparación de Infraestructura
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedProviders.map((provider) => (
                    <Card key={provider} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-50">{comparisonData[provider as keyof typeof comparisonData].name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700 dark:text-gray-300">{comparacionInfraestructura[provider as keyof typeof comparacionInfraestructura]}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Sección de Precios y Modelo de Facturación */}
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
                Precios y Modelo de Facturación
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedProviders.map((provider) => (
                    <Card key={provider} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-50">{comparisonData[provider as keyof typeof comparisonData].name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700 dark:text-gray-300">{preciosYModeloFacturacion[provider as keyof typeof preciosYModeloFacturacion]}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Sección de Opiniones */}
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Nuestras Opiniones</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedProviders.map((provider) => (
                    <Card key={provider} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-50">{comparisonData[provider as keyof typeof comparisonData].name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700 dark:text-gray-300">{comparisonData[provider as keyof typeof comparisonData].opinion}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {/* Sección de Mi Opinión */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Mi Opinión Personal</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {selectedProviders.map((provider) => (
                        <Card key={provider} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-50">{comparisonData[provider as keyof typeof comparisonData].name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-700 dark:text-gray-300">{miOpinion[provider as keyof typeof miOpinion]}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            {/* Conclusión Final */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Conclusión</h2>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                    {conclusion}
                </p>
            </div>
        </div>
    </div>
  );
}
