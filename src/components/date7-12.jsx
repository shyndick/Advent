import Modalka from './Modal'
import img7 from '../image/1.7.png'
import img8 from '../image/1.8.png'
import img9 from '../image/1.9.png'
import img10 from '../image/1.10.png'
import img11 from '../image/1.11.png'
import img12 from '../image/1.12.png'

export const Date7 = () => {

    return(
        <div className='seven'>
            <Modalka 
                title={'День 11'}
                text={"«Давайте поиграем в тайного Санту? Пара теплых слов скрасит серые и холодные будни.» "}
                klass={"seven_11"}
                img={img11}
            />

            <Modalka 
                title={'День 10'}
                text={"«А Вы уже знакомы с рецептами от Савушкин продукт?» "}
                text3={'Открыть'}
                klass={"seven_10"}
                img={img10}
                a2={'https://www.savushkin.com/retsepty/'}
            />

            <Modalka
                title={'День 7'} 
                text={"Вы получаете купон на скидку 35% в сети фирменных магазинов Santa! "}
                text2={'Использовать купон можно предоставив '}
                text3={"Штихкод"}
                a2={'https://mybito.ru/files/images/shtrikhkodirovanie_849116425.png'}
                klass={"seven_7"}
                img={img7}
            />

            <Modalka 
                title={'День 12'}
                text={"«Интересные факты из истории «Санта Импекс Брест». "}
                klass={"seven_12"}
                img={img12}
                text3 = {'Ознакомиться'}
                a2={'https://officelife.media/article/41671-top-6-maloizvestnykh-faktov-iz-ranney-istorii-santy/'}
            />

            <Modalka 
                title={'День 9'}
                text={"«А Вы уже знакомы с новинками от BREMOR? "}
                klass={"seven_9"}
                text3={'Ознакомиться'}
                a2={'https://www.bremor.com/products/santa-bremor/'}
                img={img9}
            />

            <Modalka 
                title={'День 8'}
                text={"Мы с Вами уже погружались в историю развития нашей компании. Хотим также напомнить, что в уходящем году компания BREMOR отметила свой юбилей."}
                text3={'«Перемотать время»'}
                klass={"seven_8"}
                img={img8}
                a2={'https://www.youtube.com/watch?v=KZmZTzI6iYg&t=67s.'}
            />
        </div>
    )
}