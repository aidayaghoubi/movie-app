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
    margin:15px 7px;
    width: 90% !important;
    border-radius: 19px;
    min-height: 290px;
    display: flex !important;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: 1px 1px 7px #bdbdbd;
    overflow: hidden;

    & .animation{
        max-height: 0px;
        position: absolute;
        height: 122px;
        bottom: 0;
        transition: 0.4s;
        background-color:#fff; 

        & .action{
            margin: 0 auto;
            display: flex;
            justify-content: center;
            height: 33px;

            & button {
                text-align: center;
                margin: 0 auto;
                padding: 6px 0;
                width: 95%;
                background-color: #41d492;
                border: none;
                border-radius: 14px;
                font-size: 15px;
                color: #fff;
                text-shadow: 1px 1px 1px #0006;
            }
        }
    }
    &:hover{
        & .animation{
        max-height:400px;
        background-color:#fff; 
        }   
        & .title{
            transform: translateY(-120px);
            background-color: #fff;
        }
        & img{
            width: 81%;
        }
    }

    & img{
        padding: 0;
        margin: 0 auto;
        border-radius: 17px;
        margin-top: 9px;
        width: 89%;
        transition: 0.4s;
    }
   & .title{
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        margin-bottom:0;
        margin-bottom: 0px;
        padding: 10px 0;
        transition: 0.4s;
        background-color: #fff;
        width: 100%;
    }
    & .subtitle{
        padding: 0 10px;
        color: #524f4f;
        text-align: center;
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



    const SliderItem = items.items.slice(0, 12).map((el, i) => {
        return <div className="movie" key={i}>
            <img src={el.image} />
            <p className="title">{el.title}</p>

            <div className="animation">
                {el?.crew?.length > 1 && <p className="subtitle">{el.crew}</p>}
                {el?.runtimeStr?.length > 1 && <p className="subtitle">{el.runtimeStr}</p>}
                <div className="action">
                    <button>watch online</button>
                </div>
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
        padding: "15px",
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