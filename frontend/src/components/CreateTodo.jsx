import { useState } from "react"

 export function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input style={{padding: "10px", margin: "10px"}} type="text" placeholder="title" 
            onChange={(e) => {
                setTitle(e.target.value)}}>
        </input><br/><br/>

        <input style={{padding: "10px", margin: "10px"}} type="text" placeholder="description"
        onChange={(e) => {
            setDescription(e.target.value)
        }}></input><br/><br/>

        <button style={{padding: "10px", margin: "10px"}} 
        onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                const data = await res.json()
                alert("Todo Added!")
            })
        }} >Add todo</button>
    </div>
}