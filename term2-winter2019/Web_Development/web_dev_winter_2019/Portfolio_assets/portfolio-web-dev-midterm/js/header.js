function Header() {
  var headerContent = ' \
      <div id="logo"> \
        <img src="img/logo_portfolio_svgfile.svg" alt="logo" style="width: 80px; height: 80px" /> \
      </div> \
      <div id="name"> \
        <h3>Upasana Mukherjee</h3> \
      </div> \
      <div id="menu-options"> \
        <div id="contact" class="menu">Contact</div> \
        <a href="portfolio.html"> \
          <div id="portfolio" class="menu">Portfolio</div> \
        </a> \
        <div id="about" class="menu">About</div> \
        <a href="index.html"> \
        <div id="home" class="menu">Home</div> \
        </a> \
      </div>';

  var header = document.getElementById('head');
  header.innerHTML = headerContent;
}
