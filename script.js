const accountsData = [
    { username: 'user1', profilePic: 'https://via.placeholder.com/150', followers: 123 },
    { username: 'user2', profilePic: 'https://via.placeholder.com/150', followers: 123 },
    { username: 'user3', profilePic: 'https://via.placeholder.com/150', followers: 123 }
];

document.addEventListener('DOMContentLoaded', function() {
    displayAccounts(accountsData);
});

function displayAccounts(accounts) {
    const accountsGrid = document.getElementById('accounts-grid');

    accounts.forEach(account => {
        const card = createAccountCard(account); 
        accountsGrid.appendChild(card);
    });
}

function createAccountCard(account) {
    const card = document.createElement('div');
    card.classList.add('account-card');

    const profilePic = document.createElement('img');
    profilePic.src = account.profilePic;
    card.appendChild(profilePic);

    const username = document.createElement('p');
    username.textContent = `username: ${account.username}`;
    card.appendChild(username);

    const followers = document.createElement('p');
    followers.textContent = `followers: ${account.followers}`;
    card.appendChild(followers);

    return card;
}

const addAccountButton = document.getElementById('add-account');
addAccountButton.addEventListener('click', function() {
    const newAccount = {
        username: 'newuser',
        profilePic: 'https://via.placeholder.com/150',
        followers: 500
    };
    const newCard = createAccountCard(newAccount);
    const accountsGrid = document.getElementById('accounts-grid');
    accountsGrid.appendChild(newCard);
});

