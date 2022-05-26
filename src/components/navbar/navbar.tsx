import React from 'react'
import { Link } from 'react-router-dom';
import style from '../../styles/Navbar.module.css';
import {orderByName,orderByPoint} from '../../features/link/linkSlice'
import { useAppDispatch } from '../../app/hooks/hooks';
function Navbar() {
  const dispatch = useAppDispatch()
  const handleOrderByName = () => {
    dispatch(orderByName())
  }
  const handleOrderByPoint = () => {
    dispatch(orderByPoint())
  }
  return (
    <main className={style.container}>
        <div className={style.left}>Submit a Link</div>
        <div className={style.OrderByPoint} onClick={handleOrderByPoint}>Order By Point</div>
        <div className={style.OrderByPoint} onClick={handleOrderByName}>Order By Name</div>
        <div className={style.right}>
           
            <Link to={'/newLink'}>
            <div className={style.addNewLink}>Add New Link</div>
            </Link>
        </div>

    </main>
  )
}

export default Navbar