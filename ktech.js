
        window.addEventListener('scroll', function () {
            let header = document.querySelector('nav');
            let windowPosition = window.scrollY > 150;
            header.classList.toggle('scrolling-active', windowPosition);
            })
   
       
       
        var navlinks = document.getElementById("navlinks");
        function showmenu(){
            navlinks.style.right ="0";
        }
        function hidemenu(){
            navlinks.style.right ="-700px";
        }
      