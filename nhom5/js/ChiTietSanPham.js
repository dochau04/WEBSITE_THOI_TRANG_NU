$(document).ready(function () {

    let dssp = JSON.parse(localStorage.getItem("dssp"))
    let masp = localStorage.getItem("masp")

    let temp = dssp.find(sp => sp.masp == masp)

    $("#tensp").html(temp.tensp)
    $("#dongia").html(temp.dongia)
    $("#mota").html(temp.mota)
    function napSP(sp) {
        let temp = "<img src='" + sp.hinhanh + "' alt=''>"
        $("#hinhsp").html(temp)
    }
    $(document).ready(function () {
        dssp.forEach(sp => {
            napSP(temp)
        });
    });

    $('input#amount').each(function() {
        var $this = $(this),
          qty = $this.parent().find('.is-form'),
          min = Number($this.attr('min')),
          max = Number($this.attr('max'))
        if (min == 0) {
          var d = 0
        } else d = min
        $(qty).on('click', function() {
          if ($(this).hasClass('minus')) {
            if (d > min) d += -1
          } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
          }
          $this.attr('value', d).val(d)
        })
    })
});

function datHang() {
    window.location.href = "dathang.html";
}