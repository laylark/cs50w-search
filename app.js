function search(event) {
  event.preventDefault();
  const path = window.location.pathname;

  if (path == "/image-search.html") {
    const q = document.getElementById("q").value;
    return window.location.assign(
      "https://www.google.com/search?q=" + q + "&tbm=isch"
    );
  }
  if (path == "/advanced-search.html") {
    const all = document.getElementById("all").value;
    const exact = document.getElementById("exact").value;
    const any = document.getElementById("any").value;
    const none = document.getElementById("none").value;

    return window.location.assign(
      "https://www.google.com/search?as_q=" +
        all +
        "&as_epq=" +
        exact +
        "&as_oq=" +
        any +
        "&as_eq=" +
        none
    );
  }
}
