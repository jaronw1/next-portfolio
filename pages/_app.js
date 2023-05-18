import '@/styles/globals.css'
import NavBar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <footer>
        © Jaron Wong {new Date().getFullYear()} GPLv3
      </footer>
    </>

  )
}
