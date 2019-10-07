function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomActions =
/*#__PURE__*/
function () {
  "use strict";

  function CustomActions() {
    _classCallCheck(this, CustomActions);
  }

  _createClass(CustomActions, [{
    key: "toggleClass",
    value: function toggleClass(elementClass, toggledClassName, windowSize) {
      var toggle = function toggle() {
        var currentWindowSize = window.innerWidth,
            elems = document.getElementsByClassName(elementClass);

        if (currentWindowSize <= windowSize) {
          for (var i = 0; i < elems.length; i++) {
            elems[i].className += ' ' + toggledClassName;
          }
        } else {
          for (var _i = 0; _i < elems.length; _i++) {
            var str = elems[_i].className,
                pos = str.indexOf(toggledClassName);
            str = str.slice(0, pos);
            if (~pos) elems[_i].className = str;
          }
        }
      };

      window.addEventListener('resize', toggle);
      toggle();
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility(elementClassName, toggler) {
      var toggleTo = function toggleTo() {
        var pageOffset = window.pageYOffset,
            elements = document.getElementsByClassName(elementClassName);

        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = pageOffset > toggler ? "block" : "none";
        }
      };

      document.addEventListener("scroll", toggleTo);
    }
  }, {
    key: "smoothScroll",
    value: function smoothScroll(linksClassName, time) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var moveTo = function moveTo(event) {
        event.preventDefault();
        var id = event.target.getAttribute('href').slice(1);

        if (id != '' && /\S/.test(id)) {
          var startPos = window.pageYOffset,
              endPos = document.getElementById(id).offsetTop,
              distance = endPos - startPos + offset,
              maxDistance = document.body.clientHeight - window.innerHeight,
              step = 0;
          distance = distance < maxDistance ? distance : maxDistance;

          var stepTo = function stepTo() {
            if (step == 100) {
              clearInterval(timeId);
            } else {
              startPos += distance / 100;
              window.scrollTo(0, startPos);
              step++;
            }
          };

          var timeId = setInterval(stepTo, time / 100);
        }
      };

      var navLincks = document.getElementsByClassName(linksClassName);

      for (var i = 0; i < navLincks.length; i++) {
        navLincks[i].addEventListener('click', moveTo);
      }
    }
  }]);

  return CustomActions;
}();