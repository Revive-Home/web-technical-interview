import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai'
import UsersData from "../../data/users.json"
/* eslint-disable @next/next/no-img-element */

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showAlertSuccess, setShowAlertSuccess] = useState(false)
  const [showAlertError, setShowAlertError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
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
    // set variable userFound as false
    let userFound = false;
    //map through UsersData json that I imported above
    UsersData.map((user) => {
      //if the user email and password match set my local storage user and alert user of successful sign on
      //set userFound to true and send user to UserPage
      if (user.email === email.toLowerCase() && user.password === password) {
        localStorage.setItem('user', JSON.stringify(user))
        setShowAlertSuccess(true)
        userFound = true
        router.push("/UserPage")
        return
      }
    })
   // if user is not found or invalid because of email and password show an alert
    if (!userFound) {
      setShowAlertError(true)
    }

  }

  return (
    <div className="flex justify-evenly items-center h-screen bg-[#f4f4f5] ">
      <div className="border-2 flex flex-col-reverse md:flex-row h-screen md:h-[60%]  w-full max-w-lg mx-auto justify-center md:justify-evenly items-center ">
        <div>
          <img
            className="w-[100px] hidden  ml-[20px] md:block"
            src="/images/revive.png"
            alt="revive-logo"
          />
          <div className=" m-5">
            <form className="flex flex-col justify-evenly ">
              <label>Sign In</label>
              <input
                value={email}
                onChange={handleInputEmail}
                className="border my-2 px-1 placeholder:text-[14px] text-[24px] md:text-[18px]"
                placeholder="Enter Email"
              ></input>
              <div className='relative'>
                <input
                  value={password}
                  onChange={handleInputPassword}
                  className="border my-2 px-1 placeholder:text-[14px] text-[24px] md:text-[18px]"
                  placeholder="Enter Password"
                  type={showPassword ? "" : "password"}
                ></input>
                {showPassword ? (
                  <AiFillEyeInvisible
                    onClick={() => setShowPassword(false)}
                    className="absolute  right-0 top-4 cursor-pointer mr-2 "
                  />
                ) : (
                  <AiFillEye
                    className="cursor-pointer absolute top-4 right-0 mr-2 "
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              <button
                onClick={handleAunthentication}
                className="my-2 border-2 bg-[#04BFA6] rounded-xl text-[white] p-2 hover:bg-[#373964]"
                type="button"
              >
                Login
              </button>
              <Link href="/PasswordReset">
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
            className="w-[230px] hidden rounded-xl shadow-xl  md:block"
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
            <span>Invalid Email or Password</span>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default LoginPage
