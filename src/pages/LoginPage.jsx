import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import UsersData from "../../data/users.json"
/* eslint-disable @next/next/no-img-element */

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInputEmail = (e) => {
    const userEmail = e.target.value
    setEmail(userEmail)
  }
  const handleInputPassword = (e) => {
    const userPassword = e.target.value
    setPassword(userPassword)
  }
  const handleAunthentication = () => {
    let userFound = false;
    UsersData.map((user) => {
      if (user.email === email.toLowerCase() && user.password === password) {
        userFound = true
        router.push("/UserPage")
        return
      }
    })

    if (!userFound) {
      alert("incorrect")
    }
  }
  return (
    <div className="flex justify-evenly items-center h-screen">
      <div>
        <form className="flex flex-col justify-evenly ">
          <label>Sign In</label>
          <input
            value={email}
            onChange={handleInputEmail}
            className="border my-2 px-1"
            placeholder="Enter Email"
          ></input>
          <input
            value={password}
            onChange={handleInputPassword}
            className="border my-2 px-1"
            placeholder="Enter Password"
          ></input>
          <button
            onClick={handleAunthentication}
            className="my-2 border-2"
            type="button"
          >
            Submit
          </button>
          <Link className="text-right text-[10px]" href="/">
            Forgot Password
          </Link>
        </form>
      </div>
      <div>
        <img
          src="./images/house.jpeg"
          alt="houseLogin"
          className="w-[200px]"
        ></img>
      </div>
    </div>
  )
}

export default LoginPage
