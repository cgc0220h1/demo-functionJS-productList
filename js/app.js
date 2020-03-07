let productList = [];
let index = 0;

function addProduct() {
    let data = document.getElementById('nameInput').value;
    if (data !== "") {
        productList[index] = data;
        index++;
        displayList();
    } else {
        alert("Trường không được để trống, vui lòng nhập tên sản phẩm");
    }
}

function modifyPro(id) {
    let name = prompt("Nhập tên của sản phẩm mới: ", productList[id]);
    if (name !== null) {
        productList[id] = name;
        document.getElementById(id).innerText = name;

    }
}

function deletePro(id) {
    if (confirm("Tên sản phẩm: " + "' " + productList[id] + " '" + " sẽ bị xoá. Bạn có muốn tiếp tục ?")) {
        productList.splice(id, 1);
        index--;
        displayList();
    }
}

function displayList() {
    let data = "";
    for (let i = 0; i < productList.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + "</td>";
        data += "<td id =" + i + ">" + productList[i] + "</td>";
        data += "<td>" + "<button onclick ='modifyPro(this.id)' id =" + i + ">Sửa</button>" + "</td>";
        data += "<td>" + "<button onclick='deletePro(this.id)' id =" + i + ">Xóa</button>";
        data += "</tr>";
    }
    document.getElementById('tableBody').innerHTML = data;
}
