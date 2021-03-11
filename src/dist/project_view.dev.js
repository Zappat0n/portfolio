"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _projects = _interopRequireDefault(require("./projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var displayView = function displayView(index) {
  var content = _projects["default"][index];
  document.querySelector('.card-img').setAttribute('src', content.image);
  document.querySelector('.card-title').textContent = content.title;
  document.querySelector('.card-description').textContent = content.description;
  document.querySelector('.card-technologies').textContent = content.technologies;
  document.querySelector('.form-project-github').setAttribute('action', content.github);

  if (content.live) {
    document.querySelector('.form-project-live').setAttribute('action', content.live);
    document.querySelector('.div-live').classList.remove('d-none');
  } else {
    document.querySelector('.div-live').classList.add('d-none');
  }
};

var _default = displayView;
exports["default"] = _default;