import React, { useEffect, useState } from 'react'
import '../App.css'
import { useTest } from '../fns/castomFuncs'
import logo1 from '../img/1061165_journey_icon.svg'
import logo2 from '../img/1076695_airport_baggage_journey_luggage_suitcase_icon.svg'
import logo3 from '../img/adventure_map_mountains_tap_tourism_icon.svg'
import logo4 from '../img/backpack_backpacker_hiking_tourist_travel_icon.svg'
import logo5 from '../img/bus_journey_transport_travel_trip_icon.svg'




const TopPanel = ({data}) => {
  const {setToursInCtg, setLoading} = data
  const [leftPm, setLeftPm] = useState('-5rem')
  const [elem, setElem] = useState(null)
  const [punktMenu, setPunktMenu] = useState(0)
  
  const {getTours, fitTours} = useTest()


  async function one(k) {
    setLoading(true)
    const req = await getTours(k)
    const {data, maxTours, maxPages} = req
    const fitted = await fitTours(data)
    await setToursInCtg(fitted)
    setLoading(false)
  }

  useEffect(() => {
    one(26)
  }, [])


  const tourCategories = [
    {
      title: 'Многодневные туры',
      cat: 26
    },
    {
      title: 'Путешествие за два дня',
      cat: 27
    },
    {
      title: 'Школьные путешествия',
      cat: 25
    },
    {
      title: 'Однодневные туры',
      cat: 28
    },
    {
      title: 'По святым местам',
      cat: 29
    }
  ]

  const logoNames = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
  ]


  const top_vkladka_string = {
    marginLeft: 0,
    transition: 'all .3s'
  }

  const changeStyle = ind => {
    setLeftPm(0)
    setElem(ind)
  }

  const changeStyleBack = () => {
    setLeftPm('-5rem')
    setElem(null)
  }
  

  const clickHandle = async (ind = 2) => {
    one(tourCategories[ind].cat)
    setPunktMenu(ind)
  }



  



  
  return (
    <div className="tours_top_of_content">

      {tourCategories.map((tourCat, ind) => (
        <div className="top_vkladka" 
          onMouseOver={()=>changeStyle(ind)}
          onMouseOut={changeStyleBack}
          onClick={()=> clickHandle(ind)}
          style={{background: punktMenu === ind ? '#9abc66' : 'none'}}
          key={ind}>
          <img src={logoNames[ind]} className="top_vkladka_icon" style={{
              left: elem === ind ? leftPm : '-5rem'
            }} alt={ind} />
          <span style={{...top_vkladka_string,
            marginLeft: elem === ind ? 0 : '-22px'
          }}>{tourCat.title}</span>
        </div>
      ))}

    </div>
  )
}

export default TopPanel