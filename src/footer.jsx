import React from "react";

function footer() {
  const currentYear = new Date().getFullYear();

  return <footer>Copy right © {currentYear}</footer>;
}

export default footer;
