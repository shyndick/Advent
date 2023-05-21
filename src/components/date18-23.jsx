import {Modal } from 'antd';
import { useState } from 'react';
import img18 from '../image/1.18.png'
import img19 from '../image/1.19.png'
import img20 from '../image/1.20.png'
import img21 from '../image/1.21.png'
import img22 from '../image/1.22.png'
import img23 from '../image/1.23.png'


export const Date18 = () => {

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
        <div className='eighteen'>
            <div className="eighteen_18">
                    <img src={img18} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="eighteen_19">
                    <img src={img19} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="eighteen_23">
                    <img src={img23} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="eighteen_22">
                    <img src={img22} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="eighteen_21">
                    <img src={img21} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

            <div className="eighteen_20">
                    <img src={img20} alt="1" className='img1' onClick={showModal}/>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}