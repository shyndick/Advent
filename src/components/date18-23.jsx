import Modalka from './Modal'
import img18 from '../image/1.18.png'
import img19 from '../image/1.19.png'
import img20 from '../image/1.20.png'
import img21 from '../image/1.21.png'
import img22 from '../image/1.22.png'
import img23 from '../image/1.23.png'


export const Date18 = () => {
    

    return(
        <div className='eighteen'>

            <Modalka 
                title={'День 18'}
                text={"«В канун Нового Года особенно хочется проводить вечера в кругу семьи, за чашечкой шоколада и ….с новогодними фильмами. Мы сделали для Вас подборку замечательных новогодних фильмов. Выбирайте и наслаждайтесь!». "}
                klass={"eighteen_18"}
                img={img18}
                text3={'Подборка фильмов'}
                a2={'https://www.mvideo.ru/blog/podborki/30-novogodnih-i-rozhdestvenskih-filmov.'}
            />

            <Modalka 
                title={'День 19'}
                text={"«Какой новогодний стол без качественных продуктов? Вместе с Вами мы соберем продуктовую коробку и вышлем.» "}
                klass={"eighteen_19"}
                img={img19}
                text3={"Выбрать"}
                a2={'https://www.bremor.com/products/'}
            />

            <Modalka 
                title={'День 23'}   
                text={"«Команда SANTA позаботилась и сделала для Вас подборку Новогодних подарков близким. Улыбка на лицах любимых – лучший подарок.» "}
                klass={"eighteen_23"}
                img={img23}
                text3={'Открыть'}
                a2={'https://www.canva.com/ru_ru/obuchenie/idei-dlya-podarkov-na-novyj-god/'}
            />

            <Modalka
                title={'День 22'} 
                text={"«Мы искренне благодарим Вас за то, что были с нами на протяжении всего 2023 года, и уверены, что будем и дальше усердно сотрудничать!»"}
                klass={"eighteen_22"}
                img={img22}
            />

            <Modalka 
                title={'День 21'}
                text={"«Новый год без имбирного печенья? Не годится.. Ознакомьтесь с рецептом и творите!» "}
                klass={"eighteen_21"}
                img={img21}
                text3={'Открыть рецепт'}
                a2={'https://dzen.ru/a/Y5nYeKiMZXRci0M7'}
            />

            <Modalka 
                title={'День 20. Вам предсказание!'}
                text={"«В этом году Вы будете блистать ярче звезд»"}
                klass={"eighteen_20"}
                img={img20}
            />

        </div>
    )
}