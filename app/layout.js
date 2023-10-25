import Backdrop from '@/components/Backdrop'
import './globals.css'

export const metadata = {
  title: 'sixLUKEY',
  description: 'Luke Evertson Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-dark font-bebas'>
      <Backdrop/>
        {children}
        </body>
    </html>
  )
}
