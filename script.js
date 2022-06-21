const BASE_URL = "https://6254d2b889f28cf72b621ad7.mockapi.io/"
const queryId = (idName) => document.getElementById(idName)

const container = document.getElementById("cardsContainer");

// REQUESTS

// FETCH

const getJobs = () => {
    fetch(`${BASE_URL}it-Jobs`)
        .then(res => res.json())
        .then(data => createcards(data))
        .catch(err => console.log(err))
}
getJobs()

// en la funcion de pilar se llama userDetail
const getIdToSeeDetail = (id) => {
    fetch(`${BASE_URL}it-Jobs/${id}`)
    .then(res => res.json())
    .then(data => showJobDetail(data))
    .catch(err => console.log(err))
}

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
        <button class="btn " onclick="getIdToSeeDetail(${id})">See Detail</button>
    </div>`
    }
}

const stopShowingCards = () => container.innerHTML = ""

const showJobDetail = (job) => {
    //console.log(job)
    stopShowingCards()
    const { name, description, location, category, seniority, id } = job
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
                        <button id="deleteBtn" class="btn edit__delete-btns delete" onclick="deleteJob">Deleteeeee</button>
                    </div>
                </div>
           
        </div>
    `
}



// EL DE PILI ES SAVEuSERiNFO
const submitJobCreation = document.getElementById("submitJobCreation")

const saveAndCreateNewJob = () => {
    return {
        name: queryId("jobTitleForm").value,
        description: queryId("descriptionForm").value,
        location: queryId("tagLocationForm").value,
        categoryme: queryId("tagCategoryForm").value,
        seniority: queryId("tagSeniorityForm").value

    }
}

const succededCreation = () => {
    queryId("jobCreationSucceded").innerHTML += `
    <p class="creationSucceded">Your youb has been uploaded Succesfully!</p>
    `
}

// // POST 
queryId("submitJobCreation").addEventListener("click", (e) => {
    e.preventDefault()
      fetch(`${BASE_URL}it-Jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(saveAndCreateNewJob()),
      })
      .then(res => {
          if (res.ok) {
              succededCreation()
          }
      })
      .catch(err => console.log(err))
      .finally(() => location.reload());
    }
  );

//   DELETE
  const deleteJob = () => {
queryId("deleteBtn").addEventListener("click", (e) => {
    e.preventDefault()
      fetch(`${BASE_URL}it-Jobs/${id}`, {
        method: "DELETE",
      })
    .finally(() =>console.log("termine de hacer el delete"))
})
};
deleteJob();
