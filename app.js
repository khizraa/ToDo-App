let bdy = document.getElementsByClassName("bd");
let change_btn = document.querySelector(".btn");
let image1 = 'images/leaves background.jpg';
let image2 = 'images/brown leaves.png';
let image3 = 'images/blue.webp';
let image4 = 'images/pexels-photo-3178786.jpeg';
let image5 = 'images/butterfly.webp';

bdy[0].style.backgroundImage = `url('${image1}')`;

change_btn.addEventListener('click', function () {
    if (bdy[0].style.backgroundImage.includes(image1)) {
        bdy[0].style.backgroundImage = `url('${image2}')`;
    }
    else if (bdy[0].style.backgroundImage.includes(image2)) {
        bdy[0].style.backgroundImage = `url('${image3}')`;
    }
    else if (bdy[0].style.backgroundImage.includes(image3)) {
        bdy[0].style.backgroundImage = `url('${image4}')`;
    }
    else if (bdy[0].style.backgroundImage.includes(image4)) {
        bdy[0].style.backgroundImage = `url('${image5}')`;
    } else {
        bdy[0].style.backgroundImage = `url('${image1}')`;
    }
});


let tEXT = document.getElementById("in");
let aDD = document.querySelector("#add");
let oUtput_dIV = document.getElementsByClassName("fourth-div")[0];


aDD.addEventListener('click', function () {
    if (tEXT.value === "") {
        alert("Enter some task");
    } else {
        let dIV1 = document.createElement("div");
        let dIV2 = document.createElement("div");
        let dIV3 = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let bUTTON1 = document.createElement("button");
        let bUTTON2 = document.createElement("button");
        let bIN_ICON1 = document.createElement("i");
        let bIN_ICON2 = document.createElement("i");
        let bIN_ICON3 = document.createElement("i");
        let bIN_ICON4 = document.createElement("i");
        let bIN_ICON5 = document.createElement("i");

        bIN_ICON1.classList.add("fa", "fa-check");
        bIN_ICON2.classList.add("fa", "fa-trash");
        bIN_ICON3.classList.add("fa", "fa-square");
        bIN_ICON4.classList.add("fa", "fa-check-square");
        bIN_ICON5.classList.add("fa", "fa-close");

        p1.appendChild(bIN_ICON3);
        p2.innerText = `${tEXT.value}`;
        bUTTON1.appendChild(bIN_ICON1);
        bUTTON2.appendChild(bIN_ICON2);

        dIV1.classList.add("new_div", "back-color");
        dIV2.className = "new_div";
        dIV3.className = "new_div";
        bUTTON1.className = "check";
        bUTTON2.className = "bin";
        p1.className = "square";
        p2.className = "textarea";

        dIV2.appendChild(p1);
        dIV2.appendChild(p2);
        dIV3.appendChild(bUTTON1);
        dIV3.appendChild(bUTTON2);
        dIV1.appendChild(dIV2);
        dIV1.appendChild(dIV3);
        oUtput_dIV.appendChild(dIV1);

        bUTTON1.addEventListener('click', function () {
            if (p1.contains(bIN_ICON3)) {
                p1.removeChild(bIN_ICON3);
                p1.appendChild(bIN_ICON4);
                p1.className = "square-check";
                bUTTON1.removeChild(bIN_ICON1);
                bUTTON1.appendChild(bIN_ICON5);
                bUTTON1.className = "cross";
            } else {
                p1.removeChild(bIN_ICON4);
                p1.appendChild(bIN_ICON3);
                p1.className = "square";
                bUTTON1.removeChild(bIN_ICON5);
                bUTTON1.appendChild(bIN_ICON1);
                bUTTON1.className = "check";
            }

        })
        bUTTON2.addEventListener('click', function () {
            deleteTask(this);

        })

        tEXT.value = "";


    }

})

function deleteTask(element) {

    let taskDiv = element.parentElement.parentElement;
    taskDiv.remove();

}
