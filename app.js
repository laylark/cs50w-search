function search(event) {
  event.preventDefault();
  const path = window.location.pathname;
  const q = document.getElementById("q").value;
  const urlParam = "";
  //   const all = document.getElementById("all").value;
  //   const exact = document.getElementById("exact").value;
  //   const none = document.getElementById("none").value;

  if (path == "/image-search.html") {
    return window.location.assign(
      "https://www.google.com/search?q=" + q + "&tbm=isch"
    );
  }
}
