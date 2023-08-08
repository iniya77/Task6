//Generating each image

const images = [
    { src: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', category: 'bag' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', category: 'headphone' },
    { src: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', category: 'camera' },
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', category: 'shoe' },
    { src: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', category: 'headphone' },
    { src: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60', category: 'watch' },
    { src: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60', category: 'shoe' },
    { src: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', category: 'camera' }
    
];

// Function to display images based on category
function displayImages(category) {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = '';

    images.forEach(image => {
        if (category === 'all' || image.category === category) {
            const imageElement = document.createElement('img');
            imageElement.src = image.src;
            imageElement.alt = image.category;
            imageElement.classList.add('col-sm-6', 'col-md-4', 'col-lg-3',  'mb-4');
            imageElement.style.cursor="pointer";
            imageContainer.appendChild(imageElement);
        }
    });

    // Attach click event to images to show modal
    document.querySelectorAll('.image-container img').forEach(img => {
        img.addEventListener('click', () => {
            const selectedSrc = img.getAttribute('src');
            const selectedCategory = img.getAttribute('alt');
            showImageModal(selectedSrc, selectedCategory);
        });
    });
}

// Function to show the image modal
function showImageModal(src, category) {
    const selectedImage = document.querySelector('.selected-image');
    const selectedCategoryElement = document.querySelector('.selected-category');

    selectedImage.src = src;
    selectedImage.alt = category;
    selectedCategoryElement.textContent = `Image Category: ${category}`;

    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

// Add event listeners to category buttons
const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove btn-primary class from all buttons and add btn-outline-primary
        categoryButtons.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-primary');
        });

        // Add btn-primary class to the clicked button
        button.classList.remove('btn-outline-primary');
        button.classList.add('btn-primary');

        const selectedCategory = button.getAttribute('data-category');
        displayImages(selectedCategory);
    });
});

//Change the style for All button
const allButton = document.querySelector('.category-button[data-category="all"]');
allButton.classList.add('btn-primary');

// Initially display all images
displayImages('all');
