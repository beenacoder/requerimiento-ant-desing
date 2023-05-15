import { useState } from 'react';
import { Button, ConfigProvider, Space, Input, Form } from 'antd';

const defaultData = {
	colorBorder: '#000',
}

function App() {
	const [form] = Form.useForm();
	const [data, setData] = useState(defaultData);
	
	const handleColorChangeGreen = () => {
		setData('#0fad31');
	}
	const handleColorChangeBlue = () => {
		setData('#0e32d4')
	}
	const handleColorChangeYellow = () => {
		setData('#e9ec13')
	}
	
	return (
		<div
			style={{
				display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                
			}}
		>
			<ConfigProvider
				theme={{
					token: {
						colorBorder:`${data}`,
					},
				}}
			>
				<Form
					form={form}
					initialValues={{
						remember: true,
					  }}
				>
					<Form.Item
						label="Nombre de Usuario"
						
						required= {true}
					>
						<Input
                	        placeholder='Ingrese Usuario'
                	    />
                	</Form.Item>
					<Form.Item
						label="Contraseña"
						required= {true}

					>
						<Input.Password
                	        placeholder='Ingrese Contraseña'
							
                	    />
                	</Form.Item>
                    <Form.Item>
                      <Space>
					  	<Button 
							name='greenButton'
							style={{borderColor: '#0fad31'}}
							type="outlined" 
							onClick={handleColorChangeGreen}
						>
							Verde
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
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Enviar
						</Button>
					</Form.Item>
				</Form>
			</ConfigProvider>
		</div>
	);
}

export default App;



















// import { useState } from 'react';
// import { Button, ConfigProvider, Space, Select, Switch, Input, theme } from 'antd';



// function App() {
// 	const [userColor, setUserColor] = useState('');
// 	const [passColor, setPassColor] = useState('');

// 	const [darkMode, setDarkMode] = useState(
// 		localStorage.getItem('theme') === 'dark' ||
// 		(localStorage.getItem('theme') !== 'light' &&
// 			matchMedia('(prefers-color-scheme: dark)').matches)
// 	);

// 	const handleColorChange = () => {
// 		localStorage.setItem('theme', userColor ? 'green' : 'dark');
// 		setUserColor('red');
// 	}

// 	return (
// 		<div
// 			style={{
// 				background: darkMode ? 'black' : 'white',
// 				height: 'calc(100vh - 40px)',
// 				padding: '20px',
// 			}}
// 		>
// 			<ConfigProvider
// 				theme={{
// 					algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
// 					token: {
// 						colorPrimary: 'pink',
// 						colorBorder: 'red',
// 						colorBgContainer: 'green'
// 					},
// 				}}
// 			>
// 				<Space direction="vertical">
// 					{/* <Switch
//             checked={darkMode}
            
//             onChange={() => {
//               localStorage.setItem('theme', darkMode ? 'light' : 'dark');
//               setDarkMode(!darkMode);
//             }}
//           /> */}
// 					<Space wrap>
// 						<Button
// 							type="primary"
// 							onClick={handleColorChange}
// 						>Primary Button</Button>

// 						<Input
// 							placeholder='Usuario'

// 						/>
// 						<Button>Default Button</Button>
// 						<Button type="dashed">Dashed Button</Button>
// 						<Button type="text">Text Button</Button>
// 						<Button type="link">Link Button</Button>
// 					</Space>
// 					<ConfigProvider
// 						theme={{
// 							algorithm: !darkMode
// 								? theme.darkAlgorithm
// 								: theme.defaultAlgorithm,
// 							token: {
// 								colorPrimary: 'pink',
// 								colorBorder: 'blue',
// 								colorBgContainer: 'white'
// 							},
// 						}}
// 					>

// 					</ConfigProvider>
// 				</Space>
// 			</ConfigProvider>
// 		</div>
// 	);
// }

// export default App;