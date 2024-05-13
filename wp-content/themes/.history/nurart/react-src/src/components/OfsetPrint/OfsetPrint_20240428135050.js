import { Helmet } from "react-helmet";
import ServicesPage from "../ServicesPage/ServicesPage";

export default function OfsetPrint(){
    let content = {
        title: 'Ofset çap',
        text1: 'Ofset çap keyfiyyətli və davamlı çap məhsulları yaratmaq üçün istifadə olunan ən çox yayılmış çap üsullarından biridir. Parlaq və doymuş rənglər əldə etməyə, həmçinin kiçik detalların və mətnin dəqiq ötürülməsinə imkan verir. \n\n Ofset, görüntünün ara təbəqəyə köçürülməsi prosesidir. Sistem hidrofobik və hidrofilik tipli rulonlardan və silindrlərdən ibarətdir. Bundan sonra görüntü çap məhsullarının səthinə düşür. Çap formaları müəyyən bir kölgənin boyalarını tətbiq edir, hər birinin öz rəngi var. Nəticə güzgü şəklində deyil, birbaşa görünən bir rəsmdir. \n\n Yüksək keyfiyyətli və dəqiq çap sayəsində ofset çap kommersiya və peşəkar məqsədlər üçün ən populyar çap üsullarından biridir.',
        title2:'Ofset çapının üstünlükləri',
        list1:['tonların və yarım tonların ötürülməsi ən yüksək keyfiyyətdir, aydın və ziddiyyətli şəkillər əldə edəcəksiniz;', 'müxtəlif keyfiyyətli kağızlardan istifadə edilə bilər;', 'patron tipli boyaların istifadəsi mövcuddur;', 'çalarların ötürülməsini tənzimləmək mümkündür;', 'yüksək performans: avadanlıqların bir saatlıq işində ən azı 30.000 təəssürat əldə etmək mümkündür.'],
        icons: false,
        img: 'public/assets/img/servicesPage/offsetPrint.png',
        otherContent: {
            text1:'Bu üstünlüklər sayəsində ofset çapı müştərilər arasında populyarlaşdı. Bununla birlikdə, hər hansı digər çap üsulu kimi, çatışmazlıqları da var. Məsələn, kiçik çap çapları üçün uyğun deyil, çünki çapa hazırlaşmaq üçün əlavə xərc tələb edir. Bundan əlavə, ofset çap çox sayda incə xətt və ya kiçik detal ilə şəkillər çap etmək üçün təsirsiz ola bilər.'
        }
    }

    return(
        <>
        <Helmet>
            <title>Ofset çap</title>
        </Helmet>
            <ServicesPage content={content} />
        </>
    )
}