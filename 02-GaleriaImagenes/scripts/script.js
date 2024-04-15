document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('myModal').style.display = "block";
        document.getElementById('img01').src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
});
