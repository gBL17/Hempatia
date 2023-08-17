function toggleTextClassroomCourse() {
  var defaultText = document.getElementById("default");
  var textClassroom = document.getElementById("classroom_course");
  var textOnline = document.getElementById("online_course");
  var textEBook = document.getElementById("e-book");
  if (textClassroom.style.display === "none") {
    defaultText.style.display = "none";
    textClassroom.style.display = "block";
    textOnline.style.display = "none";
    textEBook.style.display = "none";
    textClassroom.classList.add("animated");
  } else {
    textClassroom.style.display = "none";
    defaultText.style.display = "block";
    defaultText.classList.add("animated");
  }
}

function toggleTextOnlineCourse() {
  var textClassroom = document.getElementById("classroom_course");
  var textOnline = document.getElementById("online_course");
  var textEBook = document.getElementById("e-book");
  var defaultText = document.getElementById("default");
  if (textOnline.style.display === "none") {
    defaultText.style.display = "none";
    textOnline.style.display = "block";
    textClassroom.style.display = "none";
    textEBook.style.display = "none";
    textOnline.classList.add("animated");
  } else {
    textOnline.style.display = "none";
    defaultText.style.display = "block";
    defaultText.classList.add("animated");
  }
}

function toggleTextEBook() {
  var textClassroom = document.getElementById("classroom_course");
  var textOnline = document.getElementById("online_course");
  var textEBook = document.getElementById("e-book");
  var defaultText = document.getElementById("default");
  if (textEBook.style.display === "none") {
    defaultText.style.display = "none";
    textEBook.style.display = "block";
    textClassroom.style.display = "none";
    textOnline.style.display = "none";
    textEBook.classList.add("animated");
  } else {
    textEBook.style.display = "none";
    defaultText.style.display = "block";
    defaultText.classList.add("animated");
  }
}
