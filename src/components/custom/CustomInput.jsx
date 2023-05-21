import React from 'react'
import { Form, Input } from 'antd'

// import { rules } from '../Rules'
// import './style.css'

export default function CustomInput(props) {
	return (
		<>
			<h3 className='own-form-label'>
				{props.label} 
				{/* {props.rules ? '*' : ''} */}
			</h3>
			<Form.Item name={props.name} 
			// rules={rules[props.rules]} extra={props.extra}
			>
				<Input
					size={props.size}
					className={props.className}
					placeholder={props.componentplaceholder}
					autoComplete={props.autoComplete}
					{...props}
				/>
			</Form.Item>
			<p className='own-form-example-input'>{props.example}</p>
		</>
	)
}