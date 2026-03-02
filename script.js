// ===== Scroll Reveal =====
const sections = document.querySelectorAll("section");
const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) section.classList.add("visible");
  });
};
window.addEventListener("scroll", revealSection);
revealSection(); // Initial call

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
// ===== Service Modals =====
const services = {
  cybersecurity:{title:"🔐 Cybersecurity Solutions", content:"Launching soon. Join our waitlist.", extra:`<input type="email" placeholder="Enter your email"><button onclick="window.location.href='mailto:cybershieldafrica9@gmail.com?subject=Hi Cybersecurity Services'">Notify Me</button>`},
  web:{title:"🌐 Website & System Development", content:"Web Design, E-commerce, Systems.", extra:`<button onclick="window.location.href='mailto:cybershieldafrica9@gmail.com?subject=Hi Website & System Development Services'">Contact Us</button>`},
  branding:{title:"📊 Digital Strategy & Branding", content:"Brand Identity, Marketing, Logos.", extra:`<button onclick="window.location.href='mailto:cybershieldafrica9@gmail.com?subject=Hi Digital Strategy & Branding Services'">Contact Us</button>`},
  government:{title:"🏢 Government & Corporate IT Support", content:"Our government services include:", extra:`<ul><li>NTSA Services</li><li>KRA Services</li><li>NSSF Services</li><li>SHA Services</li></ul><button onclick="window.location.href='mailto:cybershieldafrica9@gmail.com?subject=Hi Government IT Services'">Contact Us</button>`},
  application:{title:"📄 Online Application & Consultancy", content:"Job, University, Tender Applications.", extra:`<button onclick="window.location.href='mailto:cybershieldafrica9@gmail.com?subject=Hi Application Services'">Contact Us</button>`},
  design:{title:"🎨 Graphic Design Services", content:"Posters, Flyers, Branding.", extra:`<button onclick="window.location.href='mailto:cybershieldafrica9@gmail.com?subject=Hi Graphic Design Services'">Contact Us</button>`}
};

function openServiceModal(service){
  const modal=document.getElementById("serviceModal");
  modal.style.display="block";
  document.getElementById("modalTitle").innerHTML=services[service].title;
  document.getElementById("modalContent").innerHTML=services[service].content;
  document.getElementById("modalExtra").innerHTML=services[service].extra;
}

function closeModal(){document.getElementById("serviceModal").style.display="none";}
window.onclick=function(event){if(event.target==document.getElementById("serviceModal")) closeModal();}
