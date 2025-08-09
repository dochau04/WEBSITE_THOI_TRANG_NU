
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "url(../img/1.jpg)",
        "url(../img/2.jpg)",
        "url(../img/3.jpg)",
        "url(../img/4.jpg)"
    ];
    let index = 0; // Biến đếm địa chỉ của ảnh hiện tại

    function setBG() {
        let d = document.getElementById("div1");
        d.style.backgroundImage = images[index];
        index = (index + 1) % images.length; // Di chuyển tới ảnh tiếp theo trong mảng, vòng lặp nếu đã đi hết mảng
    }
    setBG(); // Gọi hàm setBG() khi tài liệu HTML được tải xong
    setInterval(setBG, 2000); // Gọi hàm setBG() sau mỗi giây
});
                