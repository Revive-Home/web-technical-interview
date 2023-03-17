import { useState } from "react"
import Image from "next/image"

interface AuthProps {
  setIsAuthorized: ((value:boolean) => void)
}

const AuthPage= (props: AuthProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const color: string = error ? 'text-red-400' : 'text-white'
    
  const checkAuth = async (email: string, password: string) => {
    const validate = { email, password }
    try {
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(validate)
        }
      const response = await fetch('/api/authUser', req)
      if (response.ok) {
        const result = await response.json()
        const { token } = result
        localStorage.setItem('user-token', token)
        setError(false)
        props.setIsAuthorized(true)
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
          <button className="p-2 mb-4 text-white bg-gray-300 transition-color" disabled={email && password ? false : true}>Login</button>
          <a className="text-sm font-bold text-right text-gray-300 underline" href="#">Forgot password?</a>
        </form>  
      </div>
      <div className="basis-2/5 h-screen bg-[url('/authimage.webp')] bg-center"></div>
    </div>
  )
}

export default AuthPage