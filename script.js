// أسماء تظهر تدريجياً
let nameParts = ["شذى", "يحيى", "عطاء"];
let nameContainer = document.getElementById("nameContainer");
let index = 0;

function displayName() {
    if (index < nameParts.length) {
        let span = document.createElement("span");
        span.className = "name-part";
        span.innerText = nameParts[index];
        span.style.opacity = "0";
        nameContainer.appendChild(span);
        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transition = "opacity 1s ease-in";
            span.style.marginRight = "5px";
        }, 300 * index); // تأخير الظهور لكل جزء
        index++;
        setTimeout(displayName, 800);
    }
}

displayName();

// التحكم في ظهور الأقسام
document.getElementById('infoBtn').addEventListener('click', function() {
    let infoDiv = document.getElementById('info');
    infoDiv.style.display = (infoDiv.style.display === 'none' || infoDiv.style.display === '') ? 'block' : 'none';
    infoDiv.classList.toggle("fadeInSlide");
});

document.getElementById('workBtn').addEventListener('click', function() {
    let workDiv = document.getElementById('work');
    workDiv.style.display = (workDiv.style.display === 'none' || workDiv.style.display === '') ? 'block' : 'none';
    workDiv.classList.toggle("fadeInSlide");
});
