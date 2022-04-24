import styled from "styled-components";
import styledComponents from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderWrapper = styled.div`
height: auto;

width: 100%;
margin-top: 35px;

& .topic{
    margin-top: 19px;
    margin-right: 25px;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 1px 1px 3px #bbbbbb;
    color: #585353;
   
}

& .movie{
    background-color: white;
    margin: 0 7px;
    width: 90% !important;
    border-radius: 19px;
    min-height: 395px;
    display: flex !important;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 7px #bdbdbd;

    & img{
        padding: 0;
        margin: 0 auto;
        border-radius: 17px;
        margin-top: 9px;
        width: 89%;
    }
   & .title{
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        margin-bottom:0;
    }
    & .subtitle{
        width: 95%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
       margin-left: 8px;
       margin-right: 8px;
    }
    & .wrpper{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        & .imdb{

            & span{
                font-size: 13px;
                background-color: #F5C518;
                padding: 4px;
                border-radius: 8px;
                font-weight: bold;
                margin: 6px 8px;
            }
           
        }
    }
}

& .slick-arrow{
    display:none !important;
}

`

const MovieSlider = ({ items, name }) => {

    console.log(items, 'keo doekdoe dekoded dkeode ');

    const SliderItem = items.items.slice(0, 12).map(el => {
        return <div className="movie">
            <img src={el.image} />
            <p className="title">{el.title}</p>
            {el?.crew?.length > 1 && <p className="subtitle">{el.crew}</p>}
            {el?.runtimeStr?.length > 1 &&  <p className="subtitle">{el.runtimeStr}</p>}
           
            <div className="wrpper">
                <p className="imdb">
                    <span>IMDB</span>
                    {el.imDbRating}</p>
                <p>{el.year}</p>
            </div>
        </div>
    })


    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 2800,
        cssEase: "linear",
        pauseOnHover: true,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              }
        ]
    }

    return <SliderWrapper>
        <p className="topic">Best {name}</p>
        <Slider {...setting}>
            {
                SliderItem
            }
        </Slider>
    </SliderWrapper>
}

export default MovieSlider