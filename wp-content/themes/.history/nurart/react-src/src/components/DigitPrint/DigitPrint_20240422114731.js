import { Helmet } from "react-helmet";
import ServicesPage from "../ServicesPage/ServicesPage";

export default function DigitPrint(){
    let content = {
        title: 'Rəqəmsal çap',
        text1: '"NurArt" tipografiyası rəqəmsal çap etmə xidmətləri təklif edir. Müasir  avadanlıqlar, səmərəli peşəkarlıq və əməkdaşlarımızın geniş təcrübəsi, hər hansı, hətta ən çətin tapşırıqları uğurla həll etməyimizi təmin edir.',
        title2: 'Əsas xüsusiyyətlər',
        text2:'Rəqəmsal çap - iş və reklam poliqrafiya məhsullarının hazırlanmasına ideal olan müasir bir texnologiyadır. Ən vacib xüsusiyyəti - operativlikdir. Adətən kiçik və orta tirajlı məhsulların hazırlanmasında istifadə olunur. Bu zaman layiqli keyfiyyət təmin edilir.\n\n Bir başqa üstünlük - istənilən dizayn kağızında çap etmə imkanıdır. Ofset texnologiyasından istifadə zamanı materiala sıxı tələblər tətbiq olunur, kiçikliyə, teksturaya və örtüyə aid. Rəqəmsal texnologiyada belə məhdudiyyətlər daha azdır.',
        icons: false,
        img: 'public/assets/img/servicesPage/print.png',
        otherContent: {
            title1:'Təcili çap',
            text1:'Bugün rəqəmsal çap etmə - lazım olan tirajı əldə etmək üçün ən sürətli yoludur. Texnologiya, istehsal prosesini maksimum müddətdə həyata keçirməyə imkan verir. Ehtiyacınız olan acil poliqrafiya xidmətləri varsa - bizə müraciət edin! Sizə kataloqlar, lövhələr, vizitkartlar və digər məhsulları əldə etmək üçün lazım olan anlarda yardım edəcəyik. \n\n Xidmətin qiyməti təciliyyət dərəcəsinə, tiraj həcminə, çap etmələri lazım olan məhsulun növünə və digər faktorlara əsasən dəyişir. Şəxsi menecer sizi ayrılan büdcə çərçivəsində qalmaya imkan verən bir variantı seçməyinizə kömək edəcəkdir.'
        }
    }

    return(
        <>
        <Helmet >
        <title>Rəqəmsal çap</title>
        </Helmet>
            <ServicesPage content={content} />
        </>
    )
}