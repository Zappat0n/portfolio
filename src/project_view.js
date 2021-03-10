import projects from './projects';

const displayView = (index) => {
  const content = projects[index];

  document.querySelector('.card-img').setAttribute('src', content.image);
  document.querySelector('.card-title').textContent = content.title;
  document.querySelector('.card-description').textContent = content.description;
  document.querySelector('.card-technologies').textContent = content.technologies;
  document.querySelector('.form-project-github').setAttribute('action', content.github);
  if (content.live) {
    document.querySelector('.form-project-live').setAttribute('action', content.live);
  }

}

export default displayView;
