import React, { useState } from 'react'
import '../App.css'
import TopPanel from './TopPanel'
import backImg from '../img/e45teryfegfg.png'





const MainBlock = () => {
  const [toursInCtg, setToursInCtg] = useState([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [toursPerPage, setToursPerPage] = useState(8)

  const lastToursIndex = currentPage * toursPerPage
  const firstToursIndex = lastToursIndex - toursPerPage





    // {
      if(loading) return (
        <div className="tours_content_wrapper">

          <TopPanel data={{setToursInCtg, setLoading}} />

          <div className="tours_cards" style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '1.5rem',
          }}>
            <p>ЗАГРУЗКА...</p>
          </div>

        </div>
      )
    // }

  return (
    <div className="tours_content_wrapper">

      <TopPanel data={{setToursInCtg, setLoading}} />

      <div className="tours_cards">

        {toursInCtg.length < 1 &&
          <p style={{color: '#fff'}}>В этой категории пока нет туров.</p>
        }

        {toursInCtg.map(t => (
          <div className="tour_card shad" key={t.id} 
            title={t.title}
            style={{
              background: t.picture !== 0 ? `url(${t.picture}) center / cover` 
              : `url(${backImg}) center / contain no-repeat`,
            }}>
            <div className="tour_card_info">
              <h3 dangerouslySetInnerHTML={{ __html: t.title }} />
              <p>{t.price !== 0 ? t.price + 'p' : 'Цену уточняйте'}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default MainBlock