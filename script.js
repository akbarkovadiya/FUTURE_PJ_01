function downloadResume() {
  const link = document.createElement("a");
  link.href="./assest/Akbarali_Resume.pdf";
  link.download = "Akbarali_Resume.pdf";
  link.click();
}


function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}