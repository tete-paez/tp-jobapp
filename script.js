const BASE_URL = "https://6254d2b889f28cf72b621ad7.mockapi.io/"
const queryId = (idName) => document.getElementById(idName)

// el container de todas las cards
const container = document.getElementById("cardsContainer"); 
// cada card tiene un data-id y es cada id de la card

// REQUESTS

// FETCH - GET 

const getJobs = () => {
    fetch(`${BASE_URL}it-Jobs`)
        .then(res => res.json())
        .then(data => createcards(data))
        .catch(err => console.log("err"))
}
getJobs()

const createcards = (jobs) => {
    for (const job of jobs) {
        const { name, description, location, category, seniority, id } = job
        container.innerHTML += `
        <div class="card">
        <h3 class="title__career">${name}</h3>
        <img src="./assets/img-200x200.jpg" alt="img-card">
        <p class="career_description">${description}</p>
        <div class="badges-container">
        <span class="badge">${location}</span>
        <span class="badge">${category}</span>
        <span class="badge">${seniority}</span>
        </div>
        <button id="getIdToSeeDetailBtn" class="btn " onclick="getIdToSeeDetail(${id})" data-Id=${id} >See Detail</button>
    </div>`
    }// aca iria el set time out del spinner
}

const getIdToSeeDetail = (id) => {
    fetch(`${BASE_URL}it-Jobs/${id}`)
    .then(res => res.json())
    .then(data => showJobDetail(data))
    .catch(err => console.log(err))
}

const stopShowingCards = () => container.innerHTML = ""

const showJobDetail = (job) => {
    //console.log(job)
    stopShowingCards()
    // aca iria el set time out del spinner?
    const { name, description, id } = job
    container.innerHTML = `
    <div id="containerModalSeeDetails" class="container__modal-see-details">
                <div class="card__see-details">
                    <h3 class="title__career">${name}</h3>
                    <div class="flex__see-details">
                        <div>
                            <img src="./assets/img-200x200.jpg" alt="avatardevelopers-img
                            ${name}">
                        </div>
                        <div>
                            <p class="career_description">${description}
                            </p>
                        </div>
                    </div>
                    <div class="see-details-btns">
                        <button id="editBtn" class="btn edit__delete-btns edit">Edit</button>
                        <button id="deleteBtn" class="btn edit__delete-btns delete" onclick="checkingDeleteThisJob" >Deleteeeee</button>
                        </div>
                        </div>
                        
                        </div>
                        `
                        // 

    // const btnIdEdit = document.getElementById("editBtn");
    // btnIdEdit.addEventListener("click", editJob)
    
    const btnIdDelete = document.getElementById("deleteBtn");
    btnIdDelete.addEventListener("click", checkingDeleteThisJob)
}