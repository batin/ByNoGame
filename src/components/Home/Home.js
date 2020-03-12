import React, { useEffect, useContext } from "react"
import axios from "axios"
import Card from "../Card/Card"
import { GlobalDispatchContext, GlobalStateContext } from "../Context/Context"

const Home = () => {
  const url = "https://picsum.photos/v2/list?page=1&limit=10"
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url)
        res.data.map(item => {
          if (state.items.some(oldItem => oldItem.id !== item.id)) {
            dispatch({ type: "addItem", payload: item })
          }
          if(state.items.length < 10){
            dispatch({ type: "addItem", payload: item })
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
    if(state.items.length < 10){
      getData()
    }
  }, [])

  const getContent = () => {
    return state.items.map(item => {
      return <Card key={item.id} image={item} />
    })
  }

  return <div className="cardContainer">{getContent()}</div>
}
export default Home
