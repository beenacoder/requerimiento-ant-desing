
import { useState } from 'react';
import { ConfigProvider, Space, Form } from 'antd';
import CustomInput  from './custom/CustomInput.jsx';
import CustomButton  from './custom/CustomButton.jsx';


export const Formulario = () => {
    const [form] = Form.useForm();
	const [color, setColor] = useState('');
	
	// const handleClick = (e) => { 
    //     setColor(`${e.target.value}`)
	// 	console.log(color);
	// }

    const handleClickDefault = (e) => { 
        setColor(`green`)
		console.log(color);
	}
    const handleClickBlue = (e) => { 
        setColor(`blue`)
		console.log(color);
	}
    const handleClickRed = (e) => { 
        setColor(`red`)
		console.log(color);
	}
    const handleClickYellow = (e) => { 
        setColor(`yellow`)
		console.log(color);
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
