import '../styles/Home.css'
import { Cards } from './Cards'
import { News } from './News'
import { Banner } from './Banner'
import { HeaderMobile } from './HeaderMobile'
import { Footer } from './Footer'
import { Header } from './Header'

export default function Home () {
    return (
        <main className='main-index'>        
            <HeaderMobile />
            <Header />
            <Cards />
            <Banner />
            <News />
            <Footer />
        </main>
    )
}
