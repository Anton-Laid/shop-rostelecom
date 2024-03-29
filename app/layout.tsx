import type { Metadata } from 'next'
import './globalStyles/normalize.css'
import Layout from '@/components/layouts/Loyout'
import './globalStyles/globals.css'
import './globalStyles/header.css'
import './globalStyles/menu.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
