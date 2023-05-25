
import { useState } from 'react';
import { ConfigProvider, Space, Form, Checkbox } from 'antd';
import CustomInput  from './custom/CustomInput.jsx';
import CustomButton  from './custom/CustomButton.jsx';

export const CustomForm = () => {
    const [form] = Form.useForm();
	const [country, setCountry] = useState('chile');
	


    const handleClick = (e) => {
        setCountry(e.currentTarget.value);
    }
	


    return (
        <Form
            onSubmit={ValidityState}
            name='basic-form'
            form={form}
            className={country}
        >
            <ConfigProvider
                componentSize={country}
                theme={{
                    token: {
                        colorBorder: `#000`,
                    },
                }}
            >
                <CustomInput
                    label="Nombre de Usuario"
                    componentplaceholder="Escribe tu usuario..."
                    className="custom-input"
                />
                <CustomInput
                    label="Contraseña"
                    componentplaceholder="Ingrese contraseña..."
                    className="custom-input"
                />
                <Form.Item>
                    <Checkbox
                    >Recordar mi usuario</Checkbox>
                </Form.Item>
            </ConfigProvider>
            <Space>
                <CustomButton
                    label="Argentina"
                    className="btn-argentina"
                    value="argentina"
                    handleClick={handleClick}
                />
                    <CustomButton
                        label="Chile"
                        className="btn-chile"
                        value="chile"
                        handleClick={handleClick}
                    />
                <CustomButton
                    label="Colombia"
                    className="btn-colombia"
                    value="colombia"
                    handleClick={handleClick}
                />
                <CustomButton
                    label="Peru"
                    className="btn-peru"
                    value="peru"
                    handleClick={handleClick}
                />
            </Space>
        </Form>

    )
}
