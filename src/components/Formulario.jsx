
import { useState } from 'react';
import { Button, ConfigProvider, Space, Input, Form } from 'antd';

const defaultColor = {
	colorBorder: '#000',
}

export const Formulario = () => {
    const [form] = Form.useForm();
	const [color, setColor] = useState(defaultColor);
	
	const handleColorChangeRed = () => {
		setColor('#ad390f');
	}
	const handleColorChangeBlue = () => {
		setColor('#0e32d4')
	}
	const handleColorChangeYellow = () => {
		setColor('#e9ec13')
	}



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
            
        }}
        initialValues={{
            remember: true,
          }}
    >
            <Form.Item
                label="Nombre de Usuario"
            >
                <Input
                    placeholder='Ingrese Usuario'
                />
            </Form.Item>
            <Form.Item
                label="Contraseña"
            >
                <Input.Password
                    placeholder='Ingrese Contraseña'
                />
            </Form.Item>
            <Form.Item>
              <Space>
                  <Button 
                    name='greenButton'
                    style={{borderColor: '#ad390f'}}
                    type="outlined" 
                    onClick={handleColorChangeRed}
                >
                    Rojo
                </Button>
                <Button 
                    name='yellowButton'
                    style={{borderColor: '#e9ec13'}}
                    type="text" 
                    onClick={handleColorChangeYellow}
                >
                    Amarillo
                </Button>
                <Button 
                    name='blueButton'
                    style={{borderColor: '#0e32d4'}}
                    type="text" 
                    onClick={handleColorChangeBlue}
                >
                    Azul
                </Button>
              </Space>
            </Form.Item>
        </Form>
    </ConfigProvider>
  )
}
