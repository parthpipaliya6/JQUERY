/* index.1 */
$(".myButton").click(function () {
    $(".welcomeMessage").text("Welcome! Have a great day!");
});

/* index.2 */
$(".text1").click(function () {
    $(".text1").css("background-color", "#94FFD8")
})
$(".text2").click(function () {
    $(".text2").css("background-color", "#D0A2F7")
})
$(".text3").click(function () {
    $(".text3").css("background-color", "#FF76CE")
})

/* index.3 */
$(".Btn").click(function () {
    $(".text").toggleClass("font");
});

/* index.4 */
$(".text").click(function () {
    $(".text").toggleClass("font");
});

/* index.5 */
$(".Btn1").dblclick(function () {
    $(".text").hide()
})
$(".Btn2").dblclick(function () {
    $(".text").show()
})
