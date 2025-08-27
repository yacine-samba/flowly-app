import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './theme-registry';

export const metadata: Metadata = {
  title: 'Flowly — Automatisez votre business, pas votre passion.',
  description:
    "Flowly aide les freelances à automatiser leurs tâches sans coder: factures, relances, RDV, emails et plus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ scrollBehavior: 'smooth' }}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}