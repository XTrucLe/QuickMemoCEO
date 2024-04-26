import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';

const FloatingForm = () => {
    const [visible, setVisible] = useState(false);
    const [fileSelected, setFileSelected] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileSelected(true);
        } else {
            setFileSelected(false);
        }
    };

    const handleSubmit = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <div className='w-full h-auto relative'>
            <Button
                type="text"
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
                        <Button key="submit" type="default" onClick={handleSubmit}>
                            OK
                        </Button>
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