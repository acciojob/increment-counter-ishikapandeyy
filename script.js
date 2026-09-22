//your JS code here. If required.
let btn=document.querySelector("#incrementBtn")
let count=document.querySelector("#counter")
btn.addEventListener("click",()=>{
	let num=Number(count.textContent)
	alert(num)
	count.textContent=num+1
})