// Hàm chạy khi di chuột vào ảnh nhỏ
function upDate(previewPic) {
  console.log("upDate() được gọi!");
  console.log("Nguồn ảnh:", previewPic.src);
  console.log("Văn bản alt:", previewPic.alt);

  // Lấy phần tử lớn để thay đổi
  const display = document.querySelector('#image');

  // Cập nhật văn bản hiển thị = alt của ảnh nhỏ
  display.innerHTML = previewPic.alt;

  // Cập nhật hình nền hiển thị = src của ảnh nhỏ
  display.style.backgroundImage = `url('${previewPic.src}')`;
  display.style.backgroundSize = 'cover';
  display.style.backgroundPosition = 'center';
}

// Hàm chạy khi chuột rời khỏi ảnh nhỏ
function unDo() {
  console.log("unDo() được gọi!");

  const display = document.querySelector('#image');

  // Trả lại nền trống
  display.style.backgroundImage = "";

  // Trả lại văn bản gốc
  display.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
