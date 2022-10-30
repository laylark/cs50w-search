function search(event) {
  event.preventDefault();
  const q = document.getElementById("q").value;
  return window.location.assign(
    "https://www.google.com/search?q=" + q + "&tbm=isch"
  );
}
