const postapi = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: "bootcamp",
            body: "javascript",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    console.log("API ", api);
    const json = await api.json()
    console.log("json ", json);
}

postapi()