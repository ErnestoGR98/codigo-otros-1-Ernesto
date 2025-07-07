const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); //cambié # a . ya que en el html es clase
const $l = document.querySelector('.location');

async function displayUser(username) { //await debe ir dentro de una función async
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //no se estaba usando el .json
    console.log(data);

    $n.textContent = `${data.name}` ; //deben ir entre backtics
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}` //la variable n no existe, es $n
  }

  displayUser('stolinski').catch(handleError);