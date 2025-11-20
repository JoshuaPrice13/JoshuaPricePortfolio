
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".download-btn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const cvUrl = "Files/Resume_March_2025.pdf";
            const a = document.createElement("a");
            a.href = cvUrl;
            a.download = "Files/Resume_March_2025.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
});
