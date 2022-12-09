import React from "react";

function MyList(props) {
    //let color=props["color"]
    //const name = props.name
    const { name, color, children }=props
    return (
        <>
            <h1 style={{color}}>This is {name} List {color}.</h1>
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