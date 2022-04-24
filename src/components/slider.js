import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styled from "styled-components";
import picture from '../components/picture.json'

const SliderStyled = styled.div`
height: 354px;
border-radius: 19px;
box-shadow: 1px 1px 5px #d3d2d2;
overflow: hidden;
margin-top: 15px;

& .items{

}

& .awssld__wrapper{
    height:360px;
}

`

const Slider = ({ items }) => {


    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const pictures = picture[items];

    return <SliderStyled>
        <AutoplaySlider
            cssModule={AwesomeSliderStyles}
            play={true}
            interval={3000}
            buttons={false}
            bullets={false}
        >
            <div >
                <img src={pictures[0].image} />
            </div>
            <div data-src={pictures[1].image} />
            <div data-src={pictures[2].image} />
            
        
        </AutoplaySlider>
    </SliderStyled>
}

export default Slider