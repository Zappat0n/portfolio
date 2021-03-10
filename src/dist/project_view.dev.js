"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _projects = _interopRequireDefault(require("./projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//<h2 class = "border-bottom pb-3">My recent work</h2>
//<div class="work card mt-5 w-100 my-4">
//  <div class="card-body">
//    <div class="row">
//      <div class="col-12 col-md-6">
//        <img class="card-img w-100" src="./assets/images/Screenshot-tic-tac-toe.png" alt="Tic-tac-toe image">
//      </div>
//      <div class="col-12 col-md-6 p-3">
//        <h5 class="card-title">Tic-tac-toe game</h5>
//        <p class="card-text">A tic-tac-toe game for the terminal developed in Ruby</p>
//        <p class="card-text"><strong>Ruby | Git | Gitflow | Rubocop | VS Code</strong></p>
//        <form action="./details/detail-tic-tac-toe.html" method="get">
//          <button class="button m-4" type="submit">
//            See Project
//            <span class="button__horizontal"></span>
//            <span class="button__vertical"></span>
//          </button>
//        </form>
//      </div>
//    </div>
//  </div>
//</div>
var _default = displayView = function displayView(index) {
  var content = _projects["default"][index];
  document.querySelector('.card-img').setAttribute('src', content.image);
  document.querySelector('.card-title').textContent = content.title;
  document.querySelector('.card-description').textContent = content.description;
  document.querySelector('.card-technologies').textContent = content.technologies;
  document.querySelector('.form-project-github').setAttribute('action', content.github);

  if (content.live) {
    document.querySelector('.form-project-live').setAttribute('action', content.live);
  }
};

exports["default"] = _default;