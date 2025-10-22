import './globals.css'

export const metadata = {
  title: "Sales on Your Mind | AI-Powered Sales Execution for SMBs & Startups",
  description: "Pipeline Builder Kit, Founder's Sales Copilot, Growth Navigator. Sales execution without the chaos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
