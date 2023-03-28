import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import UsersData from "../../data/users.json"
/* eslint-disable @next/next/no-img-element */

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)

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
    <div className="flex justify-evenly items-center h-screen bg-[#f4f4f5] ">
      <div className="border-2 border-[#373964] flex flex-col-reverse md:flex-row md:w-[1000px] h-screen w-full max-w-lg mx-auto justify-evenly items-center ">
        <div>
          <img
            className="w-[100px] hidden md:block"
            src="/images/revive.png"
            alt="revive-logo"
          />
          <div className="b m-5">
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
                className="my-2 border-2 bg-[#58BDA8] rounded-xl text-[white] p-2"
                type="button"
              >
                Login
              </button>
              <Link href="/">
                <p className="cursor-pointer text-right text-[10px]">
                  Forgot Password
                </p>
              </Link>
            </form>
          </div>
        </div>

        <div>
          <div className='flex justify-center md:hidden'>
            <img
            className="w-[150px] mb-5"
            src="/images/revive.png"
            alt="revive-logo"
          />
          </div>

          <img
            src="./images/house.jpeg"
            alt="houseLogin"
            className="w-[230px]"
          ></img>
        </div>
      </div>
      {success ? (
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute top-0"
          role="alert"
        >
          <strong class="font-bold">Success!</strong>
          <span class="block sm:inline">Signed-on</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default LoginPage
