let MAX_PHOTO_NUMBER = 4;
let MAX_PART_NUMBER = 5;
let photoIndexes = new Array(5);
let photoContainerIds = ['photoContainer0','photoContainer1', 'photoContainer2', 'photoContainer3', 'photoContainer4'];


document.getElementById('photoContainer0').addEventListener('click',function() {flip(0);})
document.getElementById('photoContainer1').addEventListener('click',function() {flip(1);})
document.getElementById('photoContainer2').addEventListener('click',function() {flip(2);})
document.getElementById('photoContainer3').addEventListener('click',function() {flip(3);})
document.getElementById('photoContainer4').addEventListener('click',function() {flip(4);})

init();

function init() {
    generatePhotoIndexes();
    updatePhotoContainers();
}

function generatePhotoIndexes() {
    //Randomly generate photoIndexes[i]
    photoIndexes[0] = 0;
    photoIndexes[1] = 2;
    photoIndexes[2] = 1;
    photoIndexes[3] = 4;
    photoIndexes[4] = 3;
    console.log('generatePhotoIndexes');

    for (let i = 0; i < MAX_PART_NUMBER; i++) {
        let index = Math.floor(Math.random() * MAX_PART_NUMBER);
        photoIndexes[i] = index;
        while (photoIndexPresented(index)) {
            let newIndex = Math.floor(Math.random() * MAX_PART_NUMBER);
            photoIndexes[i] = newIndex;
        }
    }
}

function updatePhotoContainers() {
    console.log('updatePhotoContainers');
    for (let i = 0; i < MAX_PART_NUMBER; i++) {
        let container = document.getElementById(photoContainerIds[i]);
        fillContainer(container, photoIndexes[i]);
    }
    console.log(photoIndexes);
    checkWin();
}

function fillContainer(containerElement, photoIndex) {
    console.log('fillContainer ' + containerElement + ' ' + photoIndex);
    containerElement.innerText = photoIndex;
}


//runtime function
function flip(containerIndex){
    let newIndex;
    let oldIndex =photoIndexes[containerIndex];
    newIndex = Math.floor(Math.random() * MAX_PART_NUMBER);
    while (newIndex === oldIndex){
        newIndex = Math.floor(Math.random() * MAX_PART_NUMBER);
    }
    photoIndexes[containerIndex] = newIndex;
    updatePhotoContainers();
}

function checkWin(){
    if (didWin()){
        applause();
    }
}

function didWin(){
    for (let i = 0; i < MAX_PART_NUMBER; i++) {
        if (photoIndexes[i] != i) return false;
    }
    return true;
}
function applause(){
    // alert("Bạn đã chiến thắng");

    let monitor = document.getElementById('monitor');
    monitor.innerText ='     Chúc mừng, bạn đã thắng!!!';
    monitor.style.color="green";

}
