$(document).ready(function () {
    let quotationName;
    let timerLoad;
    let mianBlock = $('.block-main');
    let btn = $('.block-main__btn--main');
    let btnReset = $('.block-main__btn--reset');

    function laod() {
        $.ajax({
            url: quotationName, success: function (result) {
                $(".block-main__quotation").html(result);
            }
        });

        btnReset.hide();
        mianBlock.removeClass('block-main--load');
        mianBlock.addClass('block-main--result');
        btn.text('Получить цитату')
        btn.show();
    }

    btn.click(function () {
        let quotationIndex = Math.floor(Math.random() * (31 - 1) + 1);
        quotationName = "text/quotation" + quotationIndex + ".txt";

        btn.hide();
        btnReset.show();
        mianBlock.removeClass('block-main--result');
        mianBlock.addClass('block-main--load');

        timerLoad = setTimeout(laod, 5000);
    });

    btnReset.click(function () {
        clearTimeout(timerLoad);
        mianBlock.removeClass('block-main--load');
        btn.show();
        btnReset.hide();
    })

})
$(document).ready(function () {
    let spiner = $('.block-main__spiner canvas')[0];

    let ctx = spiner.getContext('2d');
    let al = 0;
    let start = 0;
    let cw = ctx.canvas.width;
    let ch = ctx.canvas.height;
    let diff;
    let back = 0;
    let gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "#DF5950");
    gradient.addColorStop("0.5", "#451046");

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 17;
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.arc(45, 45, 35, start, diff / 10 + start, false);
        ctx.stroke();
        if (al > 100) {
            back = 1;
        }

        if (al == 0) {
            back = 0;
        }

        if (back) {
            al--;
        } else {
            al++;
        }
    }

    let sim = setInterval(progressSim, 20);
});