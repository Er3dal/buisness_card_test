const isApple = /iPad|iPhone|iPod|Mac/.test(navigator.userAgent);
const link = document.getElementById("smartDownload");

if (isApple) {
  // Costruiamo il percorso verso la versione con immagine
  const currentHref = link.getAttribute("href");
  const newHref = currentHref.replace("_no_image.vcf", "_with_image.vcf");
  link.setAttribute("href", newHref);
}
