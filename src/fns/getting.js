import axios from "axios"
// import { useState } from "react"



export const getPosts = async cat => {
  const res = await axios('https://fenikstour.ru/feniks-rest/wp-json/wp/v2/posts?categories=' + cat + '&_embed')
  console.log(res.data)

  return res.data
}



// export const getMedia = async idPost => {
//   const res = await axios('https://fenikstour.ru/feniks-rest/wp-json/wp/v2/media?parent=' + idPost)
//   return res.data
//   // console.log(res.data)
// }


/*
export function usePostAssigment() {
  const [loading, setLoading] = useState(false)
  const [toursInCat, setToursInCat] = useState([])
  const [postsCat, setPostsCat] = useState()

  setLoading(true)

  const getToursInCat = async () => {
    const res = await getPosts(26)
    const tours = res.map(k => {
      return {
        id: k.id,
        title: k.title.rendered,
        content: k.content.rendered,
        picture: k.featured_media !== 0 ? k?._embedded['wp:featuredmedia']['0'].source_url : 0,
        // picture: k.featured_media !== 0 ? k?._embedded['wp:featuredmedia']['0']?.media_details.sizes.medium_large?.source_url : 0,
        price: k.acf.price || 0,
        gorod: k.acf.gorod,
        phone: k.acf.telefon
      }
    })
    setToursInCat(tours)
  }

  function test01(){
    console.log('PRIVET')
  }


  // useEffect(()=>{
  //   getToursInCat()
  // }, [])

  

  setLoading(true)

  return {test01, toursInCat, loading}
}
*/