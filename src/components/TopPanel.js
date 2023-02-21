import React, { useState } from 'react'
import '../App.css'
import logo1 from '../img/1061165_journey_icon.svg'
import logo2 from '../img/1076695_airport_baggage_journey_luggage_suitcase_icon.svg'
import logo3 from '../img/1076695_airport_baggage_journey_luggage_suitcase_icon.svg'
import logo4 from '../img/1076695_airport_baggage_journey_luggage_suitcase_icon.svg'
import logo5 from '../img/1076695_airport_baggage_journey_luggage_suitcase_icon.svg'




const TopPanel = () => {
  const [leftPm, setLeftPm] = useState('-5rem')
  const [titleString, setTitleString] = useState(0)
  const [elem, setElem] = useState(null)
  const [punktMenu, setPunktMenu] = useState(0)

  const tourCategories = [
    'Многодневные туры',
    'Путешествие за два дня',
    'Школьные путешествия',
    'Однодневные туры',
    'По святым местам'
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
    setTitleString(0)
    setElem(ind)
  }

  const changeStyleBack = () => {
    setLeftPm('-5rem')
    setTitleString('-28px')
    setElem(null)
  }

  const clickHandle = ind => {
    setPunktMenu(ind)
  }



  
  return (
    <div className="tours_top_of_content">

      {tourCategories.map((tourCat, ind) => (
        <div className="top_vkladka" 
          onMouseOver={()=>changeStyle(ind)}
          onMouseOut={changeStyleBack}
          onClick={()=> clickHandle(ind)}
          style={{background: punktMenu == ind ? '#9abc66' : 'none'}}
          key={ind}>
          <img src={logoNames[ind]} className="top_vkladka_icon" style={{
              left: elem == ind ? leftPm : '-5rem'
            }} alt={ind} />
          <span style={{...top_vkladka_string,
            marginLeft: elem == ind ? 0 : '-22px'
          }}>{tourCat}</span>
        </div>
      ))}

    </div>
  )
}

export default TopPanel