import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';


//!code smells
const FloatingForm = () => {
    const [visible, setVisible] = useState(false);
    const [file, setFile] = useState(null)
    const [fileSelected, setFileSelected] = useState(false);

    const formData = new FormData();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedExtensions = /(\.xlsx)$/i; // chỉ cho phép các file có đuôi .xlsx


        if (selectedFile && allowedExtensions.test(selectedFile.name)) {
            setFileSelected(true);
            setFile(selectedFile);

        } else {
            setFileSelected(false);
        }
    };

    const handleSubmit = (e) => {
        try {
            

        } catch (e) {

        }
        setVisible(false);
    };

    return (
        <div className='w-full h-auto relative'>
            <Button
                ghost
                type="primary"
                onClick={() => setVisible(true)}
                className='h-auto mb-1 float-right  '
            >
                <FontAwesomeIcon icon={faFileImport} />
                <p >Import from excel</p>
            </Button>
            <Modal
                title="Add Item"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={[
                    fileSelected ? (
                        <Button key="submit" type="primary" ghost onClick={handleSubmit}>OK</Button>
                    ) : null,
                    <Button key="cancel" onClick={() => setVisible(false)}>
                        Cancel
                    </Button>,
                ]}
            >
                <Form onFinish={handleSubmit}>
                    <Input type='file' onChange={handleFileChange} />
                </Form>
            </Modal>
        </div>
    );
};

export default FloatingForm;