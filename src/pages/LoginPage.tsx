
/* eslint-disable @next/next/no-img-element */

 const LoginPage = () => {
  return (
    <div className="flex justify-evenly h-auto items-center">
      <div>
        <form className="flex flex-col justify-evenly ">
          <label>Sign In</label>
          <input className="border my-2 px-1" placeholder="Enter Email"></input>
          <input className="border my-2 px-1"  placeholder="Enter Password"></input>
          <button className='my-2 border-2'type="submit">Submit</button>
          <a className='text-right text-[10px]' href="/">Forgot Password</a>
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
