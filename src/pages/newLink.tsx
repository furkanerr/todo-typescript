import React,{useState} from 'react';
import Header from '../components/header/header';
import { useAppSelector, useAppDispatch } from '../app/hooks/hooks'
import {addLink} from '../features/link/linkSlice';
import style from '../styles/NewLink.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function NewLink() {

  const linkRedux = useAppSelector((state) => state.links.linkUrl);
  const dispatch = useAppDispatch()
  const [name,setName] = useState('');
  const [url,setUrl] = useState('');
  
  let point  = 0;
  
  const handleClick = () => {
    console.log(uuidv4());
    if(name.length > 0 && url.length > 0){
      let id = uuidv4();
      dispatch(addLink({id, name,url,point}))
      console.log(linkRedux)
    }
  
  }
   

  return (
    <div className={style.Container}>
        <Header/>
        <div style={{width:'45%'}}>
          <Link style={{textDecoration:'none'}} to={'/'}>
        <div className={style.backToHome}>  Back To Home </div>
        </Link>
        <header>
            <h1 style={{color:' #566787'}}>Add New Link</h1>
        </header>
        </div>
        <div className={style.FormContainer}>
            <form className={style.form}>
            <div className={style.input}>
            <label className='labelName' >Link Name</label>
            <input className='inputName' onChange={e => setName(e.target.value)} type='text' value={name}  placeholder='Link Name' />
            </div>
            <div className={style.input}>
            <label className='labelUrl'>Link URL</label>
            <input className='inputUrl' onChange={e => setUrl(e.target.value)} type='text' value={url} placeholder='Link URL' />
            </div>
            <div className={style.submitButton} onClick={handleClick}>Add</div>
            </form>
            </div>
    </div>
  )
}

export default NewLink