window.addEventListener("DOMContentLoaded", () => {
  const isiOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const isApple = isiOS || isMac;
  const link = document.getElementById("smartDownload");

  if (isApple && link) {
    const href = link.getAttribute("href");
    if (href && href.includes("_no_image.vcf")) {
      const newHref = href.replace("_no_image.vcf", "_with_image.vcf");
      link.setAttribute("href", newHref);
    }
  }

  const modal = document.getElementById("qrModal");
  const btn = document.getElementById("qrButton");
  const span = document.getElementById("qrClose");

  btn.onclick = () => {
    modal.style.display = "block";
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {
      text: "{page_url}",
      width: 200,
      height: 200
    });
  };

  span.onclick = () => (modal.style.display = "none");

  window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
  };
});