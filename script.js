function functionality() {
  //get main variables
  const inputValue = $("#add-item").val();
  const newItem = $(
    `<li class="item">${inputValue}<crossoutbutton><crossoutbutton></li>`
  );
  const errorMessage = $("#error-message");

  //add item and throw error if there's no value when adding an item
  if (inputValue === "") {
    errorMessage.css("visibility", "visible");
    $("#add-item").on("click", () => {
      errorMessage.css("visibility", "hidden");
    });
  } else {
    $("ol").append(newItem);
  }

  //delete item with the crossout btn
  const deleteButton = $("<crossOutButton></crossOutButton>");
  deleteButton.append(document.createTextNode("X"));
  newItem.append(deleteButton);
  deleteButton.on("click", () => {
    newItem.remove();
  });

  //add double click feture to crossout buttons when double clicked and to uncross them
  const doubleClick = () => {
    if (!newItem.hasClass("strike")) {
      newItem.addClass("strike");
    } else {
      newItem.removeClass("strike");
    }
  };
  newItem.on("dblclick", doubleClick);

  //add sorting functionality to the list
  $("#list").sortable();
}

function enterFunctionality() {
  const inputElement = $("input");
  const errorMessage = $("#error-message");

  inputElement.on("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputElement.val() === "") {
        errorMessage.css("visibility", "visible");
        $("#add-item").on("click", () => {
          errorMessage.css("visibility", "hidden");
        });
      } else {
        functionality();
      }
    }
  });
}

enterFunctionality();
