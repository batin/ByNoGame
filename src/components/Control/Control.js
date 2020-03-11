import React, {useState, useContext, useRef} from "react"
import { GlobalDispatchContext } from "../Context/Context"
import Img from "gatsby-image"
import ClipLoader from "react-spinners/ClipLoader";
import './Control.scss'
const Control = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const imageRef = useRef(null)
  const imageSize = 500
  const img = {
        id:Date.now(),
        width: 250,
        height: 250,
        src: `https://picsum.photos/${imageSize}`,
        srcSet: ''
      }
  
  const add = () => {
    if(inputValue !== ''){
      setLoading(true)
      const item = {
        author: inputValue,
        download_url: img.src,
        width: imageSize,
        height: imageSize
      }
      dispatch({type:"addItem",payload:item})
      setTimeout(()=> {
        setLoading(false)      
      },1000)
    }
  }
  const handleWrite = (e) => {
    setInputValue(e.target.value)
  }
  if(inputValue !== ''){
    setTimeout(
    () => { setIsEmpty(false) })
  } else {
    setTimeout(
    () => { setIsEmpty(true) })
  }


  return (
    <div className="cardContainer">
      <div className="card addItem">
        <Img 
          ref={imageRef}
          className="image"
          fixed={img} 
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container">
          <p>Author</p>
          <input value={inputValue} onChange={(e) => handleWrite(e)} placeholder="Author Name" type="text"/>
          <button className={isEmpty ? 'disabled' : '' } onClick={add} > { loading ? <ClipLoader size={10} color={"#fff"} /> : 'add' }</button>
        </div>
      </div>
    </div>
  )
}
export default Control
