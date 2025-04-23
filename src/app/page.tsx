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
            descripcion: "Amazon Web Services (AWS) es una plataforma en la nube integral y ampliamente adoptada, que ofrece un amplio conjunto de servicios desde centros de datos de todo el mundo.",
            link: "https://aws.amazon.com/",
            opinion: "AWS es ideal para empresas que buscan una amplia gama de servicios y una gran escalabilidad. Su madurez y adopción en el mercado la hacen una opción segura, aunque a veces compleja para principiantes.",
            descripcionGeneral: "AWS es el pionero y líder del mercado de nube pública, lanzado por Amazon en 2006. Ofrece la mayor variedad de servicios en la industria (más de 200 servicios completos) y opera sobre una infraestructura global muy extensa.",
            precios: "AWS utiliza un modelo de pago por uso, similar a pagar por la electricidad o el agua. Ofrecen Savings Plans e Instancias Reservadas con descuentos de hasta el 72% a cambio de compromisos a largo plazo. También ofrecen instancias Spot con descuentos aún mayores, pero sujetas a interrupción.",
            infraestructuraGlobal: "AWS cuenta con una amplia red global y 135 locaciones de Direct Connect para conexiones dedicadas",
            serviciosClave: "EC2, S3, RDS, Lambda, SageMaker.",
            seguridadYCumplimiento: "AWS ofrece una amplia gama de servicios de seguridad, incluyendo IAM, KMS, y GuardDuty, y cumple con numerosas certificaciones como PCI-DSS, HIPAA y FedRAMP.",
            integracionEcosistemas: "AWS, al ser independiente de cualquier vendor tradicional de aplicaciones empresariales, ha construido integración a través de partners y marketplace. Cuenta con un Marketplace extenso donde terceros ofrecen soluciones listas para desplegar en AWS (desde software de seguridad hasta SAP HANA optimizado).",
        },
        Azure: {
            name: "Microsoft Azure",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png",
            descripcion: "Microsoft Azure es una creciente colección de servicios en la nube integrados: análisis, computación, bases de datos, dispositivos móviles, redes, almacenamiento y web, para avanzar más rápido, lograr más y ahorrar dinero.",
            link: "https://azure.microsoft.com/",
            opinion: "Azure es una excelente opción para organizaciones que ya utilizan productos de Microsoft, ofreciendo una integración perfecta con su ecosistema. Es fuerte en soluciones híbridas y cumple con normativas específicas.",
            descripcionGeneral: "Azure es la plataforma de nube de Microsoft, lanzada en 2010, y se ha posicionado como el segundo mayor proveedor global. Aprovecha la larga trayectoria de Microsoft en entornos empresariales, ofreciendo una integración fluida con productos corporativos existentes.",
            precios: "Azure ofrece un modelo de pago por uso con Instancias Reservadas y descuentos de hasta el 70%. Destacan el beneficio Hybrid Use Benefit, permitiendo a clientes reutilizar licencias on-premises de Windows Server o SQL Server en Azure. También tienen opciones de Azure Spot VMs con descuento para cargas interruptibles.",
            infraestructuraGlobal: "Azure opera una de las mayores redes terrestres y submarinas (con cableado propio) para conectar sus centros de datos, buscando garantizar baja latencia.",
            serviciosClave: "Máquinas Virtuales, Blob Storage, Azure SQL Database, Azure Functions, Azure DevOps.",
            seguridadYCumplimiento: "Azure ofrece Microsoft Defender for Cloud y Sentinel para gestión de seguridad, y cumple con certificaciones como ISO, SOC, HITRUST y GDPR.",
            integracionEcosistemas: "Esta es quizás la mayor ventaja de Azure: para organizaciones que ya utilizan productos de Microsoft, la adopción de Azure es muy natural y sencilla. Azure integra perfectamente con Microsoft 365 (Office): por ejemplo, Azure AD es la base de identidades para Office 365, permitiendo SSO entre la nube Azure y aplicaciones de productividad.",
        },
        GCP: {
            name: "Google Cloud Platform",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png",
            descripcion: "Google Cloud Platform es un conjunto de servicios de computación en la nube que se ejecutan en la misma infraestructura que Google usa internamente para sus productos de usuario final, como Google Search y YouTube.",
            link: "https://cloud.google.com/",
            opinion: "GCP destaca en análisis de datos y aprendizaje automático, siendo una opción innovadora para empresas que buscan soluciones de vanguardia. Su enfoque en open source y Kubernetes la hacen atractiva para desarrolladores.",
            descripcionGeneral: "Google Cloud es la oferta de nube de Google, reconocida por aprovechar la experiencia de Google en tecnologías de contenedores, datos y machine learning. De hecho, Google fue el creador original de Kubernetes.",
            precios: "GCP aplica descuentos por uso continuo automáticamente en instancias de cómputo que corren gran parte del mes, sin necesidad de reserva previa (hasta ~30% de descuento automático). Ofrecen Committed Use Discounts con compromisos de 1 o 3 años, logrando descuentos de hasta ~57%. También disponen de VMs preemptibles con precios muy reducidos para trabajos tolerantes a interrupciones.",
            infraestructuraGlobal: "Google destaca su red definida por software con más de 3.2 millones de km de fibra óptica que enlaza sus regiones, lo que se traduce en alta velocidad y fiabilidad.",
            serviciosClave: "Compute Engine, Cloud Storage, Cloud SQL, Kubernetes Engine, BigQuery.",
            seguridadYCumplimiento: "GCP ofrece Security Command Center para gestión de riesgos y cumple con marcos internacionales como ISO 27001, SOC 1-3, PCI y HIPAA.",
            integracionEcosistemas: "Google, al igual que AWS, no posee un portafolio tradicional de software empresarial, pero ha buscado diferenciarse facilitando la integración en entornos multicloud y de productividad Google. Para empresas que usan Google Workspace (Gmail, Docs, Drive), Google Cloud ofrece ventajas como una identidad unificada y APIs para extender Workspace con servicios GCP."
        },
    };

    const infraestructuraGlobalData = {
        AWS: "AWS cuenta con una amplia red global y 135 locaciones de Direct Connect para conexiones dedicadas",
        Azure: "Azure opera una de las mayores redes terrestres y submarinas (con cableado propio) para conectar sus centros de datos, buscando garantizar baja latencia.",
        GCP: "Google destaca su red definida por software con más de 3.2 millones de km de fibra óptica que enlaza sus regiones, lo que se traduce en alta velocidad y fiabilidad."
    };

    const preciosYModeloFacturacionData = {
        AWS: "AWS utiliza un modelo de pago por uso, similar a pagar por la electricidad o el agua. Ofrecen Savings Plans e Instancias Reservadas con descuentos de hasta el 72% a cambio de compromisos a largo plazo. También ofrecen instancias Spot con descuentos aún mayores, pero sujetas a interrupción.",
        Azure: "Azure ofrece un modelo de pago por uso con Instancias Reservadas y descuentos de hasta el 70%. Destacan el beneficio Hybrid Use Benefit, permitiendo a clientes reutilizar licencias on-premises de Windows Server o SQL Server en Azure. También tienen opciones de Azure Spot VMs con descuento para cargas interruptibles.",
        GCP: "GCP aplica descuentos por uso continuo automáticamente en instancias de cómputo que corren gran parte del mes, sin necesidad de reserva previa (hasta ~30% de descuento automático). Ofrecen Committed Use Discounts con compromisos de 1 o 3 años, logrando descuentos de hasta ~57%. También disponen de VMs preemptibles con precios muy reducidos para trabajos tolerantes a interrupciones."
    };

    const serviciosClaveData = {
        AWS: "EC2, S3, RDS, Lambda, SageMaker",
        Azure: "Máquinas Virtuales, Blob Storage, Azure SQL Database, Azure Functions, Azure DevOps",
        GCP: "Compute Engine, Cloud Storage, Cloud SQL, Kubernetes Engine, BigQuery",
    };

    const seguridadYCumplimientoData = {
        AWS: "AWS ofrece una amplia gama de servicios de seguridad, incluyendo IAM, KMS, y GuardDuty, y cumple con numerosas certificaciones como PCI-DSS, HIPAA y FedRAMP.",
        Azure: "Azure ofrece Microsoft Defender for Cloud y Sentinel para gestión de seguridad, y cumple con certificaciones como ISO, SOC, HITRUST y GDPR.",
        GCP: "GCP ofrece Security Command Center para gestión de riesgos y cumple con marcos internacionales como ISO 27001, SOC 1-3, PCI y HIPAA.",
    };

      const integracionEcosistemasData = {
          AWS: "AWS, al ser independiente de cualquier vendor tradicional de aplicaciones empresariales, ha construido integración a través de partners y marketplace. Cuenta con un Marketplace extenso donde terceros ofrecen soluciones listas para desplegar en AWS (desde software de seguridad hasta SAP HANA optimizado).",
          Azure: "Esta es quizás la mayor ventaja de Azure: para organizaciones que ya utilizan productos de Microsoft, la adopción de Azure es muy natural y sencilla. Azure integra perfectamente con Microsoft 365 (Office): por ejemplo, Azure AD es la base de identidades para Office 365, permitiendo SSO entre la nube Azure y aplicaciones de productividad.",
          GCP: "Google, al igual que AWS, no posee un portafolio tradicional de software empresarial, pero ha buscado diferenciarse facilitando la integración en entornos multicloud y de productividad Google. Para empresas que usan Google Workspace (Gmail, Docs, Drive), Google Cloud ofrece ventajas como una identidad unificada y APIs para extender Workspace con servicios GCP."
      };

    const miOpinion = {
        AWS: "AWS ofrece la mayor variedad de servicios y una gran escalabilidad, ideal para empresas de todos los tamaños. Sin embargo, su complejidad puede ser abrumadora para principiantes.",
        Azure: "Azure es una excelente opción para empresas que ya utilizan productos de Microsoft, gracias a su perfecta integración y enfoque en soluciones híbridas.",
        GCP: "GCP destaca en innovación y análisis de datos, siendo una opción atractiva para empresas que buscan soluciones de vanguardia y un enfoque en open source.",
    };

    const conclusion =
        "En conclusión, la elección del proveedor de nube ideal depende de tus necesidades específicas. AWS es el líder del mercado con una amplia gama de servicios, Azure ofrece una gran integración con el ecosistema Microsoft, y GCP destaca por su innovación y enfoque en datos. Recomiendo evaluar cuidadosamente tus prioridades antes de tomar una decisión.";

    const opinionesEjemplo = {
        AWS: "AWS es como un centro comercial gigante: tiene todo lo que necesitas, pero puede ser difícil encontrar lo que buscas.",
        Azure: "Azure es como un traje a medida: encaja perfectamente si ya estás en el ecosistema de Microsoft.",
        GCP: "GCP es como un laboratorio de innovación: si buscas lo último en tecnología, este es tu lugar."
    };

    const descripcionGeneralData = {
        AWS: "AWS es el pionero y líder del mercado de nube pública, lanzado por Amazon en 2006. Ofrece la mayor variedad de servicios en la industria (más de 200 servicios completos) y opera sobre una infraestructura global muy extensa.",
        Azure: "Azure es la plataforma de nube de Microsoft, lanzada en 2010, y se ha posicionado como el segundo mayor proveedor global. Aprovecha la larga trayectoria de Microsoft en entornos empresariales, ofreciendo una integración fluida con productos corporativos existentes.",
        GCP: "Google Cloud es la oferta de nube de Google, reconocida por aprovechar la experiencia de Google en tecnologías de contenedores, datos y machine learning. De hecho, Google fue el creador original de Kubernetes.",
    };
  return (
    
      
        
          Comparador de Proveedores de Nube
        
      
      
        
          
            Comparador de Proveedores de Nube
          
        
        
          
            
              Comparador de Proveedores de Nube
            
          
        
      
      
        
          
            Comparador de Proveedores de Nube
          
        
      
      <CloudProviderList
        selectedProviders={selectedProviders}
        onProviderSelect={handleProviderSelect}
      />
      {selectedProviders.length > 0 && (
        
          {selectedProviders.map((provider) => (
            
              
                
                  {comparisonData[provider as keyof typeof comparisonData].name}
                
              
            
          ))}
        
      )}

        {/* Sección de Información de Proveedores */}
        
            {selectedProviders.map((provider) => (
                
                    
                        {comparisonData[provider as keyof typeof comparisonData].name}
                    
                    
                        
                            
                                {comparisonData[provider as keyof typeof comparisonData].name} Logo
                                width={150}
                                height={60}
                                className="rounded-md"
                            />
                        
                        
                            {comparisonData[provider as keyof typeof comparisonData].descripcion}
                            
                                Aprende más
                            
                        
                    
                
            ))}
        
            {/* Sección de Descripción General */}
            
                
                    Descripción General
                
                
                    {selectedProviders.map((provider) => (
                        
                            
                                
                                    {comparisonData[provider as keyof typeof comparisonData].name}
                                
                                
                                    {descripcionGeneralData[provider as keyof typeof descripcionGeneralData]}
                                
                            
                        
                    ))}
                
            
        {/* Sección de Comparación de Infraestructura */}
        
            
                Infraestructura Global
            
            
                {selectedProviders.map((provider) => (
                    
                        
                            
                                {comparisonData[provider as keyof typeof comparisonData].name}
                            
                            
                                {infraestructuraGlobalData[provider as keyof typeof infraestructuraGlobalData]}
                            
                        
                    
                ))}
            
        

        {/* Sección de Precios y Modelo de Facturación */}
        
            
                Precios y Modelo de Facturación
            
            
                {selectedProviders.map((provider) => (
                    
                        
                            
                                {comparisonData[provider as keyof typeof comparisonData].name}
                            
                            
                                {preciosYModeloFacturacionData[provider as keyof typeof preciosYModeloFacturacionData]}
                            
                        
                    
                ))}
            
        

        {/* Sección de Servicios Clave Ofrecidos */}
        
            Servicios Clave Ofrecidos
            
                {selectedProviders.map((provider) => (
                    
                        
                            
                                {comparisonData[provider as keyof typeof comparisonData].name}
                            
                            
                                {serviciosClaveData[provider as keyof typeof serviciosClaveData]}
                            
                        
                    
                ))}
            
                  {/* Sección de Seguridad y Cumplimiento */}
                  
                    Seguridad y Cumplimiento
                    
                        {selectedProviders.map((provider) => (
                            
                                
                                    {comparisonData[provider as keyof typeof comparisonData].name}
                                
                                
                                    {seguridadYCumplimientoData[provider as keyof typeof seguridadYCumplimientoData]}
                                
                            
                        
                    ))}
                    
                    {/* Sección de Integración con Ecosistemas Empresariales */}
                    
                        Integración con Ecosistemas Empresariales
                        
                            {selectedProviders.map((provider) => (
                                
                                    
                                        {comparisonData[provider as keyof typeof comparisonData].name}
                                    
                                    
                                        {integracionEcosistemasData[provider as keyof typeof integracionEcosistemasData]}
                                    
                                
                            ))}
                        
                    
            

        {/* Sección de Opiniones */}
        
            Nuestras Opiniones
            
                {selectedProviders.map((provider) => (
                    
                        
                            
                                {comparisonData[provider as keyof typeof comparisonData].name}
                            
                            
                                {comparisonData[provider as keyof typeof comparisonData].opinion}
                            
                        
                    
                ))}
            
            {/* Sección de Mi Opinión */}
            
                Mi Opinión Personal
                
                    {selectedProviders.map((provider) => (
                        
                            
                                {comparisonData[provider as keyof typeof comparisonData].name}
                            
                            
                                {miOpinion[provider as keyof typeof miOpinion]}
                            
                        
                    
                ))}
            
                    {/* Sección de Opiniones de Ejemplo */}
                    
                        Opiniones de Ejemplo
                        
                            {selectedProviders.map((provider) => (
                                
                                    
                                        {comparisonData[provider as keyof typeof comparisonData].name}
                                    
                                    
                                        {opinionesEjemplo[provider as keyof typeof opinionesEjemplo]}
                                    
                                
                            ))}
                        
                    
            
            {/* Conclusión Final */}
            
                Conclusión
                
                    {conclusion}
                
            
        
    
  );
}
