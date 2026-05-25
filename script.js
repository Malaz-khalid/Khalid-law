emailjs.init("fIgSeX2mFIw5xrErw");

let messageText="";

document.getElementById("appointmentForm").addEventListener("submit",function(e){
  e.preventDefault();

  let name=document.getElementById("name").value;
  let phone=document.getElementById("phone").value;
  let date=document.getElementById("date").value;
  let time=document.getElementById("time").value;
  let problem=document.getElementById("problem").value;

  emailjs.send("service_td26k69","template_d0ac87q",{
    name:name,
    phone:phone,
    date:date,
    time:time,
    problem:problem
  });

  messageText=`طلب حجز موعد\nالاسم: ${name}\nالهاتف: ${phone}\nالتاريخ: ${date}\nالساعة: ${time}\nالمشكلة:\n${problem}`;

  document.getElementById("confirmBox").style.display="block";
  document.getElementById("details").innerHTML=
  `الاسم: ${name} <br>رقم الهاتف: ${phone} <br>التاريخ: ${date} <br>الساعة: ${time}`;
});

function openWhats(){
let url="https://wa.me/qr/K7FBMIEJB76AJ1?text="+encodeURIComponent(messageText);
window.open(url);
}
document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();

  let name = document.getElementById("cname").value;
  let phone = document.getElementById("cphone").value;
  let msg = document.getElementById("cmsg").value;

  let text = `الاسم: ${name}%0Aالهاتف: ${phone}%0Aالرسالة: ${msg}`;

  window.open("https://wa.me/249122076160?text=" + text);

  this.reset();
});
let currentIndex = 0;

function showSlide(index){
  const slider = document.getElementById("slider");
  const cards = document.querySelectorAll(".team-card");
  const dots = document.querySelectorAll(".dots span");

  if(index >= cards.length) currentIndex = 0;
  else if(index < 0) currentIndex = cards.length - 1;
  else currentIndex = index;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function moveSlide(step){
  showSlide(currentIndex + step);
}

function goToSlide(index){
  showSlide(index);
}

/* Auto slide */
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

/* init */
showSlide(0);
