import { NextPage } from "next"
import { useState, useEffect } from "react"
import Image from "next/image"
import Rows from "../components/displayHouses"
import jwtDecode from "jwt-decode"

const AuthPage: NextPage = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false) 
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const color: string = error ? 'text-red-400' : 'text-white'
    
  const checkAuth = async (email: string, password: string) => {
    const validate = { email, password }
    try {
      const response = await fetch('/api/authUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(validate)
        })
      if (response.ok) {
        const result = await response.json()
        const { token } = result
        localStorage.setItem('user-token', token)
        setError(false)
        setIsAuthorized(true) 
      } else if (response.status === 401) {
        setError(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!email.length || !password.length) {
      setError(true)
    } else {
      checkAuth(email, password)  
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('user-token')
    const user = token ? jwtDecode(token) : null
    if (user) {
      setIsAuthorized(true)
    }
  }, [])

  if (isAuthorized) {
    return <Rows />
  } else {
   
  return (
    <div className="flex w-full h-full">
      <div className="p-4 basis-3/5">
        <Image
        width="150px"
        height="40px"
        alt="Revive Real Estate Logo"
        src="/revive.png"></Image>
        <form className="flex flex-col justify-center w-1/2 m-auto pt-36" onSubmit={handleSubmit}>              
          <h1 className="pb-4 text-xl font-bold ">Sign In</h1>
          <h1 className={`mt-0 font-bold ${color}`}>Invalid login</h1>
          <input 
          className="p-2 mb-8 text-sm font-bold border border-gray-300 rounded" 
          type="email" 
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}></input>
          <input 
          className="p-2 mb-8 text-sm font-bold border border-gray-300 rounded" 
          type="password" 
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}></input>
          <button className="p-2 mb-4 text-white bg-gray-300">Login</button>
          <a className="text-sm font-bold text-right text-gray-300 underline" href="#">Forgot password?</a>
        </form>  
      </div>
      <div className="basis-2/5 h-screen bg-[url('/authimage.webp')] bg-center"></div>
    </div>
  )}
}

export default AuthPage