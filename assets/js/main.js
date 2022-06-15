// let arrPhotos1 = [],
//     arrPhotos2 = [];
var url = "https://jsonplaceholder.typicode.com/photos";
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then((json) => {
        // =============== C1 ===============
        // for (let i = 0; i < 100; i++) {
        //     arrPhotos1.push(json[i]);
        // }

        // for (let i = 100; i < 200; i++) {
        //     arrPhotos2.push(json[i]);
        // }

        // let htmls1 = arrPhotos1.map(function (photo, i) {
        //     return `<div class="list-item">
        //     <div class="list-item-img">
        //         <img src="https://picsum.photos/100/100?random=${i + 100}" alt="nhndev110 - Tìm Kiếm Sản Phẩm" title="nhndev110 - Tìm Kiếm Sản Phẩm" width="100%" />
        //     </div>
        //     <div class="list-item-content">
        //         <h4>${photo.title}</h4>
        //     </div>
        // </div>`;
        // });

        // let htmls2 = arrPhotos2.map(function (photo, i) {
        //     return `<div class="list-item">
        //     <div class="list-item-img">
        //         <img src="https://picsum.photos/100/100?random=${i}" alt="nhndev110 - Tìm Kiếm Sản Phẩm" title="nhndev110 - Tìm Kiếm Sản Phẩm" width="100%" />
        //     </div>
        //     <div class="list-item-content">
        //         <h4>${photo.title}</h4>
        //     </div>
        // </div>`;
        // });

        // nodeElementContent[0].innerHTML = htmls1.join("");
        // nodeElementContent[1].innerHTML = htmls2.join("");

        // =============== C2 ===============
        // nodeElementContent[0].innerHTML = getData(json, 100).join("");
        // nodeElementContent[1].innerHTML = getData(json, 100).join("");

        // =============== C3 ===============
        for (let i = 0; i < nodeElementContent.length; i++) {
            nodeElementContent[i].innerHTML = getData(json, 100).join("");
        }
    })
    .catch(() => {
        console.log("Error");
    });

function getData(json, len) {
    let arrData = [];
    for (let i = 0; i < len; i++) {
        arrData.push(json[i]);
    }

    let htmls = arrData.map(function (data, i) {
        return `<div class="list-item">
                    <div class="list-item-img">
                        <img src="https://picsum.photos/100/100?random=${i + 100}" alt="nhndev110 - Tìm Kiếm Sản Phẩm" title="nhndev110 - Tìm Kiếm Sản Phẩm" width="100%" />
                    </div>
                    <div class="list-item-content">
                        <h4>${data.title}</h4>
                    </div>
                </div>`;
    });
    return htmls;
}

var nodeElementTitle = document.querySelectorAll("header > nav > ul > li"),
    nodeElementContent = document.querySelectorAll(".list-content"),
    nodeInputSearch = document.querySelector("#input-search"),
    listProduct = document.querySelectorAll("div.list-item-content");

nodeElementTitle.forEach((tab, idx) => {
    tab.onclick = function () {
        document.querySelector(".activity").classList.remove("activity");
        this.classList.add("activity");

        nodeElementContent[idx].style.display = "block";
        for (let i = 0; i < nodeElementContent.length; i++) {
            if (i != idx) {
                nodeElementContent[i].style.display = "none";
            }
        }
    };
});

nodeInputSearch.onkeyup = function (e) {
    var nodeElementSubContent = document.querySelectorAll(".list-content .list-item"),
        resultSearch = e.target.value,
        lenArr = nodeElementSubContent.length;

    for (let i = 0; i < lenArr; i++) {
        var textElement = nodeElementSubContent[i].querySelector(".list-item-content h4").innerText;
        if (textElement.toLowerCase().indexOf(resultSearch) < 0) {
            nodeElementSubContent[i].style.display = "none";
        } else {
            nodeElementSubContent[i].style.display = "flex";
        }
    }
};
