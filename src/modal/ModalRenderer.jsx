import { useAtom } from 'jotai'
import React from 'react'
import { modalObj } from '../jotai/Store'


const ModalRenderer = () => {
    const [modalItem, setModalItem] = useAtom(modalObj)
    console.log(modalItem)
  return (
    <>
        <div className='flex h-[350px]'>
            <div className='flex flex-col justify-evenly items-center'>
            <h1 className='text-lg font-semibold'>{modalItem.Title}</h1>
            <p>PLOT: {modalItem.Plot}</p>  
            <p className='text-md font-semibold'>Genre: {modalItem.Genre}</p>
            <p className='text-md font-semibold'>Actors: {modalItem.Actors}</p>
            <p className='text-md font-semibold'>Awards: {modalItem.Awards}</p>
            </div>
            
            <div className=' flex justify-center items-center basis-5/6 rounded-lg overflow-hidden'>
                <img src={modalItem.Poster} alt="" className='h-[300px] w-[213px] transition hover:scale-110' />
            </div>
        </div>
    </>
  )
}
export default ModalRenderer