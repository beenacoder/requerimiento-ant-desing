
import { useState } from 'react';
import { ConfigProvider, Space, Form } from 'antd';
import CustomInput  from './custom/CustomInput.jsx';
import CustomButton  from './custom/CustomButton.jsx';

export const CustomForm = () => {
    const [form] = Form.useForm();
	const [color, setColor] = useState('');
	const [formColor, setFormColor] = useState('');
    const [inputSize, setInputSize] = useState('large');

	
	const handleClick = (e) => { 
        switch (e.currentTarget.value) {
            case 'green': {
                setColor(`${e.currentTarget.value}`)
                setFormColor('success')
                setInputSize('large')
            }
            break;
            case 'yellow': {
                setColor(`${e.currentTarget.value}`)
                setFormColor('warning')
                setInputSize('small')
            }
            break;
            case 'blue': {
                setColor(`${e.currentTarget.value}`)
                setFormColor('info')
                setInputSize('medium')
            }
            break;
            case 'red': {
                setColor(`${e.currentTarget.value}`)
                setFormColor('danger')
                setInputSize('large')
            }
            break;
        }
        
        // if(e.currentTarget.value === 'green'){
        //     setColor(`${e.currentTarget.value}`)
        //     setFormColor('success')
        //     setInputSize('large')

        // } else if(e.currentTarget.value === 'red'){
        //     setColor(`${e.currentTarget.value}`)
        //     setFormColor('danger')
        //     setInputSize('large')

        // } else if(e.currentTarget.value === 'blue'){
        //     setColor(`${e.currentTarget.value}`)
        //     setFormColor('info')
        //     setInputSize('medium')

        // } else if(e.currentTarget.value === 'yellow'){
        //     setColor(`${e.currentTarget.value}`)
        //     setFormColor('warning')
        //     setInputSize('small')
        // }
	}

    return (

        <Form
            onSubmit={ValidityState}
            name='basic-form'
            form={form}
            className={`container-${formColor}`}
        >
            <ConfigProvider
                componentSize={inputSize}
                theme={{
                    token: {
                        colorBorder: `#000`,
                    },
                }}
            >
                <CustomInput
                    // size = {inputSize}
                    label="Nombre de Usuario"
                    componentplaceholder="Escribe tu usuario..."
                    className={`custom-border${color}`}
                />
                <CustomInput
                    // size = {inputSize}
                    label="Contraseña"
                    componentplaceholder="Ingrese contraseña..."
                    className={`custom-border${color}`}
                    required={true}
                />
            </ConfigProvider>
            <Space>
                <CustomButton
                    label="Green-default"
                    className="btn-green-one"
                    value="green"
                    handleClick={handleClick}
                />
                <CustomButton
                    label="Yellow-sm"
                    className="btn-yellow-one"
                    value="yellow"
                    handleClick={handleClick}
                />
                <CustomButton
                    label="Blue-md"
                    className="btn-blue-one"
                    value="blue"
                    handleClick={handleClick}
                />
                <CustomButton
                    label="Red-lg"
                    className={`btn-red-one`}
                    value="red"
                    handleClick={handleClick}
                />
            </Space>
        </Form>

    )
}
