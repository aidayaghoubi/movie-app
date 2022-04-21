import SearchMovie from "../components/search/search"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import image1 from '../assets/b909d49ac52c809a011bc45825711dfa.png'
import image2 from '../assets/378a7e8e0eb738639e211130b4d56c83.png'
import image3 from '../assets/ed64345f93aeab5df8f31043a2978b95.png'

const Home = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    console.log("home is calles")
    return <>
    <p>hi its home</p>
    <AutoplaySlider 
        cssModule={AwesomeSliderStyles}
        play={true}
        interval={6000}
        buttons={false}
        bullets={false}
        className={sliderrr}
        >
    <div >
        <img src={image1}/>
    </div>
    <div data-src={image2} />
    <div data-src={image3} />
  </AutoplaySlider>
    <SearchMovie></SearchMovie>
    </>
}

export default Home