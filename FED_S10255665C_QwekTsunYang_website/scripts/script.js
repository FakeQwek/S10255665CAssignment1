

/* Start of Searchbar */
const search = () =>{
    const searchbox = document.getElementById("search").value.toUpperCase();
    /* sets to upper so search is not case sensitive */ 
    const storeCalc = document.getElementById("calculator-slots");
    const calculator = document.querySelectorAll(".slot");
    const calculatorName = storeCalc.getElementsByClassName("name");
    /* declaring html elements as variables */
    for(var i = 0; i< calculatorName.length; i++) {
        /* set element with class name in slot */
        let match = calculator[i].getElementsByClassName("name")[0];
        if(match) {
            
            let text = match.textContent || match.innerHTML;
            /* checks each character at a time */
            if (text.toUpperCase().indexOf(searchbox) > -1){
                calculator[i].style.display = "";
            } 
            else {
                calculator[i].style.display = "none";
            }
            
            /* goes through each element with class slot matches, the text in search then 
            hides the elements accordingly */
        }
    }
}
/* End of Searchbar */

/* Button Alert */
function addedToCart() {
    alert("Added Successfully!");
}


/* Banner Display */
let bannerIndex = 0;
swapBanners();

function swapBanners() {
  /* gets all elements with class name banner */
  let banners = document.getElementsByClassName("banners");
  /* loops through each of the banners and makes them invisible*/
  for (let i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";
  }
  bannerIndex += 1;
  /* when banner index is all the way, reset the index to loop */
  if (bannerIndex > banners.length) {bannerIndex = 1}
  banners[bannerIndex-1].style.display = "block";
  setTimeout(swapBanners, 8000); 
  /* Swaps banner every 8 seconds */
}



