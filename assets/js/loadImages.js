export const initializeGallery = (images, path) => {
    const container = document.getElementById("image-container");

    const createLowResImage = (image) => {
        const img = document.createElement("img");
        img.src = `${path}/low-res/${image}.avif`;
        img.dataset.src = `${path}/mid-res/${image}.avif`;
        img.alt = `${image}.avif`;
        img.classList.add("placeholder");

        img.addEventListener("load", () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            if (aspectRatio >= 1) {
                img.classList.add("landscape");
            } else {
                img.classList.add("portrait");
            }
        });

        return img;
    };

    const loadHighResImage = (img) => {
        return new Promise((resolve, reject) => {
            const highResImg = new Image();
            highResImg.src = img.dataset.src;

            highResImg.onload = () => {
                img.src = highResImg.src;
                img.classList.remove("placeholder");
                img.classList.add("fullRes");
                resolve();
            };

            highResImg.onerror = () => {
                img.classList.add("error");
                console.error(`Failed to load high-resolution image: ${img.dataset.src}`);
                reject();
            };
        });
    };

    const createImageWrapper = (img) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("image-wrapper");
        wrapper.appendChild(img);
        return wrapper;
    };

    const setupImageObserver = (observer, images) => {
        images.forEach(image => {
            const imgElement = createLowResImage(image);
            const wrapper = createImageWrapper(imgElement);

            container.appendChild(wrapper);
            observer.observe(imgElement);
        });
    };

    const initializeObserver = () => {
        const observerOptions = {
            rootMargin: "0px",
            threshold: 0.1
        };

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadHighResImage(img);
                    observer.unobserve(img);
                }
            });
        }, observerOptions);

        return imageObserver;
    };

    const loadImages = (images) => {
        return new Promise((resolve, reject) => {
            try {
                const imageObserver = initializeObserver();
                setupImageObserver(imageObserver, images);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    const initializeCarousel = () => {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("carouselImage");
        const images = container.querySelectorAll("img");
        const closeBtn = document.querySelector(".close");
        const downloadBtn = document.querySelector(".download");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        let currentIndex = 0;

        const loadImage = (index) => {
            modalImg.src = images[index].src;
            downloadBtn.href = images[index].src.replace('mid-res', 'high-res').replace('.avif', '.jpg');
        };

        images.forEach((img, index) => {
            img.addEventListener("click", () => {
                currentIndex = index;
                loadHighResImage(img).finally(() => {
                    modal.style.display = "block";
                    loadImage(currentIndex);
                });
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            modalImg.src = images[currentIndex].src;
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            modalImg.src = images[currentIndex].src;
        });
    };

    loadImages(images)
        .then(() => initializeCarousel())
        .catch(error => console.error("Error loading images:", error));
};


