import React, {useState, useEffect} from "react";

export default function PostList() {

    const [ myPosts, setMyPosts ] = useState(["1", "2", "3"])

    async function loadData() {
        const response = await fetch("http://localhost:8000/post")
        const data = await response.json()
        console.log(data)
        setMyPosts(data)
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <>
            <h1>Here is all my current posts.</h1>
            <ul>
                {myPosts.map((posts, idx) => <li key={idx}>{posts[1]}</li>)}
            </ul>
        </>
    )
}