function functionality() {
  //get main variables
  const inputValue = $("#add-item").val();
  const newItem = $(
    `<li class="item">${inputValue}<crossoutbutton><crossoutbutton></li>`
  );
  const errorMessage = $("#error-message");

  //add item and 
  if (inputValue === "") {
    errorMessage.css("visibility", "visible");
    $("#add-item").on("click", () => {
      errorMessage.css("visibility", "hidden");
    });
  } else {
    $("ol").append(newItem);
  }

  $("#add-item").on("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if ($("#add-item").val() === "") {
        console.log("ef");
      }
    }
  });

  const deleteButton = $("<crossOutButton></crossOutButton>");
  deleteButton.append(document.createTextNode("X"));
  newItem.append(deleteButton);

  deleteButton.on("click", () => {
    newItem.remove();
  });

  $("#list").sortable();
}
