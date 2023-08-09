function getAttributes() {
  let result = document.getElementById('w3r');
  alert(
    `
    type: ${result.type}
    hreflang: ${result.hreflang}
    rel: ${result.rel}
    target: ${result.target}
    href: ${result.href}
    `
  );
}
