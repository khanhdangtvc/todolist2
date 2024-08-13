import React from "react";

function ToDoList(props) {
	return (
		<div
			onClick={() => {
				props.delete(props.value);
			}}>
			<li> {props.content}</li>
		</div>
	);
}
export default ToDoList;
