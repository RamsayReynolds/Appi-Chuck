function jokeconsult() {
    var imagen =  document.getElementById("imagenResultado");
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(res => res.json())
    .then(data =>{
      let element = document.getElementById('joke')
      element.innerHTML= `<p>${data.value}</p>`
      console.log(data)
    })
  }