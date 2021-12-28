function header_side_hide() {
  var $body = $("body");
  //side header processing
  var $sideHeader = $(".page_header_side");
  if ($sideHeader.length) {
    var $thisToggler = $(".toggle_menu_side");
    $thisToggler.toggleClass("active");
    if ($thisToggler.hasClass("header-slide")) {
      $sideHeader.toggleClass("active-slide-side-header");
      $body.toggleClass("active-side-slide-header");
    } else {
      if ($thisToggler.parent().hasClass("header_side_right")) {
        $body.toggleClass("active-side-header slide-right");
      } else {
        $body.toggleClass("active-side-header");
      }
      $body.parent().toggleClass("html-active-push-header");
    }
    //fixing mega menu and aside affix on toggling side sticked header
    if ($thisToggler.closest(".header_side_sticked").length) {
      initMegaMenu(600);
      var $affixAside = $(".affix-aside");
      if ($affixAside.length) {
        $affixAside
          .removeClass("affix affix-bottom")
          .addClass("affix-top")
          .css({ width: "", left: "" })
          .trigger("affix-top.bs.affix");
        setTimeout(function () {
          $affixAside
            .removeClass("affix affix-bottom")
            .addClass("affix-top")
            .css({ width: "", left: "" })
            .trigger("affix-top.bs.affix");
        }, 10);
      }
    }
  }
}
function particlesFunc() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#ffffff",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 240,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
}
function header_side_init() {
  var $body = $("body");
  var $sideHeader = $(".page_header_side");
  if ($sideHeader.length) {
    $(".toggle_menu_side").on("click", function () {
      console.log("test-tg");
      var $thisToggler = $(this);
      $thisToggler.toggleClass("active");
      if ($thisToggler.hasClass("header-slide")) {
        $sideHeader.toggleClass("active-slide-side-header");
        $body.toggleClass("active-side-slide-header");
      } else {
        if ($thisToggler.parent().hasClass("header_side_right")) {
          $body.toggleClass("active-side-header slide-right");
        } else {
          $body.toggleClass("active-side-header");
        }
        $body.parent().toggleClass("html-active-push-header");
      }
      //fixing mega menu and aside affix on toggling side sticked header
      if ($thisToggler.closest(".header_side_sticked").length) {
        initMegaMenu(600);
        var $affixAside = $(".affix-aside");
        if ($affixAside.length) {
          $affixAside
            .removeClass("affix affix-bottom")
            .addClass("affix-top")
            .css({ width: "", left: "" })
            .trigger("affix-top.bs.affix");
          setTimeout(function () {
            $affixAside
              .removeClass("affix affix-bottom")
              .addClass("affix-top")
              .css({ width: "", left: "" })
              .trigger("affix-top.bs.affix");
          }, 10);
        }
      }
    });
    //hidding side header on click outside header
    $body.on("mousedown touchstart", function (e) {
      if (
        !$(e.target).closest(".page_header_side").length &&
        !$sideHeader.hasClass("header_side_sticked")
      ) {
        $sideHeader.removeClass("active-slide-side-header");
        $body.removeClass(
          "active-side-header active-side-slide-header slide-right"
        );
        $body.parent().removeClass("html-active-push-header");
        var $toggler = $(".toggle_menu_side");
        if ($toggler.hasClass("active")) {
          $toggler.removeClass("active");
        }
      }
    });
  } //sideHeader check
}

function changeTitle() {}

