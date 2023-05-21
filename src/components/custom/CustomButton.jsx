import React from 'react'
import { Form, Button } from 'antd'


export default function CustomButton(props) {
	return (
		<>
			<Form.Item>
				<Button className={props.className} >
					{props.label}
				</Button>
			</Form.Item>
		</>
	)
}