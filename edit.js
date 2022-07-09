
// edit job
// boton editar: btnIdEdit
// funcion de editar: editJob

// al boton btnEdit al hacerle click tiene que llenarse el container con el formilario de editar
//  o sea... que tengo que hacer la funcion primero que lo renderiza... y luego ponerle el onclick al boton ese

const renderEditForm = (id) => {
  container.innerHTML = "";
  container.innerHTML += `
    <div id="jobEditionForm">
    </div>
    <div class="container__modal-edit-career">
        <form id="modal-editate-job" action="">
                <div class="form__edit-career">
                    <label>Job Title </label>
                    <input id="editJobTitleForm" type="text" required>
                    <div class="textAreaDescription">

                        <label>Description </label>
                        <textarea name="" id="editDescriptionForm" rows="5"></textarea>
                    </div>

                    <label>Tags </label>
                    <input id="editTagLocationForm" type="text" required>
                    <input id="editTagCategoryForm" type="text" required>
                    <input id="editTagSeniorityForm" type="text" required>
                </div>
            <div class="btn__alignment">
                    <button id="cancelledJobEditionBtn" class="btn delete" type="submit">Cancel</button>
                    <button id="submitJobedition" class="btn edit" type="submit" onclick="editJob(${id})">Edit</button>
            </div>

        </form>
    </div>`;
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