let ldfunc = (ie, n) => {

    $(ie).hide()

    $(ie).fadeIn(n)

}

$(window).on("load", function(){

    ldfunc($(".hdr"), 1500)

    ldfunc($(".hdrs"), 2000)

    ldfunc($(".par"), 2500)

    ldfunc($(".hdnm"), 3000)

    ldfunc($(".brain"), 10000)

    $(".up").hide()

})

$(".nme").on("click", function(){
    location.reload()
})


let itck = (m, scd, l, rl, e) => {

    $(m).on("click", function(){

        window.scrollTo({top: scd, behavior:"smooth"})

        $(this).fadeOut(20).animate({marginTop: l, fontSize: "21px"}).fadeIn(1000).fadeOut(800).animate({marginTop: rl, fontSize: "16px"}).fadeIn(20)

    $(".up").fadeOut(200).animate({marginTop: l, marginLeft:e }).fadeIn(3000).on("click", () => {

        window.scrollTo({top: "5px", behavior: "smooth"})

        $(".up").fadeOut(500)

    })

    })
}

itck($(".ant"), 250, "4.7in", "0.6in", "0.2in")

itck($(".prf"), 530, "7.7in", "0.6in", "-0.1in" )

itck($(".dev"), 850, "12in", "1.1in", "-0.06in")

itck($(".prj"), 1300, "15.2in", "1.1in", "0.8in" )

itck($(".pass"), 630, "9.75in", "0.6in", "1.4in")

let cc = (ie) => {

    $(ie).on("mouseover", function(){

        $(this).css({color: 'red', textDecoration: "underline"})

    }).on("mouseleave", function(){

        $(this).css({color: "black", textDecoration: "none"})

    })

}

cc($("button"))

let origImg = (e, m, mL,) => {

    $(e).on("mouseleave", function(){

        $(this).animate({

            height: m, 

            width: m,

            marginLeft: mL,

        }, 300).css({zIndex: "1"})

    })

}

let enlImg = (m, n, r, omL, nmL ) => {

    $(m).on("mouseover", function(){

        $(this).css({zIndex: "2"}).animate({

            height: n,

            width: n,

            marginLeft: nmL,

        }, 150)

        origImg(m, r, omL)

    })

}

if(innerWidth > 2601){

    alert('This site wasn`t built for this width!')

}

