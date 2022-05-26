import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../styles/Header.module.css'
function Header() {
  return (
    <main className={style.Container}>
        <header className={style.Header}>
        <Link style={{textDecoration:'none'}} to={'/'}>
           <div className={style.left}><span>hepsiburada</span>.com </div>
           </Link>
            <div className={style.right}><b>Link</b> Vote Challange</div>
        </header>

    </main>
  )
}

export default Header