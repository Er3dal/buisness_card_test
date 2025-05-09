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
      console.log("Apple device detected — switched to:", newHref);
    }
  }
});
