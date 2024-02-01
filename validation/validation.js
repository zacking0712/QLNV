// Check Empty Value

function checkEmptyValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if (value == "") {
    eleSpan.innerHTML = "(*) Bắt buộc";
    eleSpan.style.display = "block";
    return false;
  } else {
    eleSpan.innerHTML = "";
    return true;
  }
}

// Check Min Max Value

function checkMinMaxValue(value, idSpan, min, max) {
  var soLuong = value.length;
  if (soLuong <= max && soLuong >= min) {
    document.getElementById(idSpan).innerHTML = "";
    document.getElementById(idSpan).style.display = "none";
    return true;
  } else {
    document.getElementById(
      idSpan
    ).innerHTML = `Vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
    document.getElementById(idSpan).style.display = "block";
    return false;
  }
}

// Check Tên

function checkName(value, idSpan) {
  const regexText = /^[a-zA-ZÀ-ỹ\s]+$/;

  var isValid = regexText.test(value);

  //   console.log(isValid);
  if (isValid) {
    document.getElementById(idSpan).innerHTML = "";
    // document.getElementById(idSpan).style.display = "none";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML = "(*) Không đúng định dạng";
    document.getElementById(idSpan).style.display = "block";
    return false;
  }
}

// Check Email

function checkEmail(value, idSpan) {
  var regexEmai =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  var isValid = regexEmai.test(value);
  if (isValid) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML = "(*) Không đúng định dạng";
    document.getElementById(idSpan).style.display = "block";
    return false;
  }
}

// Check Password

function checkPassword(value, idSpan) {
  var regexPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;
  var isValid = regexPass.test(value);
  if (isValid) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML = "(*) Mật khẩu không hợp lệ";
    document.getElementById(idSpan).style.display = "block";
    return false;
  }
}

// Check Date Time

function checkDateTime(value, idSpan) {
  var regexPass = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  var isValid = regexPass.test(value);
  if (isValid) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML = "(*) Ngày làm không hợp lệ";
    document.getElementById(idSpan).style.display = "block";
    return false;
  }
}

// Check Lương

function checkLuong(value, idSpan, min, max) {
  if (value <= max && value >= min) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML = "(*) Lương không hợp lệ";
    document.getElementById(idSpan).style.display = "block";
    return false;
  }
}

// Check Chức Vụ

function checkChucVu(value, idSpan) {
  if (value == "") {
    document.getElementById(idSpan).innerHTML = "Vui lòng chọn chức vụ hợp lệ";
    document.getElementById(idSpan).style.display = "block";
    return false;
  } else {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  }
}

// Check Giờ Làm

function checkGioLam(value, idSpan, min, max) {
  if (value <= max && value >= min) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML = "(*) Số giờ làm không hợp lệ";
    document.getElementById(idSpan).style.display = "block";
    return false;
  }
}

// Hàm bỏ dấu

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}
