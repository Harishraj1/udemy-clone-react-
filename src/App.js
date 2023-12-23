//components
import Navbar from "./Navbar"
import Categories from "./Cata";
import Saleimage from "./Sale-image";
import Recommend from "./Recommend"
import Topic from './Topics';
import Popular from './Popular';
import Footer from './Footer';

function App()
{
    return(
        <>
            <Navbar></Navbar>
            <Categories></Categories>
            <Saleimage></Saleimage>
            <Recommend></Recommend>
            <Topic></Topic>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default App
