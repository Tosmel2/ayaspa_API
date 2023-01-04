// // api url
// const api_url = "https://swapi.dev/api/people/";
// const ttt = `${api_url}?page=${i}`;
// const numPages = 9;
// // Defining async function

// for (let i = 1; i <= numPages; i++) {
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     const data = await response.json();
//     console.log(data);
//     show(data.results);
// }
// }
// // Calling that async function
// getapi(ttt);


// function show(data) {
//     let items = data.map(character => {
//         return `
//             <div class="item">
//             <img src ="https://via.placeholder.com/100" height="100" width="200"/>
//                 <h3>Name: ${character.name}</h3>
//                 <p>Gender: ${character.gender}</p>
//                 <p>Height: ${character.height}</p>
//             </div>
//         `;
//     });
//     items = items.join("");
//     document.getElementById('character-details').innerHTML = items;
// }

            // TEST 2


        //     const api_url = "https://swapi.dev/api/people/";
        //     const numPages = 9;
            
        //     async function getapi(url) {
        //       // Storing response
        //       const response = await fetch(url);
            
        //       // Storing data in form of JSON
        //       const data = await response.json();
        //       console.log(data);
        //     //   show(data.results);
        //     // }
            
        //     for (let i = 1; i <= numPages; i++) {
        //       const ttt = `${api_url}?page=${i}`;
        //       getapi(ttt);
        //       show(data.results);
        //     }
        // }
        //     function show(data) {
        //       let items = data.map(character => {
        //         return `
        //           <div class="item">
        //             <img src ="https://via.placeholder.com/100" height="100" width="200"/>
        //             <h3>Name: ${character.name}</h3>
        //             <p>Gender: ${character.gender}</p>
        //             <p>Height: ${character.height}</p>
        //           </div>
        //         `;
        //       });
        //       items = items.join("");
        //       document.getElementById("character-details").innerHTML = items;
        //     }
            

        //TEST 3

// const api_url = "https://swapi.dev/api/people/";
// const numPages = 9;

// async function getapi(url) {
//     // Storing response
//     const response = await fetch(url);

//     // Storing data in form of JSON
//     const data = await response.json();
//     console.log(data);
//     return data.results;
// }

// let allData = [];
// for (let i = 1; i <= numPages; i++) {
//     const ttt = `${api_url}?page=${i}`;
//     allData = allData.concat(getapi(ttt));
// };

// show(allData);

// function show(data) {
//     let items = data.map(character => {
//     return `
//         <div class="item">
//         <img src ="https://via.placeholder.com/100" height="100" width="200"/>
//         <h3>Name: ${character.name}</h3>
//         <p>Gender: ${character.gender}</p>
//         <p>Height: ${character.height}</p>
//         </div>
//     `;
//     });
//     items = items.join("");
//     document.getElementById("character-details").innerHTML = items;
// }

                        //TEST 4

const api_url = "https://swapi.dev/api/people/";
const numPages = 9;

async function getapi(url) {
  // Storing response
    const response = await fetch(url);

  // Storing data in form of JSON
    const data = await response.json();
    console.log(data);
    return data.results;
}

let allData = [];
for (let i = 1; i <= numPages; i++) {
    const ttt = `${api_url}?page=${i}`;
    allData.push(getapi(ttt));
}

Promise.all(allData)
.then(data => {
// Flatten the array of arrays into a single array
data = data.flat();
show(data);
})
.catch(error => {
console.error(error);
});

function show(data) {
    let items = data.map(character => {
    return `
        <div class="item">
            <img src ="https://via.placeholder.com/100" height="100" width="100"/>
            <h3>Name: ${character.name}</h3>
            <p>Gender: ${character.gender}</p>
            <p>Height: ${character.height}</p>
        </div>
    `;
    });
    items = items.join("");
    document.getElementById("character-details").innerHTML = items;
}



// // modal box

// function showModal(name, gender, height, imageUrl) {
//     // Update the modal elements with the character's details
//     document.getElementById("modal-name").innerHTML = name;
//     document.getElementById("modal-gender").innerHTML = gender;
//     document.getElementById("modal-height").innerHTML = height;
//     document.getElementById("modal-image").src = imageUrl;
//     // Show the modal
//     document.getElementById("modal").style.display = "block";
// }

//   // Add an event listener to close the modal when the "x" is clicked
// document.getElementById("close-btn").addEventListener("click", () => {
//     document.getElementById("modal").style.display = "none";
// });

{/* <h3 onclick="showModal('${character.name}', '${character.gender}', '${character.height}', '${imageUrl}')">Name: ${character.name}</h3> */}

{/* <h3>Name: ${character.name}</h3> */}



// <div id="modal" class="modal">
//     <div class="modal-content">
//     <span id="close-btn" class="close-btn">&times;</span>
//     <img id="modal-image" src="" height="100" width="100">
//     <h3 id="modal-name"></h3>
//     <p id="modal-gender"></p>
//     <p id="modal-height"></p>
// </div>
// </div>