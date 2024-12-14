'use client';

import dynamic from 'next/dynamic';

const ClientHome = dynamic(() => import('./ClientHome'), { ssr: false });

export default function ClientWrapper() {
  return <ClientHome />;
}
