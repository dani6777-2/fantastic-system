"use client";

import {Badge} from '@/components/ui/badge';
import {cn} from '@/lib/utils';

interface CloudProviderListProps {
  selectedProviders: string[];
  onProviderSelect: (provider: string) => void;
}

export function CloudProviderList({
  selectedProviders,
  onProviderSelect,
}: CloudProviderListProps) {
  const providers = ['AWS', 'Azure', 'GCP'];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {providers.map((provider) => (
        <Badge
          key={provider}
          variant={selectedProviders.includes(provider) ? 'default' : 'outline'}
          onClick={() => onProviderSelect(provider)}
          className={cn(
            'cursor-pointer',
            selectedProviders.includes(provider) ? 'bg-accent text-accent-foreground' : ''
          )}
        >
          {provider}
        </Badge>
      ))}
    </div>
  );
}
