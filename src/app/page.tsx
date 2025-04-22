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

      {/* Sección de Información de Proveedores */}
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

      {/* Sección de Ejemplos de Código */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ejemplos de Código (Java)</h2>
        {selectedProviders.map((provider) => (
          <div key={provider} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              {comparisonData[provider as keyof typeof comparisonData].name}
            </h3>
            {provider === "AWS" && (
              <div className="bg-gray-100 rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// AWS S3: Subir un archivo\n` +
                      `import com.amazonaws.AmazonServiceException;\n` +
                      `import com.amazonaws.SdkClientException;\n` +
                      `import com.amazonaws.auth.profile.ProfileCredentialsProvider;\n` +
                      `import com.amazonaws.services.s3.AmazonS3;\n` +
                      `import com.amazonaws.services.s3.AmazonS3ClientBuilder;\n` +
                      `import java.io.File;\n` +
                      `\n` +
                      `public class S3Upload {\n` +
                      `    public static void main(String[] args) {\n` +
                      `        String bucketName = "***bucket_name***";\n` +
                      `        String fileObjKeyName = "***file_key***";\n` +
                      `        String fileName = "***file_path***/example.txt";\n` +
                      `\n` +
                      `        try {\n` +
                      `            AmazonS3 s3Client = AmazonS3ClientBuilder.standard()\n` +
                      `                    .withCredentials(new ProfileCredentialsProvider())\n` +
                      `                    .withRegion("us-west-2")\n` +
                      `                    .build();\n` +
                      `            s3Client.putObject(bucketName, fileObjKeyName, new File(fileName));\n` +
                      `        } catch (AmazonServiceException e) {\n` +
                      `            e.printStackTrace();\n` +
                      `        } catch (SdkClientException e) {\n` +
                      `            e.printStackTrace();\n` +
                      `        }\n` +
                      `    }\n` +
                      `}`}
                  </code>
                </pre>
              </div>
            )}
            {provider === "Azure" && (
              <div className="bg-gray-100 rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Azure Blob Storage: Subir un blob\n` +
                      `import com.azure.storage.blob.*;\n` +
                      `import java.io.*;\n` +
                      `\n` +
                      `public class BlobUpload {\n` +
                      `    public static void main(String[] args) throws IOException {\n` +
                      `        String connectStr = "***connection_string***";\n` +
                      `        String containerName = "***container_name***";\n` +
                      `        String blobName = "***blob_name***/example.txt";\n` +
                      `        String filePath = "***file_path***/example.txt";\n` +
                      `\n` +
                      `        BlobServiceClient blobServiceClient = new BlobServiceClientBuilder().connectionString(connectStr).buildClient();\n` +
                      `        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);\n` +
                      `        BlobClient blobClient = containerClient.getBlobClient(blobName);\n` +
                      `\n` +
                      `        File uploadFile = new File(filePath);\n` +
                      `        blobClient.uploadFromFile(filePath, true);\n` +
                      `    }\n` +
                      `}`}
                  </code>
                </pre>
              </div>
            )}
            {provider === "GCP" && (
              <div className="bg-gray-100 rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Google Cloud Storage: Subir un archivo\n` +
                      `import com.google.cloud.storage.BlobId;\n` +
                      `import com.google.cloud.storage.BlobInfo;\n` +
                      `import com.google.cloud.storage.Storage;\n` +
                      `import com.google.cloud.storage.StorageOptions;\n` +
                      `import java.io.IOException;\n` +
                      `import java.nio.file.Paths;\n` +
                      `\n` +
                      `public class GCSUpload {\n` +
                      `    public static void main(String[] args) throws IOException {\n` +
                      `        String projectId = "***project_id***";\n` +
                      `        String bucketName = "***bucket_name***";\n` +
                      `        String objectName = "***object_name***/example.txt";\n` +
                      `        String filePath = "***file_path***/example.txt";\n` +
                      `\n` +
                      `        Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();\n` +
                      `        BlobId blobId = BlobId.of(bucketName, objectName);\n` +
                      `        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();\n` +
                      `        storage.create(blobInfo, Files.readAllBytes(Paths.get(filePath)));\n` +
                      `    }\n` +
                      `}`}
                  </code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

