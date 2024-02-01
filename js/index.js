function addNhanVien() {
  //dom tới tất cả các input và select
  var arrInput = document.querySelectorAll(
    ".form-group input, .form-group select"
  );

  var nhanVien = new NhanVien();
  //lấy dữ liệu của từng input
  for (var i = 0; i < arrInput.length; i++) {
    var id = arrInput[i].id;
    nhanVien[id] = arrInput[i].value;
  }

  var isValid = true;

  // Chạy hàm checkEmptyValue
  isValid &=
    checkEmptyValue(nhanVien.tknv, "tbTKNV") &&
    checkMinMaxValue(nhanVien.tknv, "tbTKNV", 4, 6);
  isValid &=
    checkEmptyValue(nhanVien.name, "tbTen") &&
    checkName(nhanVien.name, "tbTen");
  isValid &=
    checkEmptyValue(nhanVien.email, "tbEmail") &&
    checkEmail(nhanVien.email, "tbEmail");
  isValid &=
    checkEmptyValue(nhanVien.password, "tbMatKhau") &&
    checkPassword(nhanVien.password, "tbMatKhau");
  isValid &=
    checkEmptyValue(nhanVien.datepicker, "tbNgay") &&
    checkDateTime(nhanVien.datepicker, "tbNgay");
  isValid &=
    checkEmptyValue(nhanVien.luongCB, "tbLuongCB") &&
    checkLuong(nhanVien.luongCB, "tbLuongCB", 1000000, 20000000);
  isValid &= checkChucVu(nhanVien.chucvu, "tbChucVu");
  isValid &=
    checkEmptyValue(nhanVien.gioLam, "tbGiolam") &&
    checkGioLam(nhanVien.gioLam, "tbGiolam", 80, 200);

  if (isValid) {
    return nhanVien;
  }
  console.log(nhanVien);
}

// Thêm nhân viên
var arrNhanVien = [];
document.getElementById("btnThemNV").onclick = function () {
  //   console.log(nhanVien);
  var nhanVien = addNhanVien();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
  }

  saveValue("arrNhanVien", arrNhanVien);
  renderNhanVien();
};

// Render Nhân Viên

function renderNhanVien(arr) {
  if (!arr) {
    arr = arrNhanVien;
  }
  var content = "";
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    // console.log(eleArr);

    var newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);

    var stringHTML = `
    <tr>
        <td>${newNhanVien.tknv}</td>
        <td>${newNhanVien.name}</td>
        <td>${newNhanVien.email}</td>
        <td>${newNhanVien.datepicker}</td>
        <td>${newNhanVien.chucvu}</td>
        <td>${newNhanVien.tongLuong()}</td>
        <td>${newNhanVien.xepLoaiNhanVien()}</td>
        <td>
            <button onclick="deleteNhanVien('${
              newNhanVien.tknv
            }')" class="btn btn-danger my-2">Xoá</button>

            <button onclick="getInfo('${
              newNhanVien.tknv
            }')" class="btn btn-warning text-white" data-toggle="modal"
            data-target="#myModal">Sửa</button>
        </td>
    </tr>
    `;
    content += stringHTML;
  }
  // Đưa dữ liệu của content lên phần tbody
  document.getElementById("tableDanhSach").innerHTML = content;
  // Reset trong thẻ
  document.getElementById("form_NV").reset();
}

// Lưu trữ dữ liệu

function saveValue(key, value) {
  var stringJSON = JSON.stringify(value);
  localStorage.setItem(key, stringJSON);
}

// Lấy dữ liệu

function getValue(key) {
  var value = localStorage.getItem(key);
  if (value) {
    var result = JSON.parse(value);
    arrNhanVien = result;
    renderNhanVien();
  }
}

getValue("arrNhanVien");

// Xoá nhân viên

function deleteNhanVien(account) {
  console.log(account);
  for (var i = 0; i < arrNhanVien.length; i++) {
    // console.log(nhanVien.tknv);
    var nhanVien = arrNhanVien[i];
    if (nhanVien.tknv === account) {
      arrNhanVien.splice(i, 1);
    }
  }
  renderNhanVien();
  saveValue("arrNhanVien", arrNhanVien);
}

// Cập nhật nhân viên

function getInfo(account) {
  var nhanVien;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (account == arrNhanVien[i].tknv) {
      nhanVien = arrNhanVien[i];
    }
  }
  //   console.log(nhanVien);
  document.getElementById("tknv").value = nhanVien.tknv;
  document.getElementById("name").value = nhanVien.name;
  document.getElementById("email").value = nhanVien.email;
  document.getElementById("password").value = nhanVien.password;
  document.getElementById("datepicker").value = nhanVien.datepicker;
  document.getElementById("luongCB").value = nhanVien.luongCB;
  document.getElementById("chucvu").value = nhanVien.chucvu;
  document.getElementById("gioLam").value = nhanVien.gioLam;

  //   var arrInput = document.querySelectorAll(
  //     ".form-group input, .form-group select"
  //   );

  //   for (var z = 0; z < arrInput.length; z++) {
  //     console.log(arrInput[z]);
  //     var id = arrInput[z].id;
  //     arrInput[z].value = nhanVien[id];
  //   }

  document.getElementById("tknv").disabled = true;
}

function updateNhanVien() {
  console.log("huhu");
  var nhanVien = addNhanVien();

  if (nhanVien) {
    for (var i = 0; i < arrNhanVien.length; i++) {
      var newNhanVien = arrNhanVien[i];
      console.log(arrNhanVien[i]);
      console.log(newNhanVien);
      if (nhanVien.tknv == newNhanVien.tknv) {
        arrNhanVien[i] = nhanVien;
      }
    }
  }
  renderNhanVien();
  saveValue("arrNhanVien", arrNhanVien);
  document.getElementById("tknv").disabled = false;
  document.getElementById("form_NV").reset();
  //   document.getElementById("myModal").style.display = "none";
}

document.getElementById("btnCapNhat").onclick = updateNhanVien;

// Hàm tìm kiếm nhân viên

function searchNhanVien(event) {
  //   var valueSearch = document.getElementById("searchName").value;

  var valueSearch = event.target.value;

  var keyWord = removeVietnameseTones(valueSearch.trim().toLowerCase());
  var arrNhanSinhSearch = [];
  console.log(arrNhanVien);
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    console.log(nhanVien);
    var newNhanVien = removeVietnameseTones(
      nhanVien.loaiNhanVien.trim().toLowerCase()
    );
    if (newNhanVien.includes(keyWord)) {
      arrNhanSinhSearch.push(nhanVien);
    }
  }
  renderNhanVien(arrNhanSinhSearch);
}
