import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Aura Essencial · Beleza para viver do seu jeito', description: 'Um espaço de cuidado, conversa boa e beleza sem pressa na Vila Madalena.', generator: 'Aura Essencial' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f8f6f2', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
