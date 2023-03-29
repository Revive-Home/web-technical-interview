/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useEffect, useState } from "react"
import UsersData from "../../data/users.json"

const PasswordReset = () => {
  const [showAlertSuccess, setShowAlertSuccess] = useState(false)
  const [showAlertError, setShowAlertError] = useState(false)
  const [email, setEmail] = useState("")

  const handleInputEmail = (e) => {
    //getting user input for email and setting email state to user input
    const userEmail = e.target.value
    //setting alert to false on change so user can type new email
    setShowAlertError(false)
    setEmail(userEmail)
  }

  useEffect(() => {
    if (showAlertSuccess) {
      const timeout = setTimeout(() => {
        setShowAlertSuccess(false)
      }, 6000)
      return () => clearTimeout(timeout)
    }
  }, [showAlertSuccess])

  const handleAunthentication = () => {
    // set variable userFound as false
    let userFound = false
    //map through UsersData json
    UsersData.map((user) => {
      //check email
      if (user.email === email.toLowerCase()) {
        setShowAlertSuccess(true)
        userFound = true
        return
      }
    })
    // if user is not found or invalid because of email and password show an alert
    if (!userFound) {
      setShowAlertError(true)
    }
  }
  return (
    <div>
      <div>
        <div className="h-screen flex flex-col justify-center items-center">
          <img
            className="w-[100px] ml-[20px] md:block mb-10"
            src="/images/revive.png"
            alt="revive-logo"
          />
          <div className="flex flex-col">
            <label>Email</label>
            <input
              onChange={handleInputEmail}
              className="border my-2 px-1 placeholder:text-[12px]"
              placeholder="Enter Email"
            ></input>
            <button
              onClick={handleAunthentication}
              className="my-2 border-2 bg-[#04BFA6] rounded-xl text-[white] p-2 hover:bg-[#373964]"
              type="button"
            >
              Reset Password
            </button>
          </div>
          <ul>
            <li className="text-[12px]">
              <Link href="/LoginPage">Login Page</Link>
            </li>
          </ul>
        </div>
      </div>
      {showAlertSuccess ? (
        <div className="absolute top-2">
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success! </strong>
            <span>Email Sent to {email}</span>
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
            <span>Email not found or invalid!</span>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default PasswordReset
