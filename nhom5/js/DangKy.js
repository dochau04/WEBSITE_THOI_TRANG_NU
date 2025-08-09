function ktraten(){
    var hotenInput=document.getElementById("txthoten");
    var hotrnError=document.getElementById("tbhoten");
    var hotenValue=hotenInput.value.trim();

    if(hotenValue ===""){
        hotrnError.textContent= "Không được rỗng";
        hotenInput.focus();
        return false;
    }

    if(!/^[A-Za-z\u00C0-\u017F]*(\s[A-Za-z\u00C0-\u017F]*)*$/.test(hotenValue)){
        hotrnError.textContent="Nhập sai";
        hotenInput.focus();
        return false;
    }

    hotrnError.textContent ="";
    return true;
}
function ktraNgaySinh(){
    var ngaySinhInput = document.getElementById("txtngaysinh");
    var ngaySinhError = document.getElementById("tbngaysinh");
    var ngaySinhValue = new Date(ngaySinhInput.value);

    if(isNaN(ngaySinhValue)){
        ngaySinhError.textContent = "Ngay sinh khong rong";
        ngaySinhInput.focus();
        return false;
    }
    var currenDate = new Date();
    currenDate.setHours(0,0,0,0);

    if(ngaySinhValue>=currenDate){
        ngaySinhError.textContent="Ngay sinh phai truoc ngay hien tai";
        ngaySinhInput.focus();
        return false;
    }
    ngaySinhError.textContent="";
    return true;
}
function ktraEmail(){
    var emailInput=document.getElementById("txtemail");
    var emailError= document.getElementById("tbemail");
    var emailValue= emailInput.value.trim();

    if(emailValue===""){
        emailError.textContent="Không được rỗng";
        emailInput.focus();
        return false;
    }

    if(!emailValue.includes("@")|| !emailValue.endsWith("gmail.com")){
        emailError.textContent="Email không hợp lệ";
        emailInput.focus();
        return false;
    }

    emailError.textContent="";
    return true;
}

function ktramatkhau(){
    var matkhauInput=document.getElementById("txtmatkhau");
    var matkhauError=document.getElementById("tbmatkhau");
    var matkhauValue=matkhauInput.value.trim();

    if(matkhauValue ===""){
        matkhauError.textContent= "Không được rỗng";
        matkhauInput.focus();
        return false;
    }

    if(!/^.{8,}$/.test(matkhauValue)){
        matkhauError.textContent="Phải ít nhất 8 ký tự";
        matkhauInput.focus();
        return false;
    }

    matkhauError.textContent ="";

    return true;
}

function xacNhanMatKhau() {
    var matkhauInput = document.getElementById("txtmatkhau");
    var nhaplaimatkhauInput = document.getElementById("txtnhaplaimatkhau");
    var nhaplaimatkhauError = document.getElementById("tbnhaplaimatkhau");
    var nhaplaimatkhauValue = nhaplaimatkhauInput.value.trim();

    if (!ktramatkhau()) {
        // Nếu mật khẩu không hợp lệ, không cần kiểm tra lại
        return false;
    }

    if (nhaplaimatkhauValue === "") {
        nhaplaimatkhauError.textContent = "Không được rỗng";
        nhaplaimatkhauInput.focus();
        return false;
    }

    if (nhaplaimatkhauValue !== matkhauInput.value.trim()) {
        nhaplaimatkhauError.textContent = "Mật khẩu không khớp";
        nhaplaimatkhauInput.focus();
        return false;
    }

    nhaplaimatkhauError.textContent = "";
    return true;
}

function ktrasodienthoai(){
    var soDienThoaiInput = document.getElementById("txtsdt");
    var soDienThoaiError = document.getElementById("tbsdt");
    var soDienThoaiValue = soDienThoaiInput.value.trim();

    if(soDienThoaiValue ===""){
        soDienThoaiError.textContent ="so dien thoai kho duoc rong";
        soDienThoaiInput.focus();
        return false;
    }

    if(!/^(09|03|08)\d{8}$/.test(soDienThoaiValue)){
        soDienThoaiError.textContent="So dt khong hop le";
        soDienThoaiInput.focus();
        return false;
    }

    soDienThoaiError.textContent="";
    return true;
}

function dangky(){
    if(ktraten()&& ktraEmail() && ktrasodienthoai() ){
        var hoten=$('#txthoten').val().trim();
        var sdt=$('#txtsdt').val().trim();
        var email=$('#txtemail').val().trim();
        
        var stt=$('#tableBody tr').length+1;
        var newRow=$('<tr><td>'+stt+'</td><td>'+hoten+'</td><td>'+ngaysinh.toLocaleDateString()+'</td><td>'+sdt+'</td><td>'+email+'</td>');
        
        $('#tableBody').append(newRow);
        
    }
}

function Huy(){
    $('#txthoten').val('');
    $('#txtsdt').val('');
    $('#txtngaysinh').val('');
    $('#txtemail').val('');
    $('#txtmatkhau').val('');
    $('#txtnhaplaimatkhau').val('');
}