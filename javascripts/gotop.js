$(document).ready(function () {
    $(window).scroll(function () {
        var d = document.documentElement.scrollTop + document.body.scrollTop;
        if (d > 200) {
            $("#gotop").fadeIn(400)
        } else {
            $("#gotop").stop().fadeOut(400)
        }
    });
    $("#gotop").click(function () {
        $("html,body").animate({
            scrollTop: "0px"
        }, 200)
    });
    var a = $(".search-trigger"),
        c = $(".search-field"),
        b = true;
    if (a) {
        a.on("click", function (d) {
            d.preventDefault();
            if (b) {
                $(".search-field").focus();
                b = false
            }
            if (c.prop("disabled")) {
                c.prop("disabled", false);
                c.animate({
                    opacity: 1
                }, 500, "linear")
            } else {
                c.prop("disabled", true);
                c.animate({
                    opacity: 0
                }, 500, "linear")
            }
        })
    }
    if (c) {}
});

function loadjs(a) {
    var b = document.createElement("script");
    b.setAttribute("type", "text/javascript");
    b.setAttribute("src", a);
    b.setAttribute("id", "hahack_script_id");
    script_id = document.getElementById("hahack_script_id");
    if (script_id) {
        document.getElementsByTagName("head")[0].removeChild(script_id)
    }
    document.getElementsByTagName("head")[0].appendChild(b)
};
