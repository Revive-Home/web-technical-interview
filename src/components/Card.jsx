import Link from 'next/link'
import { useRouter } from "next/router"
import { useEffect,useState } from 'react'
import {
BsChevronRight,BsFillHouseDoorFill
} from "react-icons/bs"
import { FaToilet } from 'react-icons/fa'
import { MdBed,MdSquareFoot } from 'react-icons/md'
import HomesData from '../../data/homes.json'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
const Card = () => {
  const [firstName, setFirstName] = useState('')
  const router = useRouter()

  useEffect(()=>{
    //clearing local storage if user refreshes page
     window.onbeforeunload = () => {
       localStorage.clear()
     }
     //setting user storage as variable user
     let user = JSON.parse(localStorage.getItem('user'))
     //if the user exists set the firstname state if not take user back to login page
     if(user) {
       setFirstName(user.firstname)
     } else {
      router.push("/LoginPage")
     }


  },[router])
  return (
    <div>
      <div className='flex flex-row justify-between shadow-lg'>
        <h1 className="py-4 px-4 font-bold sm:text-5xl  text-4xl  text-gray-700">
          Hi, <span className="text-[#04BFA6]">{firstName}!</span>
        </h1>
        <div>
          <Link href="/LoginPage">
          <button
            className=" border-1  bg-[#04BFA6] rounded-lg p-2 m-4 text-[white]   hover:bg-[#373964]"
            type="button"
          >
           Logout
          </button>
        </Link>
        </div>

      </div>

      <div className="flex flex-col mt-5 justify-center items-center sm:flex-wrap md:flex-row ">
        {HomesData.map(
          ({
            id,
            address,
            bedrooms,
            bathrooms,
            city,
            state,
            zipCode,
            sqft,
            imageUrl,
          }) => {
            return (
              <div
                key={id}
                className=" w-[300px] p-6 relative mb-10 mt-10  hover:scale-105 ease in duration-300  "
              >
                <div>
                  <img
                    className=" rounded-xl w-full h-auto"
                    src={imageUrl}
                    alt="house"
                  ></img>

                  <div className="bg-slate-50 rounded-xl p-4 absolute bottom-[-30%] w-[84%] shadow-xl">
                    <div className="flex flex-col mb-2">
                      <div className="flex flex-row justify-between ">
                        <h1 className="font-black tracking-wider">{address}</h1>
                        <div className="bg-[#66c69c] flex items-center justify-center w-[20px] cursor-pointer">
                          <BsChevronRight onClick={()=>{router.push(`/DetailsPage`)}} className="text-[white] " />
                        </div>
                      </div>
                      <p className="text-[gray]">
                        {city}, {state} {zipCode}
                      </p>
                    </div>
                    <div className="flex  flex-row justify-between">
                      <div className="flex flex-row justify-evenly items-center   ">
                        <MdBed className="text-gray-600" />
                        <p className="pl-1 text-gray-600 ">{bedrooms}</p>
                      </div>
                      <div className="flex flex-row justify-evenly items-center   ">
                        <MdSquareFoot className="text-gray-600" />
                        <p className="pl-1 text-gray-600">{sqft}</p>
                      </div>
                      <div className="flex flex-row justify-evenly items-center  ">
                        <FaToilet className="text-gray-600" />
                        <p className="pl-1 text-gray-600">{bathrooms}</p>
                      </div>
                      <div className="flex flex-row justify-evenly items-center ">
                        <BsFillHouseDoorFill className="text-gray-600" />
                        <p className="pl-1 text-gray-600">{sqft}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Card
