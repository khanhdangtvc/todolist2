import React, { useState } from "react";
import ToDoList from "./ToDolist";
import InputForm from "./inputForm";
function App() {
	const [value, setValue] = useState([]);
	function updateValue(event) {
		// console.log("Input", event);
		setValue((preValue) => {
			return [...preValue, event];
		});
	}
	let clasName = "btn-click";
	function del(event) {
		console.log(event);
		setValue((preValue) => {
			return value.filter((value, index) => {
				return index != event ? value : "";
			});
		});
	}
	return (
		<div className="container">
			<InputForm setValue={updateValue}></InputForm>
			<div>
				{value.map((e, index) => {
					return (
						<ToDoList content={e} key={index} value={index} delete={del} />
					);
				})}
			</div>
		</div>
	);
}

export default App;
