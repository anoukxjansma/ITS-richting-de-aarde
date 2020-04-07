
fetch('https://aws.random.cat/meow')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.file);
    

   // var foto = document.getElementById('katten');
	//	foto.innerHTML = response;
  })


// 	var request = await fetch ('https://aws.random.cat/meow');
// 	var test = await request.blob
// 	var img = document.createElement('img');

// 	img.src = url.createObjectURL(test);


// fetch('https://aws.random.cat/meow')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//    document.write(data.file);

//    // var foto = document.getElementById('katten');
// 	//	foto.innerHTML = response;
//   })


