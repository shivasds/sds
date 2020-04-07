    $(function(){
        CKEDITOR.replace('editor1');
        CKEDITOR.replace('editor2');
        CKEDITOR.replace('admin-blog-title');
        CKEDITOR.replace('content_1');
            CKEDITOR.replace('content_2');
            CKEDITOR.replace('content_3');
            CKEDITOR.replace('content_4');
            CKEDITOR.replace('content_5');
            CKEDITOR.replace('content_6');
            CKEDITOR.replace('content_7');
            CKEDITOR.replace('content_8');
            CKEDITOR.replace('content_9');
            CKEDITOR.replace('content_10');
            CKEDITOR.replace('content_11');
            CKEDITOR.replace('content_12');
        $("#date").datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        })
    })
    $(document).on("keypress", ".bootstrap-tagsinput input", function(e) {
        return 13 == e.which ? e.preventDefault() : ""
    })