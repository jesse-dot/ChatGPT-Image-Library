document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // Replace these URLs with your own image URLs
    const imageUrls = [
        "https://i.imgur.com/MtRi5V2.jpg",
        // Add more images as needed
    ];

    imageUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        gallery.appendChild(img);
    });
});
