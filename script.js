/*first I take the id Every element from index.html, I declare it in javascript */
let section = document.getElementById("section");
let name = document.getElementById("name");
let world = document.getElementById("world");

/*secondly, I deleted the h2 element with id world */
world.remove();

/*Third, I change the text element in the id name to the middle. I use flexbox */
section.style.display = "flex";
section.style.height = "100vh";
section.style.justifyContent = "center";
section.style.alignItems = "center";
