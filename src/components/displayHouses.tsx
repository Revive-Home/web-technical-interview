import { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";

type Homes = {
  id: number,
  address: string,
  fullAddress: string,
  city: string,
  state: string,
  zipCode: number,
  bedrooms: number,
  bathrooms: number,
  yearBuilt: number,
  sqft: number
}

const HouseDisplay: NextPage = () => {
  const [homes, setHomes] = useState<Homes[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchData = async () => {
    try {
      const response = await fetch("/api/fetchHouses")
      if (response.ok) {
        const result = await response.json()
        setHomes(result)
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderCards = (homes: Homes[]) => {
    const cards = homes.map(homes => {
      return (
        <div key={homes.id} className="sm:basis-full lg:basis-1/4 h-[100%] flex flex-col items-center">
          <Image
          width="240"
          height="300"
          alt="House"
          className="rounded-xl"
          src="/house.png"></Image>
          <div className="w-[240px] relative w-full bg-white rounded-xl bottom-12">
            <div className="flex p-4">
              <div className="basis-3/4">
                <p className="font-bold text-l">{homes.address}</p>
                <p className="text-sm text-gray-400">{`${homes.city}, ${homes.state} ${homes.zipCode}`}</p>
              </div>
              <div className="flex justify-center basis-1/4">
                <a className="mt-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 p-1 bg-green-300 rounded">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>  
            <div className="flex justify-evenly">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156, 163, 175)" className="w-4 h-4">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
            </svg>

              <p className="text-xs text-gray-400">{homes.bedrooms}</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156, 163, 175)" className="w-4 h-4">
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-400">{homes.yearBuilt}</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156, 163, 173)" className="w-4 h-4">
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-400">{homes.bathrooms}</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156, 163, 175)" className="w-4 h-4">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <p className="text-xs text-gray-400">{homes.sqft} <span className="text-[0.5rem]">sq. ft</span></p>
            </div>
          </div>
        </div>
        )
      })
      return cards
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-white border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...</span>
        </div>
      </div>
    )
  } else {
  return (
    <div className="flex flex-wrap justify-center sm:w-full lg:w-[80%] m-auto pt-8">
      {renderCards(homes)}
      </div>
    )
  }
}

export default HouseDisplay;