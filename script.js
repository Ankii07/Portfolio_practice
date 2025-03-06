let mary_logo = document.querySelector(".Mary");
let nav_links = document.querySelectorAll(".menu");
let service_box = document.querySelectorAll(".service_box");
let service_element = document.querySelectorAll(".Service_element");
let service = document.querySelectorAll(".service");


// console.log(service_box);

// for testimonial sliders..
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

gsap.from(".Mary", {
  opacity: 0,
  x: -100,
  duration: 5,
  delay: 1,
});

gsap.from(".menu li", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 1,
});

gsap.from(".nav_button", {
  opacity: 0,
  x: -100,
  duration: 5,
  delay: 1,
});

var tl = gsap.timeline();

tl.from(".image_area", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 1,
});

tl.from(".text_area p", {
  opacity: 0,
  y: 50,
  // duration: 0.5,
  stagger: 1,
});

tl.from(".text_area button", {
  opacity: 0,
  y: 50,
  duration: 0.5,
});

// about section part..
// var tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".about_section",
//     scroller: "body",
//     markers: false,
//     start: "top 50%",
//     end: "top -20%",
//     scrub:2,
//   }
// })

gsap.from(".about_part_1", {
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".about_section",
    scroller: "body",
    markers: false,
    start: "top 50%",
    end: "top -20%",
    // scrub:1,
  }
});


gsap.from(".about_part_2 div", {
  opacity: 0,
  y:-80,
  duration: 1,
  // delay: 1,
  // stagger: 1,
  scrollTrigger: {
    trigger: ".about_section",
    scroller: "body",
    markers: false,
    start: "top 50%",
    end: "top -20%",
    // scrub:1,
  }
});

gsap.from("progress",{

  // opacity: 0,
  width:0,
  duration: 5,
  scrollTrigger: {
    trigger: "progress",
    scroller: "body",
    markers: false,
    start: "top 60%",
    end: "top 30%",
    scrub:2,
  }
})

gsap.from(".Education_part .Education_part_2",{
  opacity: 0,
  y: 100,
  stagger:1,
  duration: 5,
  scrollTrigger: {
    trigger: ".Education_part",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 10%",
    scrub:2,
  }
})


// offer area..
service_box.forEach((current_element,index) =>{
  current_element.addEventListener("mouseenter",function(){
    current_element.style.backgroundColor = "white"
    service_element[index].style.backgroundColor = "white"
    service[index].style.backgroundColor = "orange"
  })
})

service_box.forEach((current_element,index) =>{
  current_element.addEventListener("mouseleave",function(){
    current_element.style.backgroundColor = "orange";
    service_element[index].style.backgroundColor = "orange";
    service[index].style.backgroundColor = "white";
  })
})

// for text animation..

let h1 = document.querySelector(".text_animation");
console.log(h1);
function breakTheText(){
  // var h1 = document.querySelector("h1");

// var h1Text = h1.textContent;
// simply


let h1Text =  h1.innerText;
// console.log(h1Text);

// split ke braces mai jo likhenge uske base pe split krega
// agr space diya to space ke base pe aur agr khuch bhi nhi diya aur ek simply
// empty string pass kiya to share characters ek ek mai split hokr ek array mai aa 
// jayega..
var splittedText = h1Text.split("")

// var splittedText = h1Text.split("")
// // console.log(splittedText);

var clutter = "";

splittedText.forEach(function(elem,idx){
  // clutter += elem
  // clutter += `<span>${elem}</span>`
  console.log(elem);
      clutter += `<span>${elem}</span>`
  
})
console.log(clutter);
h1.innerHTML = clutter;
}
breakTheText();


setInterval(()=>{
  gsap.from(".text_animation span",{
    opacity: 0,
    // hum yha pe y:100 lgaye hai wh directly nhi chlega yha pe ek important baat gaur krne wali yh hai ki
    // hum animation lagr ek span tag pe jo ki ek inline element hai y: 100 simply kr rha hai ki transform translate lga rha
    // aur kyki transform translate inline element pe nhi chalta isiliye ise phle inline block mai convert krenge css mai tbhi chalega..
    translateX: -500,
    duration:0.5,
    // delay: 0.5,
    // stagger: 0.3,
    // agr stagger ki value - mai de diya to one by one aayega reverse direction se..
    stagger: 1,
})

},10000)


// console.log(h1);


// projects
let project = document.querySelectorAll('.project1');
console.log(project);



project.forEach((elem)=>{
  elem.addEventListener("mouseenter", function(event){
    const rect = elem.getBoundingClientRect(); // Get element position
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centerX; // Mouse X offset
    const deltaY = event.clientY - centerY; // Mouse Y offset

    const tiltX = (deltaY / rect.height) * 15; // Tilt factor
    const tiltY = -(deltaX / rect.width) * 15;

    elem.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
})

  elem.addEventListener("mouseleave", function(){
  elem.style.cssText =`
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;`
})
})

// blog area..
gsap.from(".blog_part",{
  opacity: 0,
  y:100,
  duration: 1,
  stagger: 1,
  scrollTrigger:{
    trigger: ".blog_part_area",
    // scroller: "body",
    // markers: true,
    // start: "top 60%",
    // end: "top 40%",
    // scrub:1,
  }

})

