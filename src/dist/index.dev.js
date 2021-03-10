"use strict";

var _project_view = _interopRequireDefault(require("./project_view"));

var _projects = _interopRequireDefault(require("./projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var index = 0;
(0, _project_view["default"])(index);
document.querySelector('.move-right').addEventListener('click', function () {
  if (index < _projects["default"].length - 1) {
    index += 1;
  } else {
    index = 0;
  }

  (0, _project_view["default"])(index);
});
document.querySelector('.move-left').addEventListener('click', function () {
  if (index > 0) {
    index -= 1;
  } else {
    index = _projects["default"].length - 1;
  }

  (0, _project_view["default"])(index);
});