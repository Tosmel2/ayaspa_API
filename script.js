const api_url = "https://swapi.dev/api/people/";
const numPages = 9;
let currentPage = 1;

async function getapi(page) {
    const url = `${api_url}?page=${page}`;
  // Storing response
    const response = await fetch(url);

  // Storing data in form of JSON
    const data = await response.json();
    console.log(data);
    return data.results;
}

const imageUrls = [
    "https://media.istockphoto.com/id/1136383448/photo/advanced-robot-hands-using-laptop-computer-technology-related-3d-render.jpg?s=612x612&w=0&k=20&c=19KzauJDyHvwdE0r44iRP6YkwSUcZDz3RTztSubtePY=",
    "https://media.istockphoto.com/id/1204996036/vector/vaporwave-style-retrofuturistic-landscape-with-perspective-grid-and-glowing-circle-with-fog.jpg?s=612x612&w=0&k=20&c=OinXSCGuYay_Jy3Q5srPXHkIHmgxpsCxHeXiXn-FNPQ=",
    "https://media.istockphoto.com/id/1347879857/photo/space-background-astronaut-standing-on-mountain-landscape-with-flying-spaceship-in-colorful.jpg?s=612x612&w=0&k=20&c=vCLVqMAYsBeixFp6AV9DSrsYJS3BmOSx_XEhOjFUNbE=",
    "https://media.istockphoto.com/id/1256710896/vector/abstract-background-with-transparent-sphere-from-points-constructed-sphere-wireframe.jpg?s=612x612&w=0&k=20&c=yfP7jGXBjxuKG5ztqW05yBg_OhXiMENOz-Rf_1x8g6U=",
    "https://media.istockphoto.com/id/1276988873/photo/3d-render-interior-scifi-corridor-concept-design.jpg?s=612x612&w=0&k=20&c=Y0RMzdCQcfENqUGsnRM629JsuKvp4Li-7iYQLSVgnDs=",
    "https://media.istockphoto.com/id/508628842/photo/damaged-ceiling.jpg?s=612x612&w=0&k=20&c=zjhmx7JCNPi_vInVAYfjsdi0IRSAKQo1_Bb2ZwYyzJ0=",
    "https://media.istockphoto.com/id/1082817652/photo/curve-alliance-movement-of-shafts-blue-and-yellow-3d.jpg?s=612x612&w=0&k=20&c=6u9zjvXw8G0D4oXSatpKJ2B2e5XtcQmb-jpusHxZIcM=",
    "https://media.istockphoto.com/id/1383548276/photo/mysterious-unidentified-flying-object-hovering-over-martian-landscape.jpg?s=612x612&w=0&k=20&c=pkta-72CguKnloMrAEwXrvW2F7SxkkaAQjKG5QUKWU0=",
    "https://media.istockphoto.com/id/519359641/photo/roadtrip-down-a-colorful-road-in-the-fall.jpg?s=612x612&w=0&k=20&c=QyLcgO78LHndy81z7Nvc6IholNGDmYvwAeeK1y0fVW8=",
    "https://media.istockphoto.com/id/510996311/photo/sunset-wave.jpg?s=612x612&w=0&k=20&c=LjvpR4AfiAMC0m8HqZmokh7-qr-MTDt-egtbf8zx8lQ=",
    "https://media.istockphoto.com/id/1408166307/photo/3d-illustration-of-sci-fi-model.jpg?s=612x612&w=0&k=20&c=BIXHi6PDU3FbOV1zYmbnBgZw4-HGjLVRsPyFXfiDuVs=",
    "https://media.istockphoto.com/id/1370516195/photo/podium-show-products-empty-stage-place-for-product-colored-neon-lights-place-to-present-a.jpg?s=612x612&w=0&k=20&c=Uxal-R--7pGV6FWnPkya4niLc_7mll42GZPvHTBjz18=",
    "https://media.istockphoto.com/id/1353996585/photo/following-shot-of-brave-astronaut-in-space-suit-confidently-walking-on-moon-covered-in-rocks.jpg?s=612x612&w=0&k=20&c=-t-KB_TAnLKXqnm3_EYSSghrpLtGaBV7YACAP0lgk_s=",
    "https://media.istockphoto.com/id/518259669/photo/man-magician.jpg?s=612x612&w=0&k=20&c=O8CtOIqHT8fZ5wMUNvNdVJHQWQvCV_9Cy48XBamoDQA=",
    "https://media.istockphoto.com/id/1387842392/photo/hotel-lobby-interior.jpg?s=612x612&w=0&k=20&c=S4kEMlm7BNxL5gQzVAYl8uyf9INfR59VScaC3JTJQ9U=",
    // Add more image URLs here
];

function show(data) {
    let items = data.map(character => {
        // Generate a random number between 0 and the number of images
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        // Use the random number to select a random image from the list
        const imageUrl = imageUrls[randomIndex];
    return `
        <div class="item">
            <img src="${imageUrl}" height="100" width="100%"/>
            <h3>Name: ${character.name}</h3>
            <p>Gender: ${character.gender}</p>
            <p>Height: ${character.height}cm</p>
        </div>
    `;
    });
    items = items.join("");
    document.getElementById("character-details").innerHTML = items;
}


// Add event listeners to the buttons
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        getapi(currentPage).then(data => {
        show(data);
        if (currentPage === 1) {
            // document.getElementById("prev-btn").style.display = "none";
            document.getElementById("prev-btn").style.backgroundColor = "#CCCCCC";
        }
        if (currentPage < numPages) {
            // document.getElementById("prev-btn").style.display = "inline-block";
            document.getElementById("next-btn").style.backgroundColor = "green";
        }
        });
    }
    });
document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < numPages) {
        currentPage++;
        getapi(currentPage).then(data => {
        show(data);
        if (currentPage > 1) {
            // document.getElementById("prev-btn").style.display = "inline-block"
            document.getElementById("prev-btn").style.backgroundColor = "green";
        }
        if (currentPage === numPages) {
            // document.getElementById("prev-btn").style.display = "none"
            document.getElementById("next-btn").style.backgroundColor = "#CCCCCC";
        }
        });
    }
});

  // Get the data for the first page
getapi(currentPage).then(data => {
    show(data);
    document.getElementById("prev-btn").style.backgroundColor = "#CCCCCC";
    document.getElementById("next-btn").style.backgroundColor = "green";
});
