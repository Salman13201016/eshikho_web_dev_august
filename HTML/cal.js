$(document).ready(function () {
    res_data = ''
    data_array = []

    $(".data").click(function () {
        data = $(this).val()
        // alert(typeof data)
        data_array.push(data) //[1,2,3,4,5]
        res_data = ''
        for (i = 0; i < data_array.length; i = i + 1) {
            res_data = res_data + data_array[i] //12345
        }
        $("#result").val(res_data)

    })
    $(".operator").click(function () {
        data = $(this).val()
        console.log(data)
        new_res_data = res_data + data
        res_data = new_res_data

        $("#result").val(new_res_data)

    })

});