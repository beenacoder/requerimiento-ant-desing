
// import { useState } from 'react';
// import { Button, ConfigProvider, Space, Input, Form } from 'antd';

// const defaultData = {
// 	colorBorder: '#000',
// }

// const App = () => {

// 	const [form] = Form.useForm();
// 	const [color, setColor] = useState(defaultData);
	
// 	const handleColorChangeGreen = () => {
// 		setColor('#0fad31');
// 	}
// 	const handleColorChangeBlue = () => {
// 		setColor('#0e32d4')
// 	}
// 	const handleColorChangeYellow = () => {
// 		setColor('#e9ec13')
// 	}
	
// 	return (
		
// 		<ConfigProvider
// 			theme={{
// 				token: {
// 					colorBorder:`${color}`,
// 				},
// 			}}
// 		>
// 			<Form
// 				name='basic-form'
// 				form={form}
// 				style={{
// 					display: 'flex',
// 					flexDirection: 'column',
// 					justifyContent: 'center',
// 					alignItems: 'center',
// 					height: '100vh',
					
// 				}}
// 				initialValues={{
// 					remember: true,
// 				  }}
// 			>
// 					<Form.Item
// 						label="Nombre de Usuario"
// 						rules={[
// 						{
// 						required: true,
// 						message: 'Please input your username!',
// 						},
// 					]}
// 						required= {true}
// 					>
// 						<Input
//                 	        placeholder='Ingrese Usuario'
//                 	    />
//                 	</Form.Item>
// 					<Form.Item
// 						label="Contraseña"
// 						// required= {true}
// 						rules={[
// 								{
// 								required: true,
// 								message: 'Please input your username!',
// 								},
// 							]}
// 					>
// 						<Input.Password
//                 	        placeholder='Ingrese Contraseña'
							
//                 	    />
//                 	</Form.Item>
//                     <Form.Item>
//                       <Space>
// 					  	<Button 
// 							name='greenButton'
// 							style={{borderColor: '#0fad31'}}
// 							type="outlined" 
// 							onClick={handleColorChangeGreen}
// 						>
// 							Verde
//                         </Button>
// 						<Button 
// 							name='yellowButton'
// 							style={{borderColor: '#e9ec13'}}
// 							type="text" 
// 							onClick={handleColorChangeYellow}
// 						>
// 							Amarillo
//                         </Button>
// 						<Button 
// 							name='blueButton'
// 							style={{borderColor: '#0e32d4'}}
// 							type="text" 
// 							onClick={handleColorChangeBlue}
// 						>
// 							Azul
//                         </Button>
// 					  </Space>
//                     </Form.Item>
// 					<Form.Item>
// 						<Button type='primary' htmlType='submit'>
// 							Enviar
// 						</Button>
// 					</Form.Item>
// 				</Form>
// 			</ConfigProvider>
		
// 	);
// }

// export default App;
