function footer() {
  let year = new Date().getFullYear();
  let footer = `
        <div class="footer-link">
            © ${year} Copyright | <a href="https://olympia-electronics.gr/" target="_blank"><u>Olympia Electronics</u></a>
        </div>
        <div class="footer-version">v1.0.0.1</div>
    `;

  document.getElementById("footer").innerHTML = footer;
}
