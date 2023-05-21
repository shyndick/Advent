import {Modal } from 'antd';
import { useState } from 'react';
import img13 from '../image/1.13.png'
import img14 from '../image/1.14.png'
import img15 from '../image/1.15.png'
import img16 from '../image/1.16.png'
import img17 from '../image/1.17.png'


export const Date13 = () => {

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
        <div className='thirteen'>
            <div className="thirteen_13">
                    <img src={img13} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="thirteen_14">
                    <img src={img14} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="thirteen_17">
                    <img src={img17} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="thirteen_16">
                    <img src={img16} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="thirteen_15">
                    <img src={img15} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}