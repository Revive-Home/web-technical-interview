import {
BsChevronRight,
BsFillCalendarEventFill,
BsFillHouseDoorFill
} from "react-icons/bs"
import { FaBed,FaToilet } from 'react-icons/fa'
import HomesData from '../../data/homes.json'

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
const Card = () => {

  return (
    <div className='flex flex-col mt-5 justify-center items-center md:flex-row '>
    {HomesData.map(({id, address,bedrooms, bathrooms, city, state, zipCode, yearBuilt,sqft
    })=>{
        return (
          <div
            key={id}
            className=" w-[300px] p-6 relative mb-10  hover:scale-105 ease in duration-300 "
          >
            <div>
              <img
                className=" rounded-xl w-full h-auto "
                src="/images/house.jpeg"
                alt="house"
              ></img>
              <div className="bg-slate-50 rounded-xl p-4 absolute bottom-[-15%] w-[84%]">
                <div className="flex flex-col mb-2">
                  <div className="flex flex-row justify-between ">
                    <h1 className="font-black tracking-wider">{address}</h1>
                    <div className="bg-[#66c69c] flex items-center justify-center w-[20px] cursor-pointer">
                      <BsChevronRight className="text-[white] " />
                    </div>
                  </div>
                  <p className="text-[gray]">
                    {city}, {state} {zipCode}
                  </p>
                </div>
                <div className="flex  flex-row justify-between">
                  <div className="flex flex-row justify-evenly items-center   ">
                    <FaBed />
                    <p className="pl-1">{bedrooms}</p>
                  </div>
                  <div className="flex flex-row justify-evenly items-center   ">
                    <BsFillCalendarEventFill />
                    <p className="pl-1">{yearBuilt}</p>
                  </div>
                  <div className="flex flex-row justify-evenly items-center  ">
                    <FaToilet />
                    <p className="pl-1">{bathrooms}</p>
                  </div>
                  <div className="flex flex-row justify-evenly items-center ">
                    <BsFillHouseDoorFill />
                    <p className="pl-1">{sqft}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      })
    }
    </div>

  )
}

export default Card
