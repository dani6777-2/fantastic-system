"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface ComparisonTableProps {
  providers: string[];
}

export function ComparisonTable({ providers }: ComparisonTableProps) {
  // Datos reales para la comparación con imágenes y fuentes
  const comparisonData = {
    AWS: {
      name: "Amazon Web Services",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
      description: "Amazon Web Services (AWS) es una plataforma en la nube integral y ampliamente adoptada, que ofrece un amplio conjunto de servicios desde centros de datos de todo el mundo.",
      link: "https://aws.amazon.com/",
      compute: {
        service: "EC2",
        description:
          "Amazon Elastic Compute Cloud (EC2) proporciona capacidad de cómputo escalable en la nube de AWS.",
        link: "https://aws.amazon.com/ec2/",
      },
      storage: {
        service: "S3",
        description:
          "Amazon Simple Storage Service (S3) es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento.",
        link: "https://aws.amazon.com/s3/",
      },
      database: {
        service: "RDS",
        description:
          "Amazon Relational Database Service (RDS) facilita la configuración, el funcionamiento y el escalado de una base de datos relacional en la nube.",
        link: "https://aws.amazon.com/rds/",
      },
    },
    Azure: {
      name: "Microsoft Azure",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png",
      description: "Microsoft Azure es una creciente colección de servicios en la nube integrados: análisis, computación, bases de datos, dispositivos móviles, redes, almacenamiento y web, para avanzar más rápido, lograr más y ahorrar dinero.",
      link: "https://azure.microsoft.com/",
      compute: {
        service: "Máquinas Virtuales",
        description:
          "Azure Virtual Machines le brinda la flexibilidad de la virtualización para una amplia gama de soluciones informáticas.",
        link: "https://azure.microsoft.com/en-us/services/virtual-machines/",
      },
      storage: {
        service: "Blob Storage",
        description:
          "Azure Blob Storage es la solución de almacenamiento de objetos de Microsoft para la nube.",
        link: "https://azure.microsoft.com/en-us/services/storage/blobs/",
      },
      database: {
        service: "Azure SQL Database",
        description:
          "Azure SQL Database es un motor de base de datos como plataforma como servicio (PaaS) totalmente administrado.",
        link: "https://azure.microsoft.com/en-us/services/sql-database/",
      },
    },
    GCP: {
      name: "Google Cloud Platform",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png",
      description: "Google Cloud Platform es un conjunto de servicios de computación en la nube que se ejecutan en la misma infraestructura que Google usa internamente para sus productos de usuario final, como Google Search y YouTube.",
      link: "https://cloud.google.com/",
      compute: {
        service: "Compute Engine",
        description:
          "Google Compute Engine le permite crear y ejecutar máquinas virtuales en la infraestructura de Google.",
        link: "https://cloud.google.com/compute",
      },
      storage: {
        service: "Cloud Storage",
        description:
          "Google Cloud Storage es un almacenamiento de objetos unificado para desarrolladores y empresas.",
        link: "https://cloud.google.com/storage",
      },
      database: {
        service: "Cloud SQL",
        description:
          "Google Cloud SQL es un servicio de base de datos totalmente administrado que facilita la configuración, el mantenimiento, la gestión y la administración de sus bases de datos relacionales en la nube.",
        link: "https://cloud.google.com/sql",
      },
    },
  };

  const features = ["Compute", "Storage", "Database"];

  return (
    <div>
      <Table>
        <TableCaption>Comparación de Proveedores de Nube</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Característica</TableHead>
            {providers.map((provider) => (
              <TableHead key={provider} className="w-[250px]">
                {comparisonData[provider as keyof typeof comparisonData].name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature}>
              <TableCell className="font-medium">{feature}</TableCell>
              {providers.map((provider) => (
                <TableCell key={`${provider}-${feature}`}>
                  <p className="font-bold">
                    {
                      comparisonData[provider as keyof typeof comparisonData][
                        feature.toLowerCase() as keyof typeof comparisonData.AWS
                      ].service
                    }
                  </p>
                  <p>
                    {
                      comparisonData[provider as keyof typeof comparisonData][
                        feature.toLowerCase() as keyof typeof comparisonData.AWS
                      ].description
                    }
                  </p>
                  <a
                    href={
                      comparisonData[provider as keyof typeof comparisonData][
                        feature.toLowerCase() as keyof typeof comparisonData.AWS
                      ].link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Aprende más
                  </a>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
