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
    <div>
    {HomesData.map(({id, address,bedrooms, bathrooms, city, state, zipCode, yearBuilt
    })=>{
        return(
           <div key={id} className=" w-[300px] p-6 relative mb-10 ">
      <div>
        <img
          className=" rounded-xl w-full h-auto"
          src="/images/house.jpeg"
          alt="house"
        ></img>
        <div className="bg-slate-50 rounded-xl p-4 absolute bottom-[-15%] w-[84%]">
          <div className="flex flex-col mb-2">
            <div className="flex flex-row justify-between ">
              <h1 className="font-black tracking-wider">{address}</h1>
              <div className="bg-[#66c69c] flex items-center justify-center w-[20px]">
                <BsChevronRight className="text-[white] " />
              </div>
            </div>
            <p className="text-[gray]">{city}, {state} {zipCode}</p>
          </div>
          <div className="flex  flex-row justify-between">
            <div className="flex flex-row justify-evenly items-center w-[30px]  ">
              <FaBed />
              <p>{bedrooms}</p>
            </div>
            <div className="flex flex-row justify-evenly items-center  w-[50px] ">
              <BsFillCalendarEventFill />
              <p>{yearBuilt}</p>
            </div>
            <div className="flex flex-row justify-evenly items-center w-[30px] ">
              <FaToilet />
              <p>{bathrooms}</p>
            </div>
            <div className="flex flex-row justify-evenly items-center w-[30px] ">
              <BsFillHouseDoorFill />
              <p>2</p>
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
