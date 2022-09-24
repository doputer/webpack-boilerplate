import '@/styles/index.scss';

const render = () => {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, webpack!';

  return element;
};

document.querySelector('#root').appendChild(render());
