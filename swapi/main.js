const getRes = document.querySelector('button')

const resBtn = (req, res) => {
    axios.get("https://swapi.dev/api/planets/2").then((res) => {
        // console.log(res.data.residents)
        for (i = 0; i < res.data.residents.length; i++){
            let arr = res.data.residents
            axios.get(arr[i]).then((resp) => {
                let residents = resp.data.name
                let h2 = document.createElement("h2")
               h2.textContent = residents
                document.querySelector('ul').append(h2)
            })
        }
    })
}

getRes.addEventListener('click', resBtn)