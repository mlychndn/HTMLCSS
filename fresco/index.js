function onFormSubmit(e) {
  // call all the below functions here to use this function in the form while implementing onsubmit.
  e.preventDefault();
  console.log("form is submitted");
}

function readFormData() {
  // return all the input values from three input fields here.
}

function insertNewRecord(data) {
  // this function should insert a new row with data in the table.
}
function resetForm() {
  // this function should reset the form fields.
}
if (typeof exports !== "undefined") {
  module.exports = {
    onFormSubmit,
    readFormData,
    insertNewRecord,
    resetForm,
  };
}
