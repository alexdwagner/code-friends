import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className="layout-container">{children}</div>;
}