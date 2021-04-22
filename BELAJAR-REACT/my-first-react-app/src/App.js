import "./App.css"
import Todos from "./components/Todos"
import InputSection from "./components/InputSection"

function App() {
	const todos = [
		{
			id: 1,
			title: "Belajar Han!!",
			created: "Wed Apr 14 2021 07:32:10 GMT+0700 (Western Indonesia Time)",
			status: true,
		},
		{
			id: 2,
			title: "Buat design ui",
			created: "Wed Apr 14 2021 07:32:10 GMT+0700 (Western Indonesia Time)",
			status: false,
		},
		{
			id: 3,
			title: "Belajar React",
			created: "Wed Apr 14 2021 07:32:10 GMT+0700 (Western Indonesia Time)",
			status: true,
		},
		{
			id: 4,
			title: "Kasih makan kucing",
			created: "Wed Apr 14 2021 07:32:10 GMT+0700 (Western Indonesia Time)",
			status: false,
		},
		{
			id: 5,
			title: "Sumbit course BWA",
			created: "Wed Apr 14 2021 07:32:10 GMT+0700 (Western Indonesia Time)",
			status: true,
		},
	]
	return (
		<div className="App container">
			<h1>{"Hello Strangers"}</h1>
			<InputSection />
			<Todos data={todos} />
		</div>
	)
}

export default App
