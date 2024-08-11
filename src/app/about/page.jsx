import Link from "next/link"

export default function page() {
  return (
    <div className='pt-20 max-w-5xl mx-auto'>
      <div className="h-fit bg-black text-white flex flex-col pb-10 pt-10 justify-center items-center w-full mx-auto">

            <h1 className="text-2xl font-semibold font-serif mb-20">Welcome to <span className='text-red-600'>QuizzMaster!</span></h1>
            <div className='xl:flex justify-center items-center'>
            <img src="/about.gif" className="h-80 mx-auto" alt="illustration" />
            <div className="mx-10">
                <p className="font-serif font-semibold text-xl py-2 underline underline-offset-4 text-blue-600">About</p>
                <p className="text-lg pt-3">QuizzMaster is a revolutionary online platform designed exclusively for the students</p>
                <p className="text-lg">Learn different topics and test your knowledge. I would like to make this a community to learn share and grow together </p>

                
            </div>

        </div> 
        </div>
        
    </div>
  )
}
