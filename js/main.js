// This is the JS file for displaying the Current Year in the footer section.
const year=document.getElementById("year")
const thisYear=new Date().getFullYear()
year.setAttribute("datetime",thisYear)
year.textContent=thisYear