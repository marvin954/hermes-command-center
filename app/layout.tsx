export const metadata = { title: "HERMES — Mammba Command Center" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#05050a" }}>
        {children}
      </body>
    </html>
  );
}
