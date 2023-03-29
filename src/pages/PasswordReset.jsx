/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
const PasswordReset = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        className="w-[100px] ml-[20px] md:block mb-10"
        src="/images/revive.png"
        alt="revive-logo"
      />
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="border my-2 px-1 placeholder:text-[12px]"
          placeholder="Enter Email"
        ></input>
        <button
          className="my-2 border-2 bg-[#04BFA6] rounded-xl text-[white] p-2 hover:bg-[#373964]"
          type="button"
        >
          Reset Password
        </button>
      </div>
      <ul><li className='text-[12px]'><Link href='/LoginPage'>Login Page</Link></li></ul>
    </div>
  )
}

export default PasswordReset
