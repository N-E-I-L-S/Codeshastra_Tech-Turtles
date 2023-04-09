import React from 'react'
import Three1 from './Three1'

const VirtualHouse = () => {
    return (
        <>
             <div className='w-screen h-screen '>
            <Three1 />
        </div>
        <div>
        <a  href='http://10.120.109.41:8080/' className='fixed bottom-10 p-3 m-10 btn bg-primary rounded-lg shadow-lg'>See the finished Model -&gt;</a>
        </div>
        </>
       
    )
}

export default VirtualHouse
