

/*NOtICESS */
document.addEventListener('DOMContentLoaded', () => {
    const notices = [
        { title: 'Notice Title 1', date: '2024-09-02', description: 'Brief description of the notice goes here.', category: 'general' },
        { title: 'Notice Title 2', date: '2024-09-01', description: 'Brief description of the notice goes here.', category: 'events' },
        { title: 'Notice Title 3', date: '2024-08-30', description: 'Brief description of the notice goes here.', category: 'updates' },
        // Add more notices here
    ];

    const noticesContainer = document.getElementById('notices');
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');

    function renderNotices(filteredNotices) {
        noticesContainer.innerHTML = '';
        filteredNotices.forEach(notice => {
            const noticeElement = document.createElement('div');
            noticeElement.className = 'notice';
            noticeElement.innerHTML = `
                    <h2>${notice.title}</h2>
                    <p>Date: ${notice.date}</p>
                    <p>${notice.description}</p>
                `;
            noticesContainer.appendChild(noticeElement);
        });
    }

    function filterNotices() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const filteredNotices = notices.filter(notice => {
            const matchesSearch = notice.title.toLowerCase().includes(searchTerm) || notice.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !selectedCategory || notice.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        renderNotices(filteredNotices);
    }

    searchInput.addEventListener('input', filterNotices);
    categoryFilter.addEventListener('change', filterNotices);

    // Initial render
    renderNotices(notices);
});
// POP UP GREETING MSG
// Function to handle the popup display and close actions
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('welcomePopup');
    const closeButton = document.getElementById('closePopup');

    // Show the popup when the page loads
    popup.style.display = 'flex';

    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Optional: Close the popup when clicking outside of the popup content
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
