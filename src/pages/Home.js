import Contact from "../components/Contact";
import Custom from "../components/Custom";
//import Featured from "../components/Featured";
import Presentation from "../components/Presentation";
import '../styles/home.css'

const Home = () => {
    return (
        <>
            <Presentation />
            <Custom />
            <Contact />
        </>
    )
}

export default Home;