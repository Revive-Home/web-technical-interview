import type { NextPage } from "next"
import { useState, useEffect } from "react"
import jwtDecode from "jwt-decode"
import AuthPage from "../components/authPage"
import HouseDisplay from "../components/displayHouses"

const Home: NextPage = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false) 
  
  useEffect(() => {
      const token = localStorage.getItem('user-token')
      const user = token ? jwtDecode(token) : null
      if (user) {
        setIsAuthorized(true)
      }

      window.addEventListener('storage', () => {
        const token = localStorage.getItem('user-token')
        const user = token ? jwtDecode(token) : null
        if (user) {
          setIsAuthorized(true)
        }
      })

      return () => window.removeEventListener('storage', () => {
        const token = localStorage.getItem('user-token')
        const user = token ? jwtDecode(token) : null
        if (user) {
          setIsAuthorized(true)
        }
      })
  }, [])

  if (isAuthorized) {
    return (
      <HouseDisplay />
    )
  } else {
    return (
      <AuthPage />
    )
  }
}

export default Home
