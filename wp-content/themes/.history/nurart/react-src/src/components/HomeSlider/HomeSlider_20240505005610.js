import s from './HomeSlider.module.css'
import "../../public/assets/slickSlider/slick.css";
import "../../public/assets/slickSlider/slick-theme.css";
import Slider from "react-slick";
import HomeSlide from './HomeSlide';

function HomeSlider(props) {
   
    
    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        arrows: false,
    }

    return (

        <div className={s.slider}>
            <Slider {...settings} >
                {
                    props.urls.map(item => <HomeSlide url={item} />)
                }
            </Slider>
        </div>

    )
}

export default HomeSlider;