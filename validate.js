$(function () {
    $("#register").validate({
        rules: {
            Name: {
                required: true,
                noSpace: true

            },
            Phone: {
                required: true,
                noSpace: true
            },
            Email: {
                required: true,
                email: true
            },
            Message: {
                required: true,
                noSpace: true
            }
        }
    })
});

$.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0
}, "no spaces allowed")