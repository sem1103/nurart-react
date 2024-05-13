import { ScrollRestoration } from 'react-router-dom'
import s from './About.module.css'
import Contact from '../Contact/Contact'


export default function About() {
    return (
        <>
            <div className={s.about}>
                <div className={s.left}>
                    <div>
                        <h2>Məhz niyə görə biz?</h2>
                        <p>
                            Biz 2014-ci ildən fəaliyyət göstəririk.Azərbaycanın bir çox böyük şirkətləri,holdingləri Dizayn və çap işlərini bizə etibar etmişdir.Buna qarşılıq olaraq biz bütün müştəriləri məmnun etməyə çalışmışıq və buna nail olmuşuq.Kollektivimizdə hər sahə üçün ayrılmış öz işində mütəxəssis olmuş şəxslər çalışmaqdadır.Sifarişlərinizin qəbulu,təkliflər və görüşlər bundan əlavə kiçik həcmli çaplar üçün şəhərin mərkəzində ofisimiz fəaliyyət göstərir.Böyük həcmi çaplar üçün isə Ayrıca mətbəəmiz mövcuddur.İri həcmli çaplar olduqda mətbəədə çap olunur və ofisimizə gətirilir.
                        </p>
                    </div>

                    <div>
                        <h2>İş Prinsipimiz</h2>
                        <p>Bizimlə bir dəfə işləyən hər hansısa bir şirkət və ya Fiziki şəxs davamlı olaraq bizimlə işləməyə davam edir. Buda işimizin necə keyfiyyətli olduğunun sübutudur.</p>
                    </div>
                </div>

                <div className={s.center}>
                    <ul>
                        <li>
                            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17.0212L15.3125 21.4391L27 10.836M8.3 30.2751H28.7C31.0802 30.2751 32.2704 30.2751 33.1795 29.8899C33.9791 29.5511 34.6294 29.0103 35.0367 28.3453C35.5 27.5893 35.5 26.5995 35.5 24.6201V7.65502C35.5 5.67559 35.5 4.68585 35.0367 3.92981C34.6294 3.26476 33.9791 2.72407 33.1795 2.38523C32.2704 2 31.0802 2 28.7 2H8.3C5.91979 2 4.72966 2 3.82054 2.38523C3.02084 2.72407 2.37068 3.26476 1.96323 3.92981C1.5 4.68585 1.5 5.67557 1.5 7.65502V24.6201C1.5 26.5995 1.5 27.5893 1.96323 28.3453C2.37068 29.0103 3.02084 29.5511 3.82054 29.8899C4.72966 30.2751 5.91977 30.2751 8.3 30.2751Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h4>Sərfəli qiymətlər</h4>
                        </li>

                        <li>
                            <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9984 29.0506H3.02937C2.59774 29.0506 2.18371 28.8795 1.878 28.5748C1.57229 28.2701 1.39984 27.8566 1.39844 27.425V3.12562C1.39984 2.69399 1.57229 2.28052 1.878 1.97581C2.18371 1.6711 2.59774 1.5 3.02937 1.5H14.2972C14.7288 1.5 15.1429 1.6711 15.4486 1.97581C15.7543 2.28052 15.9267 2.69399 15.9281 3.12562L15.8644 8.0875L15.9069 16.7256V19.0738" stroke="white" stroke-width="2" />
                                <path d="M6.00977 3.76855H9.23977" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M7.85352 26.6816H9.47383" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M11.248 3.76855H11.3171" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M1.39844 24.498H15.4978" stroke="white" stroke-width="2" />
                                <path d="M1.39844 6.11133H15.9281" stroke="white" stroke-width="2" />
                                <path d="M27.5515 29.0504H14.998L15.4284 21.2197C15.515 19.7821 16.1471 18.4318 17.1956 17.4445C18.2442 16.4572 19.63 15.9073 21.0702 15.9072H21.7343C23.1088 15.9078 24.431 16.4342 25.4297 17.3786C26.4284 18.3229 27.0279 19.6137 27.1052 20.986L27.5515 29.0504Z" stroke="white" stroke-width="2" />
                                <path d="M19.779 16.1042L17.5371 11.8542C17.5231 11.8302 17.5164 11.8026 17.5178 11.7748C17.5191 11.747 17.5286 11.7203 17.5449 11.6977C17.5612 11.6752 17.5837 11.6579 17.6097 11.648C17.6357 11.638 17.664 11.6359 17.6912 11.6417L19.0459 11.8648C20.4761 12.0986 21.9347 12.0986 23.3649 11.8648L24.8577 11.6258C24.8853 11.6203 24.9138 11.6231 24.9398 11.6337C24.9658 11.6444 24.9881 11.6624 25.004 11.6856C25.0198 11.7088 25.0285 11.7361 25.029 11.7642C25.0294 11.7923 25.0216 11.8199 25.0065 11.8436L22.5468 15.9714" stroke="white" stroke-width="2" />
                                <path d="M21.2721 14.1699L20.9746 15.8859" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M23.8123 20.1681C23.6206 19.7177 23.2987 19.3349 22.8878 19.0689C22.477 18.8029 21.996 18.6658 21.5066 18.6753C19.4295 18.6753 19.3498 20.1681 19.3498 20.1681C19.3498 20.1681 19.0363 22.0009 21.581 22.1974C24.2373 22.3993 23.8123 24.2268 23.8123 24.2268C23.6893 24.7197 23.4003 25.1552 22.994 25.46C22.5876 25.7648 22.0886 25.9202 21.581 25.9003C19.6207 26.0012 19.0098 23.9399 19.0098 23.9399" stroke="white" stroke-width="2" />
                                <path d="M21.5059 17.3574V27.4405" stroke="white" stroke-width="2" />
                            </svg>

                            <h4>Online ödəniş</h4>

                        </li>

                        <li>
                            <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5007 0.275391L24.1673 1.94206L24.1673 5.27539H34.1673V28.6087H0.833984V5.27539H10.834V1.94206L12.5007 0.275391H22.5007ZM4.1673 17.536L4.16732 25.2754H30.834L30.834 17.5359C27.5039 18.4887 24.1701 19.0847 20.834 19.323L20.834 21.9421H14.1673L14.1673 19.323C10.8313 19.0847 7.49739 18.4887 4.1673 17.536ZM30.834 8.60872H4.16732L4.16733 14.0592C8.61826 15.4264 13.0611 16.1087 17.5007 16.1087C21.9402 16.1087 26.3831 15.4264 30.834 14.0592L30.834 8.60872ZM20.834 3.60872H14.1673V5.27539H20.834V3.60872Z" fill="white" />
                            </svg>

                            <h4>İşə peşəkar anaşma</h4>
                        </li>
                        <li>
                            <svg width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 22.3429C15.5 20.9229 16.3025 19.6241 17.5725 18.9891L20.5 17.5254L11.75 0.0253906H9.25L0.5 17.5254L3.4275 18.9891C4.6975 19.6241 5.5 20.9229 5.5 22.3429V22.5254H3V32.5254H18V22.5254H15.5V22.3429ZM4.545 16.7529L3.85375 16.4079L9.25 5.61539V15.0254H11.75V5.61539L17.1462 16.4066L16.455 16.7516C14.3237 17.8179 13 19.9604 13 22.3429V22.5254H8V22.3429C8 19.9604 6.67625 17.8179 4.545 16.7529ZM15.5 30.0254H5.5V25.0254H15.5V30.0254Z" fill="white" />
                            </svg>

                            <h4>Dzaynerlərdən
                                ibaret komanda</h4>
                        </li>
                        <li>
                            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_1485)">
                                    <path d="M31.625 16.7754C31.625 17.2628 31.6019 17.7449 31.5568 18.2205C30.7777 17.441 29.8656 16.7946 28.8573 16.3182C28.6168 9.7007 23.1763 4.40978 16.5 4.40978C9.67066 4.40978 4.13439 9.94605 4.13439 16.7754C4.13439 23.4517 9.42531 28.8922 16.0428 29.1327C16.5192 30.1409 17.1656 31.0531 17.9451 31.8322C17.4695 31.8773 16.9874 31.9004 16.5 31.9004C8.1467 31.9004 1.375 25.1287 1.375 16.7754C1.375 8.42209 8.1467 1.65039 16.5 1.65039C24.8533 1.65039 31.625 8.42209 31.625 16.7754Z" fill="white" />
                                    <path d="M17.875 16.612L19.0336 17.281C18.2665 17.8482 17.5865 18.5267 17.0178 19.2926L15.8364 18.6105C15.5976 18.4726 15.4158 18.2739 15.2992 18.0452C15.125 17.7756 15.125 17.4171 15.125 17.4171V8.52539C15.125 7.76599 15.7406 7.15039 16.5 7.15039C17.2594 7.15039 17.875 7.76601 17.875 8.52539V16.612Z" fill="white" />
                                    <path d="M21.0277 24.6227C21.5646 24.0857 22.4353 24.0857 22.9722 24.6227L23.8537 25.5042L26.465 22.8929C27.0021 22.356 27.8726 22.356 28.4095 22.8929C28.9466 23.43 28.9466 24.3005 28.4095 24.8376L24.9168 28.3304C24.798 28.4492 24.6629 28.5417 24.5187 28.6078C23.9921 28.9158 23.3044 28.8441 22.8529 28.3924L21.0277 26.5672C20.4908 26.0303 20.4908 25.1596 21.0277 24.6227Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.75 33.2754C29.3063 33.2754 33 29.5817 33 25.0254C33 20.4691 29.3063 16.7754 24.75 16.7754C20.1937 16.7754 16.5 20.4691 16.5 25.0254C16.5 29.5817 20.1937 33.2754 24.75 33.2754ZM24.75 30.5503C21.6987 30.5503 19.2251 28.0767 19.2251 25.0254C19.2251 21.9741 21.6987 19.5005 24.75 19.5005C27.8013 19.5005 30.2749 21.9741 30.2749 25.0254C30.2749 28.0767 27.8013 30.5503 24.75 30.5503Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1485">
                                        <rect width="33" height="33" fill="white" transform="translate(0 0.275391)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h4>Vaxtında təhvil vermə</h4>
                        </li>
                        <li>
                            <svg width="27" height="37" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.356 27.176V32.7305L22.0172 33.8382V25.7204C21.1813 26.2937 20.2897 26.7814 19.356 27.176ZM4.98173 25.7204V33.7827L7.64299 32.6751V27.176C6.70927 26.7814 5.81769 26.2937 4.98173 25.7204ZM13.4994 28.3577C12.2428 28.3583 10.991 28.202 9.7731 27.8921V36.2754L13.4994 34.7245L17.2258 36.2753V27.8921C16.0079 28.2019 14.7561 28.3583 13.4994 28.3577ZM13.4994 0.275391C6.34446 0.275391 0.523438 6.09641 0.523438 13.2515C0.523438 20.4065 6.34446 26.2275 13.4994 26.2275C20.6544 26.2275 26.4755 20.4065 26.4755 13.2514C26.4755 6.09634 20.6545 0.275391 13.4994 0.275391ZM13.4994 23.4855C7.82713 23.4855 3.21232 18.8707 3.21232 13.1984C3.21232 7.526 7.82713 2.91119 13.4994 2.91119C19.1718 2.91119 23.7866 7.526 23.7866 13.1984C23.7866 18.8708 19.1718 23.4855 13.4994 23.4855ZM13.4994 5.0413C9.0017 5.0413 5.34244 8.7005 5.34244 13.1984C5.34244 17.6963 9.0017 21.3553 13.4994 21.3553C17.9972 21.3553 21.6565 17.6961 21.6565 13.1983C21.6565 8.7005 17.9973 5.0413 13.4994 5.0413ZM16.852 17.959L13.4994 16.1964L10.1469 17.959L10.7872 14.2259L8.07499 11.5822L11.8233 11.0375L13.4994 7.64096L15.1757 11.0375L18.924 11.5822L16.2117 14.2259L16.852 17.959Z" fill="white" />
                            </svg>

                            <h4>Yüksək keyfiyyət</h4>
                        </li>
                        <li>
                            <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.125 15.1504V16.7754C0.125 23.0479 5.2275 28.1504 11.5 28.1504C17.7725 28.1504 22.875 23.0479 22.875 16.7754C22.875 10.5029 17.7725 5.40039 11.5 5.40039H8.25V0.525391L1.75 7.02539L8.25 13.5254V8.65039H11.5C15.9801 8.65039 19.625 12.2953 19.625 16.7754C19.625 21.2555 15.9801 24.9004 11.5 24.9004C7.01987 24.9004 3.375 21.2555 3.375 16.7754V15.1504H0.125Z" fill="white" />
                            </svg>

                            <h4>Geri qaytarmaq
                                imkanı</h4>
                        </li>
                    </ul>
                </div>

                <div className={s.right}>
                    <h1>Şirkət Haqqında</h1>
                    <p>Bizim şirkət 2014-ci ildən fəaliyyətdədir. Poliqrafiya xidmətlərinin geniş spektri mütəxəssislərimizin yaradıcılıq axtarışının və peşəkarlığının qanunauyğun nəticəsidir. <br />
                        Bu gün "NurArt" - tam silsiləsi (layihədən tutmuş son məhsula qədər) poliqrafiya şirkətidir. Şirkətimiz dünyada tanınmış istehsalçıların müasir ofset və rəqəmli çap avadanlığına malikdir, bunlar arasında Heidelberg (Almaniya), Morgana (İngiltərə), Xerox, Epson, Conica Minolta, Hewlett-Packard, Graphtec, və başqaları vardır. <br />
                        Formalı və çap proseslərində müstəsnz olaraq avadanlığın istehsalçıları tərəfindən məsləhət görülmüş orijinal sərf və texnologiya materialları tətbiq edilir. Şirkətimizin müvəffəqiyyətli işinin ən əhəmiyyətli şərti idarəetmə, dizayn, çapdan əvvəlki hazırlıq, çap və çapdan sonrakı işlər sahəsində peşəkarların mövcudluğudur. Bizimlə işləyərək, Siz poliqrafiya sahəsində etibarlı biznes- partnyorunu əldə edirsiniz, çünki bizim fəaliyyətimizin əhəmiyyətli meyarı bunlardır: işin keyfiyyəti, müştərilərə loyallıq, elastik qiymət siyasəti və sifarişlərin icrasının optimal müddətləri.</p>
                </div>

            </div>
           <Contact /> 
        </>
    )
}