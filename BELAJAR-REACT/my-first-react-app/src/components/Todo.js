const Todo = ({ dataTodo }) => {
	return (
		<li className="todo">
			<span className="text" data-key={dataTodo.id}>
				{dataTodo.title}
			</span>
			<button className="delTodo">✖</button>
		</li>
	)
}

export default Todo
