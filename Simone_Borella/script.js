const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const link = document.getElementById("downloadLink");
        if (isiOS) {{
          link.href = "{vcf_path_with_img}";
        }}