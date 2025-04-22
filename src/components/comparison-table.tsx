"use client";

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

interface ComparisonTableProps {
  providers: string[];
}

export function ComparisonTable({providers}: ComparisonTableProps) {
  // Dummy data for comparison
  const comparisonData = {
    AWS: {compute: 'EC2', storage: 'S3', database: 'RDS'},
    Azure: {compute: 'Virtual Machines', storage: 'Blob Storage', database: 'Azure SQL'},
    GCP: {compute: 'Compute Engine', storage: 'Cloud Storage', database: 'Cloud SQL'},
  };

  const features = ['Compute', 'Storage', 'Database'];

  return (
    <Table>
      <TableCaption>Comparison of Cloud Providers</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Feature</TableHead>
          {providers.map((provider) => (
            <TableHead key={provider}>{provider}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature}>
            <TableCell className="font-medium">{feature}</TableCell>
            {providers.map((provider) => (
              <TableCell key={`${provider}-${feature}`}>
                {comparisonData[provider as keyof typeof comparisonData][
                  feature.toLowerCase() as keyof typeof comparisonData.AWS
                ]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
