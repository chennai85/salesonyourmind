import './globals.css'

export const metadata = {
  title: "Sales on Your Mind | AI-Powered Sales Execution for SMBs & Startups",
  description: "Fractional sales leadership for startups and SMBs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
