
import React from 'react'

function page() {
  return (
    <div>
      <div className="min-w-[200px] grid mx-auto gap-5 py-5 m-5 grid-rows-4 grid-flow-col">
        <div className="bg-red-500 text-center row-span-4">Hello 1</div>
        <div className="bg-red-500 text-center col-span-2">Hello 2</div>
        <div className="bg-red-500 text-center">Hello 3</div>
        <div className="bg-red-500 text-center">Hello 4</div>
        <div className="bg-red-500 text-center col-span-2">Hello 5</div>
        <div className="bg-red-500 text-center">Hello 6</div>
        <div className="bg-red-500 text-center ">Hello 7</div>
        <div className="bg-red-500 text-center row-span-4">Hello 8</div>
      </div>


      
    </div>
  )
}

export default page
