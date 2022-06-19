const url = "https://jsonplaceholder.typicode.com/photos";
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then((json) => {
        for (let i = 0; i < nodeElementContent.length; i++) {
            nodeElementContent[i].innerHTML = getData(json, 500 * i, 500 * (i + 1)).join("");
        }
    })
    .catch(() => {
        console.log("Error");
    });

function getData(json, start, len) {
    let arrData = [];
    for (let i = start; i < len; i++) {
        arrData.push(json[i]);
    }

    let htmls = arrData.map(function (data, i) {
        return `<div class="list-item">
                    <div class="list-item-img">
                        <img src="${data.url}" alt="nhndev110 - Tìm Kiếm" title="nhndev110 - Tìm Kiếm" width="100%" />
                    </div>
                    <div class="list-item-content">
                        <h4>${data.title}</h4>
                    </div>
                </div>`;
    });
    return htmls;
}

var nodeElementTitle = document.querySelectorAll("#sidebar-content > nav > ul > li "),
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
        if (textElement.toLowerCase().includes(resultSearch.toLowerCase())) {
            nodeElementSubContent[i].style.display = "flex";
        } else {
            nodeElementSubContent[i].style.display = "none";
        }
    }
};
