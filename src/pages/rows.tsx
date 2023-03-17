import { useState } from "react";
import Image from "next/image";
import homeData from '../data/homes.json';

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

const Rows = () => {
    const [homes] = useState<Homes[]>(homeData)

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
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <p className="text-xs text-gray-400">{homes.bedrooms}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156, 163, 175)" className="w-4 h-4">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <p className="text-xs text-gray-400">{homes.yearBuilt}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156, 163, 175)" className="w-4 h-4">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <p className="text-xs text-gray-400">{homes.bathrooms}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156, 163, 175)" className="w-4 h-4">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <p className="text-xs text-gray-400">{homes.sqft}</p>
              </div>
            </div>
          </div>
          )
        })
        return cards
    }

    return (
        <div className="flex flex-wrap justify-center sm:w-full lg:w-[80%] m-auto pt-8">
          {renderCards(homes)}
        </div>
    )
}

export default Rows;