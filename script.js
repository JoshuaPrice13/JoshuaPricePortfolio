document.addEventListener("DOMContentLoaded", function () {
    // Select both old and new button classes for compatibility
    const downloadBtn = document.querySelector(".download-btn, .card-button");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function (e) {
            // Check if it's already a link with href, if so let it work normally
            if (this.tagName === 'A' && this.getAttribute('href')) {
                // Let the link work as normal
                return;
            }

            // Otherwise, trigger download
            e.preventDefault();
            const cvUrl = "Files/Resume_Sept_2025_CAREERFAIR.pdf";
            const a = document.createElement("a");
            a.href = cvUrl;
            a.download = "Resume_Sept_2025_CAREERFAIR.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
});
