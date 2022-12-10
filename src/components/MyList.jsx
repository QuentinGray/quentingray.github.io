import React, {useState, useEffect} from "react";

function MyList(props) {
    // let color=props["color"]
    // const name = props.name
    const { color, children } = props
    const [ name, setName ] = useState("notset")
    // let name = "QuEnTiN"
    async function loaddata() {
        let response = await fetch("http://127.0.0.1:8000/hello")
        let data = await response.json()
        console.log(data)
        setName(data.name)
        return () => {}

    }
    useEffect(() => {
        loaddata()
    }, [])
    return (
        <>
            <h1 style={{color}}>This is {name} List {color}.</h1>
            <button onClick={loaddata}>Load Data</button>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Coconut</li>
            </ul>
            This is the children value {children}
        </>
    )
}

export default MyList