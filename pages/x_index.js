import Layout from "../components/Layout";
import Header from "../components/Header";
import Carousel2 from "../components/Carousel2";
import Sambutan from "../components/Sambutan";
import Tagline from "../components/Tagline";
import LatestNews from "../components/LatestNews";
import Agenda from "../components/Agenda";
import GalleryDepan from "../components/GalleryDepan";
import Footer from "../components/Footer";
import CarouselMain from "../components/CarouselMain";
import { useEffect } from "react";
import AOS from 'aos';
import Article from "../components/Article";
import NextNProgress from "nextjs-progressbar";

// const Index = ({ general, menu, slides, sambutan, headline, agenda, news, galleries, article }) => {
//     useEffect(() => {
//         AOS.init({
//             duration: 400,
//             easing: "ease-in-out",
//             once: true,
//             mirror: false
//         });
//     }, [])
//     console.log(menu['bottom-1'])
//     return (
//         <Layout pageTitle={general.organization}>
//             <Header
//                 general={general}
//                 menus={menu?.main}
//             />
//             <CarouselMain slides={slides} />
//             <Sambutan sambutan={sambutan} />
//             <Tagline headline={headline} />
//             <section>
//                 <div className="container">
//                     <div className="row recent-blog-posts">
//                         <div className="col-md-8 col-sm-12">
//                             <LatestNews news={news} />
//                         </div>
//                         <div className="col-md-4 col-sm-12">
//                             <Agenda agenda={agenda} />
//                             <div className="mb-4"></div>
//                             <Article article={article} />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <GalleryDepan galleries={galleries} />
//             <Footer
//                 menu_bottom_1={menu['bottom-1']}
//                 menu_bottom_2={menu['bottom-2']}
//                 general={general} />
//         </Layout>
//     )
// }

// This gets called on every request
// export const getServerSideProps = async () => {
//     // Fetch data from external API
//     const res = await fetch(`${process.env.API_URL}/public/general?data=general,menu,slides,sambutan,headline,agenda,news,gallery,article`)
//     const resJson = await res.json()
//     const public_data = resJson.result

//     const general = public_data.general
//     const menu = public_data.menu
//     const slides = public_data.slides
//     const sambutan = public_data.sambutan
//     const headline = public_data.headline
//     const agenda = public_data.agenda
//     const news = public_data.news
//     const galleries = public_data.galleries
//     const article = public_data.articles

//     return { props: { general, menu, slides, sambutan, headline, agenda, news, galleries, article } }
// }

const Index = () => {
    return (
        <div>Index Page</div>
    )
}

export default Index;