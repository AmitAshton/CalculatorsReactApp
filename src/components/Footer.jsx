import React from "react";

function Footer() {
    let currentYear = new Date().getFullYear()
  return (
    <div className="footer fixed-bottom">
      <footer class="py-5 bg-dark ">
        <div class="container">
          <p class="m-0 text-center text-white">
          Copyright © {currentYear} Ashton Amit
        </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;