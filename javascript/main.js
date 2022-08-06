function ButtonClick()
{
  let HTML = document.getElementById('script');
  HTML.innerHTML += 'PLEASE COME BACK ANOTHER TIME. ';
  document.body.appendChild(HTML);
  console.log('test');
}