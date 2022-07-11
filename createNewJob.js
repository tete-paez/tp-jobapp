const BASE_URL = "https://6254d2b889f28cf72b621ad7.mockapi.io/"
const queryId = (idName) => document.getElementById(idName)

const container = document.getElementById("cardsContainer");

const submitJobCreation = document.getElementById("submitJobCreation")

const saveAndCreateNewJob = () => {
    return {
        name: queryId("jobTitleForm").value,
        description: queryId("descriptionForm").value,
        location: queryId("tagLocationForm").value,
        categoryme: queryId("tagCategoryForm").value,
        seniority: queryId("tagExperience").value

    }
}

const succededCreation = () => {
    queryId("jobCreationSucceded").innerHTML += `
    <p class="creationSucceded">Your job has been uploaded Succesfully!</p>
    `
}

// // POST 
submitJobCreation.addEventListener("click", (e) => {
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


