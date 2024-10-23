import Navigation from '../components/navigation'
import '../styles/global.css'
import { Metadata } from "next"

export const metadata:Metadata = {
  title:{
    template: "%s | jiwoo",
    default: "jiwoo"
  },
  description: 'Lets start coding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
