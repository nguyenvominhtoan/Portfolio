"use strict";
!(function (t) {
  t.fn.tilt = function (i) {
    var s = this,
      e = function () {
        this.ticking ||
          (requestAnimationFrame(u.bind(this)), (this.ticking = !0));
      },
      n = function () {
        t(this).on("mousemove", r),
          t(this).on("mouseenter", h),
          this.settings.reset && t(this).on("mouseleave", c);
      },
      a = function () {
        var i = this;
        void 0 !== this.timeout && clearTimeout(this.timeout),
          t(this).css({
            transition: this.settings.speed + "ms " + this.settings.easing,
          }),
          (this.timeout = setTimeout(function () {
            t(i).css({ transition: "" });
          }, this.settings.speed));
      },
      h = function () {
        (this.ticking = !1),
          t(this).css({ "will-change": "transform" }),
          a.call(this),
          t(this).trigger("tilt.mouseEnter");
      },
      o = function () {
        return (
          void 0 === event &&
            (event = {
              pageX: t(this).offset().left + t(this).width() / 2,
              pageY: t(this).offset().top + t(this).height() / 2,
            }),
          { x: event.pageX, y: event.pageY }
        );
      },
      r = function () {
        (this.mousePositions = o()), e.call(this);
      },
      c = function () {
        a.call(this),
          (this.reset = !0),
          e.call(this),
          t(this).trigger("tilt.mouseLeave");
      },
      l = function () {
        var i = this.clientWidth,
          s = this.clientHeight,
          e = (this.mousePositions.x - t(this).offset().left) / i,
          n = (this.mousePositions.y - t(this).offset().top) / s,
          a = (this.settings.maxTilt / 2 - e * this.settings.maxTilt).toFixed(
            2
          ),
          h = (n * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(
            2
          );
        return {
          tiltX: a,
          tiltY: h,
          percentageX: 100 * e,
          percentageY: 100 * n,
        };
      },
      u = function () {
        return (
          (this.transforms = l.call(this)),
          this.reset
            ? ((this.reset = !1),
              void t(this).css(
                "transform",
                "perspective(" +
                  this.settings.perspective +
                  "px) rotateX(0deg) rotateY(0deg)"
              ))
            : (t(this).css(
                "transform",
                "perspective(" +
                  this.settings.perspective +
                  "px) rotateX(" +
                  ("x" === this.settings.axis ? 0 : this.transforms.tiltY) +
                  "deg) rotateY(" +
                  ("y" === this.settings.axis ? 0 : this.transforms.tiltX) +
                  "deg) scale3d(" +
                  this.settings.scale +
                  "," +
                  this.settings.scale +
                  "," +
                  this.settings.scale +
                  ")"
              ),
              t(this).trigger("change", [this.transforms]),
              void (this.ticking = !1))
        );
      };
    return (
      (this.methods = {
        getValues: function () {
          var i = [];
          return (
            t(s).each(function () {
              (this.mousePositions = o()), i.push(l.call(this));
            }),
            i
          );
        },
        reset: (function (t) {
          function i() {
            return t.apply(this, arguments);
          }
          return (
            (i.toString = function () {
              return t.toString();
            }),
            i
          );
        })(function () {
          c(),
            setTimeout(function () {
              reset = !1;
            }, s.settings.transition);
        }),
        destroy: function () {
          t(s).each(function () {
            t(this).css({ "will-change": "", transform: "" }),
              t(this).off("mousemove mouseenter mouseleave");
          });
        },
      }),
      this.each(function () {
        var s = this;
        (this.settings = t.extend(
          {
            maxTilt: t(this).is("[data-tilt-max]")
              ? t(this).data("tilt-max")
              : 20,
            perspective: t(this).is("[data-tilt-perspective]")
              ? t(this).data("tilt-perspective")
              : 1e3,
            easing: t(this).is("[data-tilt-easing]")
              ? t(this).data("tilt-easing")
              : "cubic-bezier(.03,.98,.52,.99)",
            scale: t(this).is("[data-tilt-scale]")
              ? t(this).data("tilt-scale")
              : "1",
            speed: t(this).is("[data-tilt-speed]")
              ? t(this).data("tilt-speed")
              : "300",
            transition:
              !t(this).is("[data-tilt-transition]") ||
              t(this).data("tilt-transition"),
            axis: t(this).is("[data-tilt-axis]")
              ? t(this).data("tilt-axis")
              : null,
            reset:
              !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
          },
          i
        )),
          (this.init = function () {
            n.call(s);
          }),
          this.init();
      })
    );
  };
})(jQuery);
