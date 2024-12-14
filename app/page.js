import { Container } from '@mui/material';
import { Inter } from 'next/font/google';
import ClientWrapper from './components/ClientWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <ClientWrapper>
    </ClientWrapper>
  );
}

