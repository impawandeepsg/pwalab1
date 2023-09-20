document.addEventListener('DOMContentLoaded', () => {
    const songForm = document.getElementById('song-form');
    const songTitleInput = document.getElementById('song-title');
    const artistNameInput = document.getElementById('artist-name');
    const errorMessage = document.getElementById('error-message');
    const songList = document.getElementById('song-list');

    songForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = songTitleInput.value.trim();
        const artist = artistNameInput.value.trim();

        if (title === '' || artist === '') {
            errorMessage.classList.remove('hidden');
            return;
        }

        errorMessage.classList.add('hidden');

        const listItem = document.createElement('li');
        listItem.textContent = `${title} - ${artist}`;
        songList.appendChild(listItem);

        // Clear input fields
        songTitleInput.value = '';
        artistNameInput.value = '';
    });
});
