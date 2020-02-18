const ourFirstButton = document.getElementById("ourFirstButton");

ourFirstButton.addEventListener("click", function(){
    console.log('button was clicked');
  });

const newWindowButton = document.getElementById("newWindowButton");

newWindowButton.addEventListener("click", ()=> {
    window.open('http://www.rebelsport.com.au','_blank','resizable=yes')
})
