$(document).ready(function () {
    res_data = ''
    data_array = []
    new_res_data = ''
    data_array1 = []
    data1 = ''

    $(".data").click(function () {
        data = $(this).val()
        if (new_res_data.indexOf('+') > -1 || new_res_data.indexOf('-') > -1 || new_res_data.indexOf('*') > -1 || new_res_data.indexOf('/') > -1) {
            data_array1.push(data)
            data1 = new_res_data
            for (i = 0; i < data_array1.length; i = i + 1) {
                data1 = data1 + data_array1[i] //12345
            }
            $("#result").val(data1)
            console.log("number data", data_array1)
            console.log("number data", data1)
        }
        else {
            // alert(typeof data)
            data_array.push(data) //[1,2,3,4,5]
            res_data = ''
            for (i = 0; i < data_array.length; i = i + 1) {
                res_data = res_data + data_array[i] //12345
            }
            $("#result").val(res_data)
        }

        // // alert(typeof data)
        // data_array.push(data) //[1,2,3,4,5]
        // res_data = ''
        // for (i = 0; i < data_array.length; i = i + 1) {
        //     res_data = res_data + data_array[i] //12345
        // }
        // $("#result").val(res_data)

    })
    $(".operator").click(function () {
        data = $(this).val()
        console.log(data)
        new_res_data = res_data + data
        // res_data = new_res_data
        console.log("new res op data", new_res_data)

        $("#result").val(new_res_data)

    })

    $(".equal").click(function () {
        res_value = 0
        data = $("#result").val()
        if (data.indexOf('+') > -1) {
            sum_array = data.split("+")
            res_value = 0
            for (i = 0; i < sum_array.length; i = i + 1) {
                d = parseInt(sum_array[i])
                res_value = res_value + d
            }

        }
        else if (data.indexOf('-') > -1) {
            minus_array = data.split("-")
            res_value = 0
            for (i = 0; i < minus_array.length; i = i + 1) {
                d = parseInt(minus_array[i])  
                res_value =  Math.abs(d - res_value)
            }
            
        }
        else if (data.indexOf('*') > -1) {
            mul_array = data.split("*")
            res_value = 1
            for (i = 0; i < mul_array.length; i = i + 1) {
                d = parseInt(mul_array[i])
                res_value =  d * res_value
            }
        }
        else {
            div_array = data.split("/")
            res_value = 1
            for (i = 0; i < div_array.length; i = i + 1) {
                d = parseInt(div_array[i]) //10 //2
                res_value =  d / res_value //10/1 //2/10
            }
        }
        console.log(res_value)

        $("#result").val(res_value)


    })

    $(".clear").click(function () {

        $("#result").val('')
        res_data = ''
        data_array = []
        new_res_data = ''
        data_array1 = []
        data1 = ''

    })

});