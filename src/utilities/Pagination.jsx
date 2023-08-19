import React,{useState} from 'react'

const Pagination = () => {

    const [currentPage,setCurrentPage] = useState(1)

    const [postsPerPage,setPostsPerPage] = useState(2)

    const lastPostIndex = currentPage * postsPerPage;

    const firstPostIndex = lastPostIndex - postsPerPage;

    // let currentPosts = apiResp.data.slice(firstPostIndex,lastPostIndex)

    // let filteredPosts = apiResp.filtered.slice(firstPostIndex,lastPostIndex)

    let pages = []
    for(let i = 1;i <= Math.ceil(10/postsPerPage);i++){
      pages.push(i)
    }

  return (
    <>
    <div className='flex'>
      {pages.map((page)=>(
        <p className='mx-auto'>{page}</p>
      ))}
    </div>
    
    </>
  )
}

export default Pagination