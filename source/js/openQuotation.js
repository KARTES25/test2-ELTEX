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