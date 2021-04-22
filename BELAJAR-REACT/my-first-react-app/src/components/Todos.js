import Todo from "./Todo"

const Todos = ({ data }) => {
	return (
		<ul className="todos">
			{data.map((e) => (
				<Todo dataTodo={e} />
			))}
		</ul>
	)
}

export default Todos
