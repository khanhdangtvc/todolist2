import React, { useState } from "react";

const InputForm = (props) => {
	let [Input, setInput] = useState("");
	let [css, setCss] = useState(false);

	function updateChange(event) {
		const newInput = event.target.value;
		setInput(newInput);
	}

	return (
		<div>
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input type="text" onChange={updateChange} />
				<button
					onClick={(event) => {
						props.setValue(Input);
					}}>
					<span>Add</span>
				</button>
			</div>
		</div>
	);
};

export default InputForm;
