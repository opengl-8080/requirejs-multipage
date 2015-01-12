require(['jquery', 'number-util'], function($, NumberUtil) {
    $(function() {
        var sum = NumberUtil.addAll(1, 2, 3, 4);
        $('#result').text(sum);
    });
});
