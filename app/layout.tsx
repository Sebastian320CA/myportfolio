export const metadata = {
    title: 'Sebastian Portfolio',
    description: 'A showcase of my work and projects.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}