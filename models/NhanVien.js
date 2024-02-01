function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.datepicker = "";
  this.luongCB = "";
  this.chucvu = "";
  this.gioLam = "";

  // phương thức
  // Tính tiền lương
  this.tongLuong = function () {
    if (this.chucvu == "Sếp") {
      return this.luongCB * 3;
    } else if (this.chucvu == "Trưởng Phòng") {
      return this.luongCB * 2;
    } else {
      return this.luongCB * 1;
    }
  };

  // Xếp loại nhân viên
  this.xepLoaiNhanVien = function () {
    if (this.gioLam * 1 >= 192) {
      return "Xuất Sắc";
    } else if (this.gioLam * 1 >= 176) {
      return "Giỏi";
    } else if (this.gioLam * 1 >= 160) {
      return "Khá";
    } else {
      return "Trung Bình";
    }
  };

  this.loaiNhanVien = this.xepLoaiNhanVien();
}
