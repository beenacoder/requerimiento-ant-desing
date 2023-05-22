
import { useState } from 'react';
import { ConfigProvider, Space, Form } from 'antd';
import CustomInput  from './custom/CustomInput.jsx';
import CustomButton  from './custom/CustomButton.jsx';


export const Formulario = () => {
    const [form] = Form.useForm();
	const [color, setColor] = useState('');
	const [formColor, setFormColor] = useState('');

	
	// const handleClick = (e) => { 
    //     setColor(`${e.target.value}`)
	// 	console.log(color);
	// }

    const handleClickDefault = () => { 
        setColor(`green`)
        setFormColor('success')
	}
    const handleClickBlue = () => { 
        setColor(`blue`)
        setFormColor('info')

	}
    const handleClickRed = () => { 
        setColor(`red`)
        setFormColor('danger')
	}
    const handleClickYellow = () => { 
        setColor(`yellow`)
        setFormColor('warning')
	}
	



  return (
//     <ConfigProvider
//     theme={{
//         token: {
//             colorBorder:`${color}`,
//         },
//     }}
// >
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
                    handleClick= {handleClickDefault}
                />
                <CustomButton 
                    label="Yellow-sm"
                    className= "btn-yellow-one"
                    value="yellow"
                    handleClick= {handleClickYellow}
                />
                <CustomButton 
                    label="Blue-md"
                    className= "btn-blue-one"
                    value="blue"
                    handleClick= {handleClickBlue}
                />
                 <CustomButton 
                    label="Red-lg"
                    className= {`btn-red-one`}
                    value="red"
                    handleClick= {handleClickRed}
                />
              </Space>
        </Form>
    // </ConfigProvider>
  )
}
