import { Button, Modal } from 'antd';
import { useState } from 'react';
const Modalka = ({text, klass, img, a, img2, text2, text3, a2, title, rosigrish }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  return (
    <>
            <div className={klass}>
                    <img src={img} alt="1" className='img1' onClick={showModal}/>
                <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>{text}{img2 && <img src={img2}/>}</p>
                    {text2 && <span>{text2}</span>}
                    {text3 && <p className='madal_a'><a target='_blank' href={a2}>{text3}</a></p>}
                    <a target='_blank' href={a} className='madal_a'>{a}</a>
                    {rosigrish}
                </Modal>
            </div>
    </>
  );
};
export default Modalka;