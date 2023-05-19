import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className='text-7xl'>My AI Blog</h1>
            <h2 className='mt-5 md:mt-2'>
                Welcome to your Favorite {" "}
                <span className="underline decoration-2 decoration-primary-color">
                    Artificial Intelligence
                </span> {" "}
                Blog
            </h2>
        </div>

        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            Welcome to the AI Blog, where we share the latest news, insights and tips on artificial intelligence and related topics. Our goal is to inform, inspire and engage you with the amazing world of AI. Join us and subscribe to our newsletter to get the latest updates and exclusive content.
        </p>
    </div>
  )
}

export default Banner