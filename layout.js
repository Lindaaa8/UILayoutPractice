let empty_spark = "file:///Users/grace/Desktop/UILayoutTest/Assets/icon/spark-empty.png";
let full_spark = "file:///Users/grace/Desktop/UILayoutTest/Assets/icon/spark-full.png";


let selected = document.getElementById('topItem');
let child, imgList = null;
if (selected !== null) {
    child = selected.children[1];
    imgList = child.children;
    child.addEventListener("click", function(){
        for (let i = 0; i < imgList.length; i++) {
            if (imgList[i].src === empty_spark) {
                imgList[i].src = full_spark;
                return true;
            } 
        }
    });
}

new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

let items = document.querySelectorAll('.item');
let len = items.length;
let curr = items[len-1].children[0].src;

window.onload = function() {
    document.getElementById("next").onclick = function fun() {
        for (let i = 0; i < len; i++) {
            if (i !== len-1) {
                items[i].children[0].src = items[i+1].children[0].src;
                console.log('1');
            } else {
                items[i].children[0].src = items[0].children[0].src;
                console.log('2');
            }
        }
        curr = items[len-1].children[0].src;
    }
    document.getElementById("prev").onclick = function fun() {
        for (let i = len-1; i >=0; i--) {
            if (i !== 0) {
                items[i].children[0].src = items[i-1].children[0].src;
            } else {
                items[i].children[0].src = curr;
            }
        }
        curr = items[len-1].children[0].src;
    }
    document.getElementById("save").onclick = function fun() {
        console.log("save");
        let topItem = document.getElementById('topItem');
        topItem.setAttribute("style","visibility:hidden");
        let items = document.querySelectorAll('.item');
        for (let i = 0; i < items.length; i++) {
            let buttons = items[i].children[2];
            buttons.setAttribute("style","display:block");
        }

    }
}

