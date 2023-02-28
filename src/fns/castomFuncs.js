import axios from "axios";
import { useEffect, useState } from "react";


export function useTest() {
  // const [toursInCtg, setToursInCtg] = useState([])

  const getTours = async (cat=25) => {
    const res = await axios('https://fenikstour.ru/feniks-rest/wp-json/wp/v2/posts?per_page=8&categories=' + cat + '&_embed')
    // console.log(res.headers, 'vsego: ', res.headers['x-wp-total'], 'pages: ', res.headers['x-wp-totalpages'], typeof +res.headers['x-wp-totalpages'])
    const maxTours = +res.headers['x-wp-total']
    const maxPages = +res.headers['x-wp-totalpages']
    const data = res.data

    console.log('GOT: ', maxTours, maxPages)
    
    return {data, maxTours, maxPages} // ниже не выполняется
    // return res.data // ниже не выполняется
    // setToursInCtg(tours)
  }


  const fitTours = m => {
    const tours = m.map(k => {
      return {
        id: k.id,
        title: k.title.rendered,
        content: k.content.rendered,
        picture: k.featured_media !== 0 ? k?._embedded['wp:featuredmedia']['0']?.source_url : 0,
        price: k.acf.price || 0,
        gorod: k.acf.gorod,
        phone: k.acf.telefon
      }
    })
    // setToursInCtg(tours)
    return tours
  }


  // useEffect(()=>{
  //   getTours()
  // }, [])

  return {getTours, fitTours}
}