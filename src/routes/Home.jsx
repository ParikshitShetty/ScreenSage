import React,{useState, Suspense} from 'react'
import NavBar from '../components/NavBar';
import { useAtom } from 'jotai';
import { modalObj, searchResults } from '../jotai/Store';
import Carousel from '../components/Carousel';
import Loading from '../utilities/Loading';
import SeriesRenderer from '../components/renderer/SeriesRenderer';
import MovieRenderer from '../components/renderer/MovieRenderer';
import AnimeRenderer from '../components/renderer/AnimeRenderer';
import { AnimatePresence } from 'framer-motion';
import Modal from '../modal/Modal';


const Home = () => {
    const [apiResults, setApiResults] = useAtom(searchResults);

    const [modalOpen, setModalOpen] = useState(false);

    const [modalItem,setModalItem] =  useAtom(modalObj)

    const close = () => {
      setModalOpen(false);
      setModalItem({});
    }

    const open = (element) =>{
      setModalOpen(!modalOpen);
      setModalItem(element);
    } 
    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=faa9a7ed`;
    // const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=faa9a7ed`;
    // const url = `http://www.omdbapi.com/?t=star+wars&plot=full&apikey=faa9a7ed`;

  return (
    <>
        <div className='flex flex-col items-center'>
          <NavBar/>
          <Suspense fallback={<Loading/>}>
            <Carousel/>
            <div className='w-[90vw]'>
              <MovieRenderer open={open}/>
              <SeriesRenderer open={open}/>
              <AnimeRenderer open={open}/>
            </div>
          </Suspense>
          <AnimatePresence initial={false} mode="wait" onExitComplete={()=>null}>
            {modalOpen && 
            <Modal modalOpen={modalOpen} handleClose={close}/>}
          </AnimatePresence>
        </div>
    </>
  )
}
export default Home;