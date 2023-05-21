import {Modal } from 'antd';
import { useState } from 'react';
import img24 from '../image/1.24.png'
import img25 from '../image/1.25.png'
import img26 from '../image/1.26.png'
import img27 from '../image/1.27.png'
import img28 from '../image/1.28.png'
import img29 from '../image/1.29.png'
import img30 from '../image/1.30.png'
import img31 from '../image/1.31.png'


export const Date24 = () => {

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
        <div className='twenty'>
            <div className="twenty_24">
                    <img src={img24} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="twenty_25">
                    <img src={img25} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="twenty_26">
                    <img src={img26} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="twenty_29">
                    <img src={img29} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="twenty_28">
                    <img src={img28} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="twenty_27">
                    <img src={img27} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="twenty_30">
                    <img src={img30} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="twenty_31">
                    <img src={img31} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}