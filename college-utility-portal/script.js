function addSubject() {
  const div = document.createElement("div");
  div.className = "subject";
  div.innerHTML = `
    <input type="number" class="credits" placeholder="Credits">
    <select class="grade">
      <option value="">Grade</option>
      <option value="10">A+</option>
      <option value="9">A</option>
      <option value="8">B</option>
      <option value="7">C</option>
      <option value="6">D</option>
      <option value="5">E</option>
    </select>
  `;
  document.getElementById("subjects").appendChild(div);
}

function calculateGPA() {
  let credits = document.querySelectorAll(".credits");
  let grades = document.querySelectorAll(".grade");
  let totalC = 0, totalP = 0;

  for (let i = 0; i < credits.length; i++) {
    let c = parseFloat(credits[i].value);
    let g = parseFloat(grades[i].value);
    if (!isNaN(c) && !isNaN(g)) {
      totalC += c;
      totalP += c * g;
    }
  }

  document.getElementById("gpaResult").innerText =
    totalC ? "GPA: " + (totalP / totalC).toFixed(2) : "Enter valid data";
}

function calculateCGPA() {
  let arr = ["sem1", "sem2", "sem3"]
    .map(id => parseFloat(document.getElementById(id).value))
    .filter(v => !isNaN(v));
  document.getElementById("cgpaResult").innerText =
    arr.length ? "CGPA: " + (arr.reduce((a,b)=>a+b)/arr.length).toFixed(2) : "Enter GPA values";
}

function calculateAttendance() {
  let total = +totalClasses.value;
  let attended = +attendedClasses.value;
  if (!total) return attendanceResult.innerText = "Invalid input";
  let percent = ((attended / total) * 100).toFixed(2);
  let msg = `Attendance: ${percent}%`;
  if (percent < 75) {
    let need = Math.ceil((0.75 * total - attended) / 0.25);
    msg += ` ⚠️ Need ${need} more classes`;
  }
  attendanceResult.innerText = msg;
}

function predictGrade() {
  let m = +marks.value;
  let g =
    m >= 90 ? "A+" :
    m >= 80 ? "A" :
    m >= 70 ? "B" :
    m >= 60 ? "C" :
    m >= 50 ? "D" : "Fail";
  gradeResult.innerText = "Predicted Grade: " + g;
}

/* TODO */
function addTask() {
  let task = taskInput.value;
  if (!task) return;
  let li = document.createElement("li");
  li.innerText = task;
  taskList.appendChild(li);
  taskInput.value = "";
}

function saveNote() {
  localStorage.setItem("note", noteInput.value);
  noteStatus.innerText = "Note saved";
}

window.onload = () => {
  noteInput.value = localStorage.getItem("note") || "";
};

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}