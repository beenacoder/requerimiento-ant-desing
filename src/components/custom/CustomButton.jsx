import React from 'react'
import { Form, Button } from 'antd'


export default function CustomButton(props) {

	return (
		<>
			<Form.Item>
				<Button 
					htmlType={props.htmlType}
					name={props.name}
					value={props.value}
					onClick={props.handleClick}
					className={props.className} >
					{props.label}
				</Button>
			</Form.Item>
		</>
	)
}