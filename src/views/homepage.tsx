import { Carousel } from "react-responsive-carousel"
import NavBar from "./navBar"
import Footer from "./footer"
import Caro1 from "../images/caro1.jpg"
import Caro2 from "../images/caro2.jpg"
import Caro3 from "../images/caro3.jpg"

function Homepage(){
    return(
        <>
            <NavBar />
            <div className="carousel">
                <Carousel autoPlay infiniteLoop showStatus={false}>
                    <div>
                        <img alt="" src={Caro1} />
                    </div>
                    <div>
                        <img alt="" src={Caro2} />
                    </div>
                    <div>
                        <img alt="" src={Caro3} />
                    </div>
                </Carousel>
            </div>
            <Footer />
        </>
    )
}

export default Homepage