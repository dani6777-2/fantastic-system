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
  // Real data for comparison with images and sources
  const comparisonData = {
    AWS: {
      name: "Amazon Web Services",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
      description: "Amazon Web Services (AWS) is a comprehensive and widely adopted cloud platform, offering a broad set of services from data centers around the world.",
      link: "https://aws.amazon.com/",
      compute: {
        service: "EC2",
        description:
          "Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS cloud.",
        link: "https://aws.amazon.com/ec2/",
      },
      storage: {
        service: "S3",
        description:
          "Amazon Simple Storage Service (S3) is an object storage service offering scalability, data availability, security, and performance.",
        link: "https://aws.amazon.com/s3/",
      },
      database: {
        service: "RDS",
        description:
          "Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud.",
        link: "https://aws.amazon.com/rds/",
      },
    },
    Azure: {
      name: "Microsoft Azure",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png",
      description: "Microsoft Azure is a growing collection of integrated cloud services—analytics, computing, database, mobile, networking, storage and web—for moving faster, achieving more and saving money.",
      link: "https://azure.microsoft.com/",
      compute: {
        service: "Virtual Machines",
        description:
          "Azure Virtual Machines gives you the flexibility of virtualization for a wide range of computing solutions.",
        link: "https://azure.microsoft.com/en-us/services/virtual-machines/",
      },
      storage: {
        service: "Blob Storage",
        description:
          "Azure Blob Storage is Microsoft's object storage solution for the cloud.",
        link: "https://azure.microsoft.com/en-us/services/storage/blobs/",
      },
      database: {
        service: "Azure SQL Database",
        description:
          "Azure SQL Database is a fully managed platform as a service (PaaS) database engine.",
        link: "https://azure.microsoft.com/en-us/services/sql-database/",
      },
    },
    GCP: {
      name: "Google Cloud Platform",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Cloud_Platform_logo.svg/2560px-Google_Cloud_Platform_logo.svg.png",
      description: "Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube.",
      link: "https://cloud.google.com/",
      compute: {
        service: "Compute Engine",
        description:
          "Google Compute Engine lets you create and run virtual machines on Google's infrastructure.",
        link: "https://cloud.google.com/compute",
      },
      storage: {
        service: "Cloud Storage",
        description:
          "Google Cloud Storage is a unified object storage for developers and enterprises.",
        link: "https://cloud.google.com/storage",
      },
      database: {
        service: "Cloud SQL",
        description:
          "Google Cloud SQL is a fully-managed database service that makes it easy to set up, maintain, manage, and administer your relational databases in the cloud.",
        link: "https://cloud.google.com/sql",
      },
    },
  };

  const features = ["Compute", "Storage", "Database"];

  return (
    <div>
      <Table>
        <TableCaption>Comparison of Cloud Providers</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Feature</TableHead>
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
                    Learn more
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
