
import { useState } from 'react';
import { ConfigProvider, Space, Form } from 'antd';
import CustomInput  from './custom/CustomInput.jsx';
import CustomButton  from './custom/CustomButton.jsx';


const defaultColor = {
	colorBorder: '#000',
}

export const Formulario = () => {
    const [form] = Form.useForm();
	const [color, setColor] = useState(defaultColor);
	
  return (
    <ConfigProvider
        theme={{
            token: {
                colorBorder:`${color}`,
            },
        }}
>
    <Form
        onSubmit={ValidityState}
        name='basic-form'
        form={form}
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        }}
        initialValues={{
            remember: true,
          }}
    >
            <CustomInput 
                label = "Nombre de Usuario"
                componentplaceholder = "Escribe tu usuario..."
                className = "custom-color-border"
            />
            <CustomInput 
                label = "Contraseña"
                componentplaceholder = "Ingrese contraseña..."
                className = "custom-color-border"
            />
            <Form.Item>
              <Space>
                <CustomButton 
                    label="Green-default"
                    className= "btn-green-one"
                />
                <CustomButton 
                    label="Yellow-sm"
                    className= "btn-yellow-one"
                />
                <CustomButton 
                    label="Blue-md"
                    className= "btn-blue-one"
                />
                 <CustomButton 
                    label="Red-lg"
                    className= "btn-red-one"
                />
              </Space>
            </Form.Item>
        </Form>
    </ConfigProvider>
  )
}