function header() {
  var $window = $(window);
  $window.on("resize", function () {
    //returning sidebar in top position if it is sticked because of unexpected behavior
    $affixAside
      .removeClass("affix affix-bottom")
      .addClass("affix-top")
      .trigger("affix-top.bs.affix");

    var offsetTopSectionsArray = [
      ".page_topline",
      ".page_toplogo",
      ".page_header",
      ".page_title",
      ".blog_slider",
      ".blog-featured-posts",
    ];
    var offsetTop = 0;

    offsetTopSectionsArray.map(function (val) {
      offsetTop += $(val).outerHeight(true) || 0;
    });
    //note that page_footer and page_copyright sections must exists - else this will cause error in last jQuery versions
    var offsetBottom =
      $(".page_footer").outerHeight(true) +
      $(".page_copyright").outerHeight(true);

    $affixAside.data("bs.affix").options.offset.top = offsetTop - offsetTopAdd;
    $affixAside.data("bs.affix").options.offset.bottom =
      offsetBottom + offsetBottomAdd;

    $affixAside.affix("checkPosition");
  });
}
function header2() {
  var $window = $(window);
  var $header = $(".page_header").first();
  var boxed = $header.closest(".boxed").length;
  var headerSticked = $(".header_side_sticked").length;
  if ($header.length) {
    //hiding main menu 1st levele elements that do not fit width

    //wrap header for smooth stick and unstick
    var headerHeight = $header.outerHeight();
    $header.wrap('<div class="page_header_wrapper"></div>');
    var $headerWrapper = $(".page_header_wrapper");
    if (!boxed) {
      $headerWrapper.css({ height: headerHeight });
    }

    //headerWrapper background - same as header
    if ($header.hasClass("ls")) {
      $headerWrapper.addClass("ls");
      if ($header.hasClass("ms")) {
        $headerWrapper.addClass("ms");
      }
    } else if ($header.hasClass("ds")) {
      $headerWrapper.addClass("ds");
      if ($header.hasClass("bs")) {
        $headerWrapper.addClass("bs");
      }
      if ($header.hasClass("ms")) {
        $headerWrapper.addClass("ms");
      }
    } else if ($header.hasClass("cs")) {
      $headerWrapper.addClass("cs");
      if ($header.hasClass("cs2")) {
        $headerWrapper.addClass("cs2");
      }
      if ($header.hasClass("cs3")) {
        $headerWrapper.addClass("cs3");
      }
    } else if ($header.hasClass("gradient-background")) {
      $headerWrapper.addClass("gradient-background");
    }

    //get offset
    var headerOffset = 0;
    //check for sticked template headers
    if (!boxed && !($headerWrapper.css("position") === "fixed")) {
      headerOffset = $header.offset().top;
    }

    //for boxed layout - show or hide main menu elements if width has been changed on affix
    $header.on(
      "affixed-top.bs.affix affixed.bs.affix affixed-bottom.bs.affix",
      function (e) {
        if ($header.hasClass("affix-top")) {
          $headerWrapper
            .removeClass("affix-wrapper affix-bottom-wrapper")
            .addClass("affix-top-wrapper");
          //cs to ls when affixed
          // if($header.hasClass('cs')) {
          // 	$header.removeClass('ls');
          // }
        } else if ($header.hasClass("affix")) {
          $headerWrapper
            .removeClass("affix-top-wrapper affix-bottom-wrapper")
            .addClass("affix-wrapper");
          //cs to ls when affixed
          // if($header.hasClass('cs')) {
          // 	$header.addClass('ls');
          // }
        } else if ($header.hasClass("affix-bottom")) {
          $headerWrapper
            .removeClass("affix-wrapper affix-top-wrapper")
            .addClass("affix-bottom-wrapper");
        } else {
          $headerWrapper.removeClass(
            "affix-wrapper affix-top-wrapper affix-bottom-wrapper"
          );
        }

        //calling this functions disable menu items animation when going from affix to affix-top with centered logo inside
        //in boxed layouts header is always fixed
        if (boxed && !($header.css("position") === "fixed")) {
          menuHideExtraElements();
          initMegaMenu(1);
        }
        if (headerSticked) {
          initMegaMenu(1);
        }
      }
    );

    //if header has different height on afixed and affixed-top positions - correcting wrapper height
    $header.on("affixed-top.bs.affix", function () {
      // $headerWrapper.css({height: $header.outerHeight()});
    });

    //fixing auto affix bug - toggle affix on click when page is at the top
    $header.on("affix.bs.affix", function () {
      if (!$window.scrollTop()) return false;
    });

    $header.affix({
      offset: {
        top: headerOffset,
        bottom: -10,
      },
    });
  }
}


function mobile(){
  if ($().scrollbar) {
    $('[class*="scrollbar-"]').scrollbar();
  }
  if ($().superfish) {
    $("ul.sf-menu").superfish({
      popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
      delay: 700,
      animation: { opacity: "show", marginTop: 0 },
      animationOut: { opacity: "hide", marginTop: 5 },
      speed: 200,
      speedOut: 200,
      disableHI: false,
      cssArrows: true,
      autoArrows: true,
      onInit: function () {
        var $thisMenu = $(this);
        $thisMenu
          .find(".sf-with-ul")
          .after('<span class="sf-menu-item-mobile-toggler"/>');
        $thisMenu
          .find(".sf-menu-item-mobile-toggler")
          .on("click", function (e) {
            var $parentLi = $(this).parent();
            if ($parentLi.hasClass("sfHover")) {
              $parentLi.superfish("hide");
            } else {
              $parentLi.superfish("show");
            }
          });
      },
    });
    $("ul.sf-menu-side").superfish({
      popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
      delay: 500,
      animation: { opacity: "show", height: 100 + "%" },
      animationOut: { opacity: "hide", height: 0 },
      speed: 400,
      speedOut: 300,
      disableHI: false,
      cssArrows: true,
      autoArrows: true,
    });
  }

  //toggle mobile menu
  $(".page_header .toggle_menu, .page_toplogo .toggle_menu").on(
    "click",
    function () {
      $(this)
        .toggleClass("mobile-active")
        .closest(".page_header")
        .toggleClass("mobile-active")
        .end()
        .closest(".page_toplogo")
        .next()
        .find(".page_header")
        .toggleClass("mobile-active");
    }
  );

  $(".sf-menu a").on("click", function () {
    var $this = $(this);
    //If this is a local link or item with sumbenu - not toggling menu
    if (
      $this.hasClass("sf-with-ul") ||
      !($this.attr("href").charAt(0) === "#")
    ) {
      return;
    }
    $this
      .closest(".page_header")
      .toggleClass("mobile-active")
      .find(".toggle_menu")
      .toggleClass("mobile-active");
  });

}