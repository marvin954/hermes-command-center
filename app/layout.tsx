export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/index.html" />
      </head>
      <body>{children}</body>
    </html>
  );
}
