import React,{useState, useEffect, Suspense, Fragment, useRef} from 'react'
import { useAtom } from 'jotai';
import { modalObj } from '../jotai/Store';
import { AnimatePresence } from 'framer-motion';
import useAnimeFetch from '../hooks/useAnimeFetch';
import useMovieFetch from '../hooks/useMovieFetch';
import useSeriesFetch from '../hooks/useSeriesFetch';
import useLatestFetch from '../hooks/useLatestFetch';

import Carousel from '../components/Carousel';
import Loading from '../utilities/Loading';
import Modal from '../modal/Modal';
import HomeRenderer from '../components/renderer/HomeRenderer';


const Home = () => {
    const [render,setRender] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [modalItem,setModalItem] =  useAtom(modalObj);

    const latest = useLatestFetch(6);
    const movies = useMovieFetch(6);
    const series = useSeriesFetch(6);
    const anime = useAnimeFetch(6);

    const res = [
      {arr : latest, name : "Latest", link : '/movies'},
      {arr : movies, name : 'Movies', link : '/movies'},
      {arr : series, name : 'Series', link : '/series'},
      {arr : anime, name : 'Anime', link : '/anime'},
    ]

    const close = () => {
      setModalOpen(false);
      setModalItem({});
    }

    const open = (element) =>{
      setModalOpen(!modalOpen);
      setModalItem(element);
    } 

    useEffect(() => {
      if (latest.length === 6 && movies.length === 6 && series.length === 6 && anime.length === 6) {
        setRender(true);
      }
    }, [anime])

  return (
    <>
        <div className='flex flex-col items-center'>
          {render ?
          <Suspense fallback={<Loading/>}>
            <Carousel/>
            <div className='w-[90vw]'>
              {res.map((elem,index)=>(
                <Fragment key={index}>
                  <HomeRenderer results={elem} open={open}/>
                </Fragment>
              ))}
            </div>
          </Suspense>
          : <Loading/>}
          <AnimatePresence initial={false} mode="wait" onExitComplete={()=>null}>
            {modalOpen && 
            <Modal modalOpen={modalOpen} handleClose={close}/>}
          </AnimatePresence>
        </div>
    </>
  )
}
export default Home;
// const url = `http://www.omdbapi.com/?i=tt3896198&apikey=faa9a7ed`;
// const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=faa9a7ed`;
// const url = `http://www.omdbapi.com/?t=star+wars&plot=full&apikey=faa9a7ed`;