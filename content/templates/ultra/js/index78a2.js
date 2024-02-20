/*load-page*/
$(document).on("click", ".load_more a:not(.pagenavi-loading)", function() {
    var _this = $(this);
    var next = _this.attr("href").replace("?ajx=page", "");
    $.ajax({
        url:next,
        beforeSend:function() {},
        success:function(data) {
            $(".list-home").append($(data).find(".white-post"));
            nextHref = $(data).find(".load_more a").attr("href");
            if (nextHref != undefined) {
                $(".load_more").removeClass("loading");
                $(".load_more a").attr("href", nextHref);
            } else {
                $(".load_more").removeClass("loading");
                $(".load_more a").attr("href", "javascript:;").text("已加载全部文章").attr("class", "pagenavi-loading");
                $(".pagenavi-loading").on("click", function() {
                    $.message({
                        message:"已加载全部文章",
                        type:"warning"
                    });
                });
            }
        },
        complete:function() {},
        error:function() {
            location.href = next;
        }
    });
    return false;
});


/*nav*/
window.onscroll = function() {
    var a = document.body.scrollTop || document.documentElement.scrollTop;
    var x = document.getElementById("top");
    var y = document.getElementById("secondary");
    var z = document.getElementsByTagName('body')[0].classList.contains('head-fixed');
    if (x) {
        var b = document.getElementById("top");
        if (a >= 200) {
            b.removeAttribute("class")
        } else {
            b.setAttribute("class", "hidden")
        }
        b.onclick = function totop() {
            var a = document.body.scrollTop || document.documentElement.scrollTop;
            if (a > 1) {
                requestAnimationFrame(totop);
                scrollTo(0, a - (a / 5))
            } else {
                cancelAnimationFrame(totop);
                scrollTo(0, 0)
            }
        }
    }
    if (z) {
        var c = document.getElementById("header");
        if (a > 0 && a < 30) {
            c.style.padding = (15 - a / 2) + "px 0"
        } else if (a >= 30) {
            c.style.padding = 0
        } else {
            c.removeAttribute("style")
        }
		
		
		
		var b = document.getElementById("logo");
        if (a <= 30) {
            b.removeAttribute("class")
        } else {
            b.setAttribute("class", "logo")
        }
		
		
    }
    if (y && y.hasAttribute("sidebar-fixed")) {
        var d = document.getElementById("main");
        var e = document.documentElement.clientHeight;
        var f = z ? 0 : 41;
        if (d.offsetHeight > y.offsetHeight) {
            if (y.offsetHeight > e - 71 && a > y.offsetHeight + 101 - e) {
                if (a < d.offsetHeight + 101 - e) {
                    y.style.marginTop = (a - y.offsetHeight - 101 + e) + "px"
                } else {
                    y.style.marginTop = (d.offsetHeight - y.offsetHeight) + "px"
                }
            } else if (y.offsetHeight <= e - 71 && a > 30 + f) {
                if (a < d.offsetHeight - y.offsetHeight + f) {
                    y.style.marginTop = (a - 30 - f) + "px"
                } else {
                    y.style.marginTop = (d.offsetHeight - y.offsetHeight - 30) + "px"
                }
            } else {
                y.removeAttribute("style")
            }
        }
    }
};




/*字体大小*/
jQuery(document).ready(function(b) {
    b("#font-adjust span").click(function() {
        var e = ".nc-light-gallery p";
        var bj = 1;
        var d = 16;
        var B = b(e).css("fontSize");
        var g = parseFloat(B, 10);
        var C = B.slice(-2);
        var c = b(this).attr("id");
        switch (c) {
            case "font-dec":
                g -= bj;
                break;
            case "font-inc":
                g += bj;
                break;
            default:
                g = d
        }
        b(e).css("fontSize", g + C);
        return false
    })
});


// 代码高亮
$(document).ready(function() {
    $("pre").addClass("line-numbers");
    $("code").addClass("language-markup");
});

// 灯箱
$(document).ready(function(){
    $("#image_container img[src$=jpg],#image_container img[src$=gif],#image_container img[src$=png],#image_container img[src$=jpeg]").addClass("spotlight").each(function(){this.onclick=function(){return hs.expand(this)}});
});




	jQuery(document).ready(function() {
		jQuery('.sidebar').theiaStickySidebar({
		// Settings
		additionalMarginTop: 30
		});
	});
	
	
// 搜索高亮
jQuery(document).ready(function() {
  var targetDiv = document.getElementById('keyword');
  if (targetDiv !== null) {
    var text = targetDiv.textContent;
    var allTextElements = document.querySelectorAll('.list-body-title');
    for (var i = 0; i < allTextElements.length; i++) {
      var element = allTextElements[i];
      if (element.textContent.includes(text)) {
        var newText = element.textContent.replace(text, '<span class="title-highlight">' + text + '</span>');
        element.innerHTML = newText;
      }
    }
  }
});