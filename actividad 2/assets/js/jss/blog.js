//Leer más blog peticion ajax

const post1 = document.querySelector('#post1');
const post2 = document.querySelector('#post2');
const post3 = document.querySelector('#post3');


post1.children[3].addEventListener('click',() => ajax('http://localhost/APM-PaginaWeb/blog/blog1.html', 380, post1))
post2.children[3].addEventListener('click',() => ajax('http://localhost/APM-PaginaWeb/blog/blog2.html', 283, post2))
post3.children[3].addEventListener('click',() => ajax('http://localhost/APM-PaginaWeb/blog/blog3.html', 429, post3))


function ajax (link, slice, post) {
        let p = post.children[2]
        let btn = post.children[3]

        const http = new XMLHttpRequest();
        const url = link;
    
        http.onreadystatechange =  function () {
            if (this.readyState == 4 && this.status == 200){ 
                if(btn.textContent == 'Leer Más') {
                    p.innerHTML = this.responseText
                    btn.innerHTML = 'Leer Menos'
                } else {
                    p.innerHTML = this.responseText.slice(0,slice)
                    btn.innerHTML = 'Leer Más'
                }   
            }
        }
        http.open('GET', url);
        http.send(null);
   
}