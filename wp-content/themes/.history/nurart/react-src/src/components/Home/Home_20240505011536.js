
import s from './Home.module.css'
import HomeSlider from '../HomeSlider/HomeSlider';
import HomeFeatures from '../HomeFeatures/HomeFeatures';
import Counter from '../Counter/Counter';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CartSlider from '../CartSlider/CartSlider';
import FeedbackSlider from '../Feedback/FeedbackSlider';
import { Helmet } from 'react-helmet';

export default function Home() {

    let [counters, inView] = useInView({
      threshold: 0.4,
      triggerOnce: true
    });
  
    useEffect(() => {
        inView = false;
    }, []);
  


    let imgUrls = ['public/assets/img/slide1.png', 'public/assets/img/slide2.png', 'public/assets/img/slide3.png'];
    let features = [
        {
            text: 'Keyfiyyət',
            url: 'public/assets/img/qualityIcon.svg'
        },
        {
            text: 'Müasir Dizayn',
            url: 'public/assets/img/designIcon.svg'
        },
        {
            text: 'Texnologiyalar',
            url: 'public/assets/img/technologiesIcon.svg'
        }
    ];

    const servicesSlider = [
        {
            url: 'public/assets/img/servicesSlider/service1.png',
            title: 'Poligrafiya',
            btnLink: 'zxc'
        },
        {
            url: 'public/assets/img/servicesSlider/service2.png',
            title: 'Möhürlər',
            btnLink: 'zxc'
        },
        {
            url: 'public/assets/img/servicesSlider/service3.png',
            title: 'Plastik kartlar',
            btnLink: 'zxc'
        }
        ,
        {
            url: 'public/assets/img/servicesSlider/service4.png',
            title: 'Vinil, Banner çapı ',
            btnLink: 'zxc'
        }
        ,
        {
            url: 'public/assets/img/servicesSlider/service5.png',
            title: 'Promo məhsullar',
            btnLink: 'zxc'
        }
        ,
        {
            url: 'public/assets/img/servicesSlider/service6.png',
            title: 'Lazer işləri',
            btnLink: 'zxc'
        }

    ];

    const clientSlider = [
        {
            url: 'public/assets/img/clientSlider/slide1.png' 
        },
        {
            url: 'public/assets/img/clientSlider/slide2.png' 
        },
        {
            url: 'public/assets/img/clientSlider/slide3.png' 
        },
        {
            url: 'public/assets/img/clientSlider/slide4.png' 
        },
        {
            url: 'public/assets/img/clientSlider/slide5.png' 
        },
        {
            url: 'public/assets/img/clientSlider/slide6.png' 
        },
        {
            url: 'public/assets/img/clientSlider/slide7.png' 
        },
    ];

    const portfolioSlider = [
        {
            url: 'public/assets/img/portfolioSlider/slide1.png'
        },
        {
            url: 'public/assets/img/portfolioSlider/slide2.png'
        },
        {
            url: 'public/assets/img/portfolioSlider/slide3.png'
        },
        {
            url: 'public/assets/img/portfolioSlider/slide4.png'
        },
        {
            url: 'public/assets/img/portfolioSlider/slide5.png'
        }
    ];


    const feedbacks = [
        {
            url: 'public/assets/img/feedback/person1.png',
            name: 'Mira Peterson',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, exercitation ullamco laboris nisi ut ',
            raiting: 4
        },
        {
            url: 'public/assets/img/feedback/person2.png',
            name: 'Diego Curumim',
            text: 'Lorem ipsum dolor asdad sit amet, consectetur adipisicing psum dolor asdad psum dolor asdad psum dolor asdad  ',
            raiting: 5
        },
        {
            url: 'public/assets/img/feedback/person2.png',
            name: 'John Dou',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
            raiting: 2
        }
        ,
        {
            url: 'public/assets/img/feedback/person2.png',
            name: 'Polik',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
            raiting: 4
        }
    ];

  
    return (
        <>

            <HomeSlider urls={imgUrls} />
            <section className={`${s.features} mini__container`}>
                {
                    features.map(item => <HomeFeatures text={item.text} url={item.url} />)
                }
            </section>

            <section className={`${s.title} mini__container`}>
                <h2>Xidmətlərimiz</h2>
                <p>NurArt Dizayn və Mətbəə sahəsində olan bütün xidmətləri təklif etməkdədir.
                    <br /> Xidmətlərimizin bir hissəsi aşağıdakı göstərilənlərdir.</p>
            </section>

              <CartSlider sliders={servicesSlider} rows='2' arrows={false} classList='services-slider' slideShow='3' centerPadding='70' centerMode={true} inf={false} />

            <section className={s.about} ref={counters}>
                <h2 className={inView && s.show}>Haqqımızda</h2>
                <div className={s.about__container}>
                    <p className={inView && s.show}>Bizim şirkət 1997-ci ildən fəaliyyətdədir. Poliqrafiya xidmətlərinin geniş spektri mütəxəssislərimizin yaradıcılıq axtarışının və peşəkarlığının qanunauyğun nəticəsidir. <br /> Bu gün "NurArt" - tam silsiləsi (layihədən tutmuş son məhsula qədər) poliqrafiya şirkətidir, məhsulumuz Avropa keyfiyyətinə uyğundur. Şirkətimiz dünyada tanınmış istehsalçıların müasir ofset və rəqəmli çap avadanlığına malikdir, bunlar arasında Heidelberg (Almaniya), Morgana (İngiltərə), Duplo (Yaponiya), Epson, Conica Minolta, Hewlett-Packard, Graphtec, və başqaları vardır.</p>

                    <div className={s.counts} >
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='56' symbol='+' /> : 0}
                            </p>
                            <p>Online Sifariş</p>
                        </div>
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='358' /> : 0}
                            </p>
                            <p>Müştəri sayı</p>
                        </div>
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='10 750' /> : 0}
                            </p>
                            <p>Görülmüş İş</p>
                        </div>
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='1015' /> : 0}
                            </p>
                            <p>Layihə</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className='container'>
                <h2>Müştərilərimiz</h2>
                
                <CartSlider sliders={clientSlider} rows='1' arrows={true} classList='client__slider' slideShow='6' centerPadding='20' centerMode={false} inf={true}  />
            </section>


            <section className={s.portfolio}>
                <h2>Portfolio</h2>
                <CartSlider sliders={portfolioSlider} rows='1' arrows={false} slideShow='3' centerPadding='70' classList='portfolio-slider' inf={true}  centerPort={true}  />
            </section>


            <section className={s.feedback}>
                <h2>Müştəri rəyləri </h2>

                <FeedbackSlider feedbacks={feedbacks}/>
            </section>

            <h5 className={s.lastText}>Dizayn və Çap Bizim İşimizdir</h5>

            <Helmet>
                <title>NurArt - Dizayn və Poliqrafiya şirkəti </title>
            </Helmet>
        </>
    )
}

