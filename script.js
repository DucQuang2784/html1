function initGallery() {
  console.log("✅ Trang web đã tải xong (onload event)");

  const images = document.querySelectorAll('.gallery img');

  // Lặp qua tất cả hình ảnh trong gallery
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0'); // thêm tabindex cho truy cập bàn phím

    // Khi rê chuột vào ảnh
    images[i].addEventListener('mouseover', function() {
      console.log(`🖱️ Hình ảnh ${i + 1} - Sự kiện onmouseover`);
    });

    // Khi chuột rời ảnh
    images[i].addEventListener('mouseleave', function() {
      console.log(`👋 Hình ảnh ${i + 1} - Sự kiện onmouseleave`);
    });

    // Khi focus bằng bàn phím (tab)
    images[i].addEventListener('focus', function() {
      console.log(`🎯 Hình ảnh ${i + 1} - Sự kiện onfocus`);
    });

    // Khi bỏ focus
    images[i].addEventListener('blur', function() {
      console.log(`🚫 Hình ảnh ${i + 1} - Sự kiện onblur`);
    });
  }
}
