import {Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import "./globals.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Sebastian Portfolio',
    description: 'A showcase of my work and projects.',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}