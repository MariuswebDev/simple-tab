function showTab(num) {
    // Hide all
    document.querySelectorAll('.content').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('button').forEach(el => el.classList.remove('active'));

    // Show selected
    document.getElementById('content' + num).classList.add('show');
    event.target.classList.add('active');
}