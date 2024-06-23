import { Navigation } from "./_components/Navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
