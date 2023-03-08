// fetch('https://reqres.in/api/users/555')
// .then(res => {
//     if (res.ok) {
//         console.log("Sucsess")
//     }
//     else {
//         console.log("Not sucsess")
//     }
// })
// .then(data => console.log(data))
// .catch(error => console.log("ERROR"))


fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Amir',
        surname: 'Ismailov',
    }),
})
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))