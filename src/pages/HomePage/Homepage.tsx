import React,{useEffect,useState} from 'react'
import { useAppSelector } from '../../app/hooks/hooks'
import Card from '../../components/Card/Card'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Pagination from '../../components/pagination/Pagination'
import style from '../../styles/Homepage.module.css'


interface LinkUrl 
  {
    id:string,
    name: string,
    url: string,
    point: number
  }

function Homepage() { 

  const stateLink = useAppSelector((state) => state.links.linkUrl);
  const [links,setLinks] = useState <LinkUrl[]>([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [linksPerPage] = useState(2);
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = links.slice(indexOfFirstLink,indexOfLastLink);
  useEffect(() => {
    setLinks(stateLink)
    console.log("stateLink",stateLink)
  },[stateLink])

 
  
  return (
    <div>
            <header>
                <Header/>
            </header>
            <main className={style.main}>
                <div className={style.container}>
            <Navbar/>
            {
              
              currentLinks.map((link,index) => {
                return <Card key={index} link={link}/>
              })
            }  
            </div>
            <Pagination  linkPerPage={linksPerPage}  totalLinks={links.length}  setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </main>
        
    </div>
  )
}

export default Homepage