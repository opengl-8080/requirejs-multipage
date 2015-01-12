require(['jquery', 'string-util'], function($, StringUtil) {
    $(function() {
        var concat = StringUtil.concat('hoge', 'fuga', 'piyo');
        $('#result').text(concat);
    });
});
