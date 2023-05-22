
import { useState } from 'react';
import { ConfigProvider, Space, Form } from 'antd';
import CustomInput  from './custom/CustomInput.jsx';
import CustomButton  from './custom/CustomButton.jsx';


export const Formulario = () => {
    const [form] = Form.useForm();
	const [color, setColor] = useState('');
	const [formColor, setFormColor] = useState('');

	
	const handleClick = (e) => { 
        setColor(`${e.target.value}`)
        if(e.target.value === 'green'){
            setFormColor('success')
        } else if(e.target.value === 'red'){
            setFormColor('danger')
        } else if(e.target.value === 'blue'){
            setFormColor('info')
        } else if(e.target.value === 'yellow'){
            setFormColor('warning')
        }
	}

    // const handleClickDefault = () => { 
    //     setColor(`green`)
    //     setFormColor('success')
	// }
    // const handleClickBlue = () => { 
    //     setColor(`blue`)
    //     setFormColor('info')

	// }
    // const handleClickRed = () => { 
    //     setColor(`red`)
    //     setFormColor('danger')
	// }
    // const handleClickYellow = () => { 
    //     setColor(`yellow`)
    //     setFormColor('warning')
	// }
	



  return (
    <ConfigProvider
    theme={{
        token: {
            colorBorder:`#000`,
        },
    }}
>
    <Form
        onSubmit={ValidityState}
        name='basic-form'
        form={form}
        className={`container-${formColor}`}
    >
            <CustomInput 
                label = "Nombre de Usuario"
                componentplaceholder = "Escribe tu usuario..."
                className = {`custom-border${color}`}
            />
            <CustomInput 
                label = "Contraseña"
                componentplaceholder = "Ingrese contraseña..."
                className = {`custom-border${color}`}
            />
            
              <Space>
                <CustomButton 
                    label="Green-default"
                    className= "btn-green-one"
                    value="green"
                    handleClick= {handleClick}
                />
                <CustomButton 
                    label="Yellow-sm"
                    className= "btn-yellow-one"
                    value="yellow"
                    handleClick= {handleClick}
                />
                <CustomButton 
                    label="Blue-md"
                    className= "btn-blue-one"
                    value="blue"
                    handleClick= {handleClick}
                />
                 <CustomButton 
                    label="Red-lg"
                    className= {`btn-red-one`}
                    value="red"
                    handleClick= {handleClick}
                />
              </Space>
        </Form>
    // </ConfigProvider>
  )
}
