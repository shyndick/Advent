import {Modal } from 'antd';
import { useState } from 'react';
import img7 from '../image/1.7.png'
import img8 from '../image/1.8.png'
import img9 from '../image/1.9.png'
import img10 from '../image/1.10.png'
import img11 from '../image/1.11.png'
import img12 from '../image/1.12.png'

export const Date7 = () => {

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

    

    return(
        <div className='seven'>
            <div className="seven_11">
                    <img src={img11} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="seven_10">
                    <img src={img10} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="seven_7">
                    <img src={img7} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="seven_12">
                    <img src={img12} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="seven_9">
                    <img src={img9} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="seven_8">
                    <img src={img8} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}