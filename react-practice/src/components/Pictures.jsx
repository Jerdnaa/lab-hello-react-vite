import iconOne from "../assets/icon1.png"
import iconTwo from "../assets/icon2.png"
import iconThree from "../assets/icon3.png"
import iconFour from "../assets/icon4.png"
import iconIronhack from "../assets/ironhack.png"
import iconMenu from "../assets/menu.png"

const Pictures = () => {
   return  ( 
    <>
        <nav className="navbar">
            <div className="navLogos">
                <img src={iconIronhack} alt="icon ironhack"/>
                <img src={iconMenu} alt="icon menu"/>
            </div>
            <h1>Say hello to ReactJS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse neque repellat consectetur aperiam, mollitia perspiciatis porro eos asperiores voluptatum possimus quo architecto. Asperiores accusantium, et quibusdam ad quia perspiciatis est?</p>
            <button>Awesome</button>
        </nav>
        
        <div className="logosContainer">
            <div className="singleLogo">
                <img src={iconOne} alt="icon one" />
                <h3>Declarative</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ut voluptates provident culpa! Quam cupiditate aliquid, nam ratione vitae aliquam nisi magnam excepturi sed ducimus officiis enim deserunt? Nesciunt, ratione.</p>
            </div>
            <div className="singleLogo">
                <img src={iconTwo} alt="icon two"/>
                <h3>Components</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod et atque sit excepturi iste inventore pariatur incidunt eos minus corrupti libero, architecto sunt nihil ad natus provident mollitia. Molestias?</p>
            </div>
            <div className="singleLogo">
                <img src={iconThree} alt="icon three"/>
                <h3>Single-Way</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente porro autem odio quisquam numquam non quo adipisci. Distinctio eligendi blanditiis saepe velit eius a dignissimos. Nemo quas facere nostrum.</p>
            </div>
            <div className="singleLogo">
                <img src={iconFour} alt="icon four"/>
                <h3>JSX</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, odio? Ex architecto in ut quidem et eum corrupti alias possimus. Neque sapiente vel laboriosam hic. Vel dolor et voluptas cum.</p>
            </div>
            
        </div>
          
    </> 
    );
}
 
export default Pictures;