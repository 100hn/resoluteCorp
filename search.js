 function search() {
        let filter = document.getElementById('find').value.toUpperCase();
        let item = document.querySelectorAll('.section');
        let l = document.getElementsByTagName('h2');
        for (var i = 0; i <= l.length; i++) {
            let a = item[i].getElementsByTagName('h2')[0];
            let value = a.innerHTML || a.innerText || a.textContent;
            if (value.toUpperCase().indexOf(filter) > -1) {
                item[i].style.display = "";
            }
            else {
                item[i].style.display = "none";
            }
        }
    }
    function searchItem() {
        var searchInput = document.querySelector('#find');
        if (searchInput.style.display === "block") {
            searchInput.style.display = "none";
        } else {
            searchInput.style.display = "block";
            searchInput.focus(); // Focus on the input field when it's displayed
        }
    }
