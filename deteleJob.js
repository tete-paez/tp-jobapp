// DELETE THIS JOB
const btnIdDelete = document.getElementById("deleteBtn");
const divDondeEstaLaModalSiDeseoEliminar = document.getElementById("cardsContainer")

const deleteJob = (id) => {
      fetch(`${BASE_URL}it-Jobs/${id}`, {
          method: "DELETE",
        })
        .then(()=>getJobs())
        .finally(() => console.log("termine de hacer el delete"));
};

// que aparezca la modal si estas seguro que queres borrar
const modalAreYouSureYouWantToDeleteThisJob = document.getElementById(
  "modalCheckingDeleteThisJob");

const checkingDeleteThisJob = (id) => {
    console.log("click");
    divDondeEstaLaModalSiDeseoEliminar.innerHTML += `
    <div class="modal-delete-container" id="modalCheckingDeleteThisJob">
        <div class="modal-delete" >
            <h4>Are you sure you want to delete this job?</h4>
            <div class="cancel-accept">
                <button id="closeModalDeleteJob" class="btn edit">Cancel</i></button>
                <button id="acceptJobDelete" class="btn delete">Yes, Delete it!</button>
            </div>
        </div>
    </div>`;
// cancel
  const cancelDeletingThisJobBtn = document.getElementById("closeModalDeleteJob")

  const modalDelete = document.getElementById("modalCheckingDeleteThisJob")
  cancelDeletingThisJobBtn.addEventListener("click", () => {
    modalDelete.style.display = "none";
    showJobDetail(job);
  });

//delete
  const acceptDeletingThisJobBtn = document.getElementById("acceptJobDelete");
        acceptDeletingThisJobBtn.addEventListener("click", () => {
    deleteJob(id);
  });

};

// al hacer click en boton eliminar > se tiene que abrir una modal que consulte si quiere borrar ese aviso

// el boton eliminar de la ventana modal SI TIENE el ID como parámetro para borrar ESE job

// al hacer click en ese boton se tiene que ejecutar la petición delete y hay que pasarle el ID como parámetro, desde el botón, al método



