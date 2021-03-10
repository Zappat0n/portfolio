import displayView from './project_view';
import projects from './projects';

let index = 0;
displayView(index);

document.querySelector('.move-right').addEventListener('click', () => {
  if (index < projects.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
  displayView(index);
});

document.querySelector('.move-left').addEventListener('click', () => {
  if (index > 0) {
    index -= 1;
  } else {
    index = projects.length - 1;
  }
  displayView(index);
});
