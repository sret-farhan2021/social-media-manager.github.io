let scheduledPosts = [];

document.addEventListener('DOMContentLoaded', function() {
    displayScheduledPosts();
});

const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('post-content').value;
    const postTime = document.getElementById('post-time').value;


    const newPost = {
        content: postContent,
        time: postTime
    };

    scheduledPosts.push(newPost);

    document.getElementById('post-content').value = '';
    document.getElementById('post-time').value = '';

    displayScheduledPosts();
});

function displayScheduledPosts() {
    const scheduledPostsContainer = document.getElementById('scheduled-posts');
    scheduledPostsContainer.innerHTML = '';

    scheduledPosts.forEach((post, index) => {
        const card = document.createElement('div');
        card.classList.add('scheduled-post');

        const content = document.createElement('p');
        content.textContent = `content: ${post.content}`;
        card.appendChild(content);

        const time = document.createElement('p');
        time.textContent = `scheduled time: ${post.time}`;
        card.appendChild(time);

        scheduledPostsContainer.appendChild(card);
    });
}
