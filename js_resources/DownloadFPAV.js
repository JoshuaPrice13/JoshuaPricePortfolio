
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".download-btn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const cvUrl = "Files/FloatingPointArithmeticVisualizer.zip";
            const a = document.createElement("a");
            a.href = cvUrl;
            a.download = "Files/FloatingPointArithmeticVisualizer.zip";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
});
