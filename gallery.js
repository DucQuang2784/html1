// Hàm chạy khi di chuột vào ảnh nhỏ
function upDate(previewPic) {
  console.log("upDate() được gọi!");
  console.log("Nguồn ảnh:", previewPic.src);
  console.log("Văn bản alt:", previewPic.alt); 
  const display = document.querySelector('#image');

  display.innerHTML = previewPic.alt;

  display.style.backgroundImage = `url('${previewPic.src}')`;
  display.style.backgroundSize = 'cover';
  display.style.backgroundPosition = 'center';
}

function unDo() {
  console.log("unDo() được gọi!");

  const display = document.querySelector('#image');

  display.style.backgroundImage = "";

  display.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
