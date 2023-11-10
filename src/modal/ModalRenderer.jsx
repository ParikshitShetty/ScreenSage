import { useAtom } from 'jotai'
import React from 'react'
import { modalObj } from '../jotai/Store'


const ModalRenderer = () => {
    const [modalItem] = useAtom(modalObj)
  return (
    <>
        <div className='flex justify-end h-[350px]'>
            <div className='flex flex-col justify-evenly items-center'>
            <h1 className='text-xl font-semibold'>{modalItem.Title}</h1>
            <p className=' text-justify mx-3'>PLOT: {modalItem.Plot}</p>  
            <p className='text-md font-semibold'>Genre: {modalItem.Genre}</p>
            <p className='text-md font-semibold'>Actors: {modalItem.Actors}</p>
            <p className='text-md font-semibold'>Awards: {modalItem.Awards}</p>
            </div>
            
            <div className=' flex justify-center items-center basis-11/12 rounded-lg overflow-hidden'>
                <img src={modalItem.Poster} alt="" className='h-[300px] w-[213px] transition hover:scale-110' />
            </div>
        </div>
    </>
  )
}
export default ModalRenderer