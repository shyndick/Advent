import Modalka from './Modal'
import { Rosigrish } from './Rosigrish'
import img24 from '../image/1.24.png'
import img25 from '../image/1.25.png'
import img26 from '../image/1.26.png'
import img27 from '../image/1.27.png'
import img28 from '../image/1.28.png'
import img29 from '../image/1.29.png'
import img30 from '../image/1.30.png'
import img31 from '../image/1.31.png'


export const Date24 = () => {

    return(
        <div className='twenty'>

            <Modalka 
                title={'День 24'}
                text={"«Новый Год – это грустное расставание со старыми иллюзиями и радостная встреча с новыми» - Фаина Раневская"}
                klass={"twenty_24"}
                img={img24}
            />

            <Modalka
                title={'День 25.'}
                text={"25.	«С Наступающим Новым Годом! Пусть грядущий год принесет Вам массу успехов и достижений! Пусть Ваша организация, словно ледокол, с легкостью преодолевает трудности и препятствия! Упорства Вам, силы, стабильных доходов и постоянного роста в своем деле!»"}
                klass={"twenty_25"}
                img={img25}
            />

            <Modalka 
                title={'День 26'}
                text={"«Мы искренне благодарим Вас за то, что были с нами на протяжении всего 2023 года, и уверены, что будем и дальше усердно сотрудничать!»"}
                klass={"twenty_26"}
                img={img26}
            />

            <Modalka
                title={'День 29. Розыгрыш!'} 
                rosigrish={<Rosigrish/>}
                klass={"twenty_29"}
                img={img29}
            />

            <Modalka 
                title={'День 28'}
                text={"«Возможности не приходят сами – Вы создаете их.»"}
                klass={"twenty_28"}
                img={img28}
            />

            <Modalka 
                title={'День 27'}
                text={"«Команда SANTA позаботилась и сделала для Вас подборку Новогодних подарков близким. Улыбка на лицах любимых – лучший подарок.»"}
                klass={"twenty_27"}
                img={img27}
                text3={'«Открыть»'}
                a2={'https://www.canva.com/ru_ru/obuchenie/idei-dlya-podarkov-na-novyj-god/.'}
            />

            <Modalka 
                title={'День 30'}
                text={"«Примите самые добрые поздравления с Новым Годом! От всей души наша команда SANTA желает Вам здоровья и благополучия! Хотим пожелать огромной удачи нашему общему делу. Пусть наше плодотворное сотрудничество в Новом Году продолжится и станет еще более крепким, успешным и приятным!»"}
                klass={"twenty_30"}
                img={img30}
            />

            <Modalka
                title={'День 31'}
                text={"«Вот мы и подошли к концу марафона подарков. Надеемся, Вы остались довольны. С Наступающим Новым годом поздравляет команда SANTA!»"}
                klass={"twenty_31"}
                img={img31}
            />

        </div>
    )
}