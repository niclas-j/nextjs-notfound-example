export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>www - {children}</body>
    </html>
  );
}
