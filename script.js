var sleep=document.querySelector("#sleep");
var heading=document.querySelector("h5")

var img=document.querySelector("img");


var wakeup=document.querySelector("#wakeup");
  var count=0;
wakeup.addEventListener("click", () => {
    

    if (count === 0) {
        heading.innerHTML = "Good morning, little one! 🌅 Rise and shine! 🌟";
        img.src = "https://img.freepik.com/free-vector/cute-koala-thumbs-up-with-branch-wood-tree-cartoon-vector-iconillustration-animal-nature-isolated_138676-10147.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais";
        count++;
    } else {
        count=0;
        heading.innerHTML="Wake up, little one! 🌅 It's time to greet the day with a smile! 😊✨"
        img.src = "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNTMteC5qcGc.jpg";
    }
});

sleep.addEventListener("click",()=>{
   
    if(count===0){
    heading.innerHTML="😴✨ Sweet dreams, little one! 💤🌙"
    // img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLu_L20jdiWw_WGEbh5JrMgMkM1BteCkerF5pZOLEFw&s"
    img.src="https://thumbs.dreamstime.com/b/koala-sleeping-cloud-cute-cartoon-vector-illustration-271729104.jpg"
    count++;
    }
    else{
        count=0;
        heading.innerHTML="Wake up, little one! 🌅 It's time to greet the day with a smile! 😊✨"
        img.src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNTMteC5qcGc.jpg"
    }
})