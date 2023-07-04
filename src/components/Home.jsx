import '../styles/Home.css'
import { Cards } from './Cards'
import { News } from './News'
import { Banner } from './Banner'
import { Profile } from './Profile'

export default function Home () {
    return (
        <main className='main-index'>        
            {/* header */}
            <Cards />
            <Banner />
            <News />
            <Profile />
            {/* footer */}
        </main>
    )
}