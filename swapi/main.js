const getRes = document.querySelector('button')

const resBtn = (req, res) => {
    axios.get("https://swapi.dev/api/planets/2").then((res) => {
        // console.log(res.data.residents)
        for (i = 0; i < res.data.residents.length; i++){
            let arr = res.data.residents
            axios.get(arr[i]).then((resp) => {
                let residents = resp.data.name
                let h1 = document.createElement("h1")
               h1.textContent = residents
                document.querySelector('body').append(h1)
            })
        }
    })
}

getRes.addEventListener('click', resBtn)