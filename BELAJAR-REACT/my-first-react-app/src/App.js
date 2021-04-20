import "./App.css"

function App() {
	const user = {
		name: "rayhan",
	}
	return (
		<div className="App">
			<h1>{user.name ? `Hello ${user.name}` : "Hello Strangers"}</h1>
		</div>
	)
}

export default App
