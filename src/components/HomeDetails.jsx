/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaToilet } from 'react-icons/fa'
import { MdBed,MdSquareFoot } from 'react-icons/md'

const HomeDetails = () => {
  const router = useRouter()
  const {address, imageUrl,bathrooms,bedrooms} = router.query
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] md:h-[40vh] relative overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <img
          className="absolute z-1 w-full h-full object-cover"
          src={imageUrl}
          alt="/"
          priority={true}
        />
        <div className="absolute top-[65%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] z-10 p-2 text-[white]">
          <h2>{address}</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-1 gap-8 pt-8">
        <div className="col-span-4">
          <h1>Home Overview</h1>
        </div>
        <div className="col-span-4 sm:col-span-1 md:col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
          <p className='flex flex-row items-center'><MdBed className="m-2" /> {bedrooms} Bedrooms</p>
          <p className='flex flex-row items-center'><FaToilet className="m-2" /> {bathrooms} Baths</p>
          <p className='flex flex-row items-center'><MdBed className="m-2" /> {bedrooms} SquareFeet</p>
          <FaToilet className="m-2" />
          <MdSquareFoot className="m-2" />
        </div>
      </div>
      <Link href="/UserPage" className="ml-5">
        <p className="underline cursor-pointer  pl-9 pb-4">Back</p>
      </Link>
    </div>
  )
}

export default HomeDetails
