import React, { useEffect } from 'react'
import style from '../../styles/Card.module.css';
import Up from '../../constant/icons/up';
import { useAppSelector, useAppDispatch } from '../../app/hooks/hooks';
import { increment,decrement,deleteLink } from '../../features/link/linkSlice';
import Down from '../../constant/icons/down';
interface LinkUrl {
  id:string,
  name: string,
  url: string,
  point: number
}
interface ICardProps {
  link: LinkUrl
}

 

const Card: React.FC<ICardProps> = ({link}) =>{
 
  const dispatch = useAppDispatch()


  const handleUp =(id:string)=>{  
      dispatch(increment(id))
  }

  const handleDown =(id:string)=>{
    dispatch(decrement(id))
  }

  const handleDelete =(id:string)=>{
    dispatch(deleteLink(id))
  }
 useEffect(() => {
 
}, [])

  return (
    <main className={style.container}>
        <div className={style.card}>
        <div className={style.left}>{link.point} Point</div>
        <div className={style.right}>
            <h2>{link.name}</h2>
            <div className={style.url}>{link.url}</div>
            <div className={style.buttonGroup}>  
                    <div className={style.buttonUp} onClick={() => handleUp(link.id)} >Up
                        <Up/>
                    </div>
                    <div className={style.buttonDown} onClick={()=> handleDown(link.id)}>Down
                    <Down/>
                    </div>
            </div>
            </div>
           
            </div>
            <button className={style.deleteButton} onClick={()=> handleDelete(link.id)}>Delete</button>
    </main>
  )
}

export default Card