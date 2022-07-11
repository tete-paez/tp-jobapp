
// edit job
// boton editar: btnIdEdit
// funcion de editar: editJob

// al boton btnEdit al hacerle click tiene que llenarse el container con el formilario de editar
//  o sea... que tengo que hacer la funcion primero que lo renderiza... y luego ponerle el onclick al boton ese

const renderEditForm = (id) => {
  container.innerHTML = "";
  container.innerHTML += `
  <div id="jobCreationSucceded">
  </div>
  <div class="container__modal-edit-career">
      <form id="modal-create-job" action="">
          <div class="form__edit-career">
              <label>Job Title </label>
              <input id="editJobTitleForm" type="text" required>
              <div class="textAreaDescription">

                  <label>Description </label>
                  <textarea name="" id="editDescriptionForm" rows="5"></textarea>
              </div>

              <label>Tags </label>
              <select name="Location" id="editTagLocationForm">
                  <option value="Location">Location*</option>
                  <option value="BuenosAires">Buenos Aires</option>
                  <option value="Cordoba">Cordoba</option>
                  <option value="Neuquen">Neuquen</option>
                  <option value="La Pampa">La Pampa</option>
              </select>
              <select name="Category" id="editTagCategoryForm">
                  <option value="Seniority">Seniority*</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Junior">Junior</option>
                  <option value="Semi-Senior">Semi Senior</option>
                  <option value="Senior">Senior</option>
              </select>
              <select name="Experience" id="editTagSeniorityForm">
                  <option value="Yes">Experience*</option>
                  <option value="No">Yes</option>
                  <option value="Competition">No</option>
              </select>
          </div>
          <div class="btn__alignment">
              <button id="cancelledJobCreationBtn" class="btn delete" type="submit">Cancel</button>
              <button id="submitJobCreation" class="btn edit" type="submit" onclick="submitJobCreation" >Submit</button>
          </div>

      </form>`
};
// TOMA LOS VALORES DEL FORM debo hacer que esto ande con el boton de submit del formulario editar
const editAndCreateNewJob = () => {
    return {
        name: queryId("editJobTitleForm").value,
        description: queryId("editDescriptionForm").value,
        location: queryId("editTagLocationForm").value,
        categoryme: queryId("editTagCategoryForm").value,
        seniority: queryId("editTagSeniorityForm").value

    }
}

// ALERTA QUE FUNCIONA
const succededEdition = () => {
    queryId("jobEditionForm").innerHTML += `
    <p class="creationSucceded">Your job has been edited Succesfully!</p>
    `
}

//PUT
const editJob = (id) => {
    fetch(`${BASE_URL}it-Jobs/${id}`, {
        method: "PUT",
            headers: {
                    "Content-Type": "Application/json"
                },
            body: JSON.stringify(editAndCreateNewJob())
    })
    .then(() => showJobDetail(id))
    .catch(err => console.log(err))
}