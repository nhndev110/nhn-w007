let nodeElementTitle = document.querySelectorAll("header > nav > ul > li"),
    nodeElementContent = document.querySelectorAll(".list-content"),
    nodeElementSubContent = document.querySelectorAll(".list-content .list-item"),
    nodeInputSearch = document.querySelector("#input-search"),
    listProduct = document.querySelectorAll("div.list-item-content");

let arrPhotos1 = [],
    arrPhotos2 = [];
fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < 100; i++) {
            arrPhotos1.push(json[i]);
        }

        for (let i = 100; i < 200; i++) {
            arrPhotos2.push(json[i]);
        }

        let htmls1 = arrPhotos1.map(function (photo, i) {
            return `<div class="list-item">
            <div class="list-item-img">
                <img src="https://picsum.photos/100/100?random=${i + 100}" alt="nhndev110 - Tìm Kiếm Sản Phẩm" title="nhndev110 - Tìm Kiếm Sản Phẩm" width="100%" />
            </div>
            <div class="list-item-content">
                <h4>${photo.title} - nhndev110</h4>
            </div>
        </div>`;
        });

        let htmls2 = arrPhotos2.map(function (photo, i) {
            return `<div class="list-item">
            <div class="list-item-img">
                <img src="https://picsum.photos/100/100?random=${i}" alt="nhndev110 - Tìm Kiếm Sản Phẩm" title="nhndev110 - Tìm Kiếm Sản Phẩm" width="100%" />
            </div>
            <div class="list-item-content">
                <h4>${photo.title} - nhndev110</h4>
            </div>
        </div>`;
        });

        nodeElementContent[0].innerHTML = htmls1.join("");
        nodeElementContent[1].innerHTML = htmls2.join("");
    });

nodeElementTitle[0].onclick = function () {
    nodeElementContent[0].style.display = "block";
    nodeElementContent[1].style.display = "none";
    nodeElementTitle[1].style.opacity = 0.5;
    nodeElementTitle[0].style.opacity = 1;
};

nodeElementTitle[1].onclick = function () {
    nodeElementContent[1].style.display = "block";
    nodeElementContent[0].style.display = "none";
    nodeElementTitle[1].style.opacity = 1;
    nodeElementTitle[0].style.opacity = 0.5;
};

nodeInputSearch.onkeyup = function (e) {
    let resultSearch = e.target.value,
        lenArr = nodeElementSubContent.length;
    for (let i = 0; i < lenArr; i++) {
        let textElement = nodeElementSubContent[i].querySelector(".list-item-content p")[1].innerText;
        console.log(textElement);
        if (textElement.toLowerCase().indexOf(resultSearch) < 0) {
            nodeElementSubContent[i].style.display = "none";
        } else {
            nodeElementSubContent[i].style.display = "flex";
        }
    }
};
