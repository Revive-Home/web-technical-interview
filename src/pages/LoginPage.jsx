import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import UsersData from "../../data/users.json"

/* eslint-disable @next/next/no-img-element */

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showAlertSuccess, setShowAlertSuccess] = useState(false)
  const [showAlertError, setShowAlertError] = useState(false)
  const [showAlertErrorPassword, setShowAlertErrorPassword] = useState(false)

  useEffect(()=>{
    if(showAlertSuccess) {
      const timeout = setTimeout(()=>{
        setShowAlertSuccess(false)
      },6000)
      return()=>clearTimeout(timeout)
    }
  }, [showAlertSuccess])


  const handleInputEmail = (e) => {
    const userEmail = e.target.value
    setShowAlertError(false)
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
        localStorage.setItem('firstname', user.firstname)
        setShowAlertSuccess(true)
        userFound = true
        router.push("/UserPage")
        return
      }
    })

    if (!userFound) {
      setShowAlertError(true)
    }
  }

  return (
    <div className="flex justify-evenly items-center h-screen bg-[#f4f4f5] ">
      <div className="border-2 border-[#373964] flex flex-col-reverse md:flex-row h-screen md:h-[60%]  w-full max-w-lg mx-auto justify-center md:justify-evenly items-center ">
        <div>
          <img
            className="w-[100px] hidden ml-[20px] md:block"
            src="/images/revive.png"
            alt="revive-logo"
          />
          <div className=" m-5">
            <form className="flex flex-col justify-evenly ">
              <label>Sign In</label>
              <input
                value={email}
                onChange={handleInputEmail}
                className="border my-2 px-1 placeholder:text-[12px]"
                placeholder="Enter Email"
              ></input>
              <input
                value={password}
                onChange={handleInputPassword}
                className="border my-2 px-1 placeholder:text-[12px]"
                placeholder="Enter Password"
              ></input>
              <button
                onClick={handleAunthentication}
                className="my-2 border-2 bg-[#04BFA6] rounded-xl text-[white] p-2"
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
          <div className="flex justify-center md:hidden">
            <img
              className="w-[150px] mb-5"
              src="/images/revive.png"
              alt="revive-logo"
            />
          </div>

          <img
            src="./images/house.jpeg"
            alt="houseLogin"
            className="w-[230px] hidden md:block"
          ></img>
        </div>
      </div>
      {showAlertSuccess ? (
        <div className="absolute top-2">
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success! </strong>
            <span>Signed-on</span>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {showAlertError ? (
        <div className="absolute top-2">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-black">Error! </strong>
            <span>Invalid Email</span>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {showAlertErrorPassword ? (
        <div className="absolute top-2">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-black">Error! </strong>
            <span>Invalid Password</span>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default LoginPage
