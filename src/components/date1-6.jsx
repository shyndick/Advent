import {Modal } from 'antd';
import { useState } from 'react';
import img1 from '../image/1.1.png'
import img2 from '../image/1.2.png'
import img3 from '../image/1.3.png'
import img4 from '../image/1.4.png'
import img5 from '../image/1.5.png'
import img6 from '../image/1.6.png'

export const Date1 = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true)

    };
    const handleOk = () => {
      setIsModalOpen(false);
      console.log('2')
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    

    return(
        <div className='first'>
            <div className="first_1">
                    <img src={img1} alt="1"  className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>«Дорогой Сергей Михайлович, в преддверии замечательного праздника чудес, мы подготовили для Вас небольшой 24-дневный марафон с подарками. Вас ожидают приятные скидки, напоминания, увлекательные задания и добрые пожелания. Ведь новый год – это волшебное время, вибрирующее от переполняющей его энергии, полное мыслей, добрых дел и какой-то необъяснимой магии мироздания, наполняющей силой. Когда и на что ее тратить – решаем лишьмы сами. </p>
                </Modal>
            </div>

            <div className="first_2">
                    <img src={img2} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>«Окунемся в прошлое и вспомним, с чего все начиналось..». Ниже кнопка «Погрузиться в историю», которая открывает ссылку на ролик на ютубе - https://www.youtube.com/watch?v=S9fmgGODPGY.</p>
                </Modal>
            </div>

            <div className="first_3">
                    <img src={img4} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>#МарафонДобраВместеСSANTA. Ниже меньшим шрифтом «Много добра не бывает». Кнопка «Присоединяюсь». При нажатии кнопки появляется текст:
«Декабрь для нас – самый теплый месяц в году, несмотря на ползущий вниз столбик термометра и черно-белые пейзажи за окном. Нам под силу раскрасить их самим! Каждое утро с 1 по 31 декабря в сторис нашего Instagram мы будем публиковать новое доброе задание. Оно займет у Вас не более 15 минут, а положительных эмоций подарит на целый день вперед. Чтобы к нам присоединилось больше людей, рассказывайте о выполненных делах или просто делитесь заданиями в постах и сторис с хештегом #МарафонДобраВместеСSANTA и отметкой #santagroup. А чтобы у Вас появился больший азарт, еженедельно, случайным образом среди участников, мы будем дарить подарки! 
</p>
                </Modal>
            </div>

            <div className="first_4">
                    <img src={img3} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>«А Вы уже определились с выбором блюд на праздничный стол? Компания BREMOR позаботилась о Вашем времени и подготовила подборку рецептов с использованием наших продуктов». Кпопка «Выбрать блюда» перебрасывает на ссылку - https://www.bremor.com/recipes/.</p>
                </Modal>
            </div>

            <div className="first_5">
                    <img src={img5} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>«Уважаемый Сергей Михайлович, примите искренние поздравления с наступающим Новым годом! Пусть новый, 2025 год станет стартовой площадкой для новых взлетов, достижений, открытий и побед! Пусть в новом году любое начинание будет обречено на неоспоримый успех, а планы легко и точно реализуются в конкретные дела и мероприятия. Плодотворного, результативного и щедрого на вознаграждения нового года Вам!»</p>
                </Modal>
            </div>

            <div className="first_6">
                    <img src={img6} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>«Наша дружная команда SANTA подготовила для Вас креативное поздравление! Переходите по ссылке и заряжайтесь настроением! Ссылка на ютуб - https://www.youtube.com/watch?v=6dKuxbs-Kfo.</p>
                </Modal>
            </div>
        </div>
    )
}