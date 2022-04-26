


let progressDiv  = document.querySelector('.progress-div');

let progressBars = document.querySelectorAll('.progress-bar');

let counterDiv   = document.querySelector('.counter-div');

let counterTags  = document.querySelectorAll('.counter-div h3');

// Scroll Out init

ScrollOut({

    targets: ".progress-div,.counter-div"

 });


 window.addEventListener('scroll',function(){

     if(progressDiv.dataset.scroll == 'in')
     {
        progressBars.forEach(el => {

            let valueNow = el.getAttribute('aria-valuenow');

            el.style.width = valueNow + "%";

            let counterSpan = el.parentElement.parentElement.querySelector('.progress-value span');
            
            let timer = setInterval(() => 
            {
                if(Number(counterSpan.textContent) < valueNow)
                {
                    counterSpan.textContent = Number(counterSpan.textContent) + 1;
                }
                else
                {
                    this.clearInterval(timer);
                }
            }, 500);

        })
     }
     else
     {
        progressBars.forEach(el => { 

            el.style.width = 0 + "%";

            el.parentElement.parentElement.querySelector('.progress-value span').textContent = 0;
        })
        
     }

     // counter

     if(counterDiv.dataset.scroll == 'in')
     {
        counterTags.forEach(el => {

            let time = setInterval(() => 
            {
                if(Number(el.innerText) < el.dataset.counter)
                {
                    el.innerText = Number(el.innerText) + 1;
                }
                else
                {
                    this.clearInterval(time)
                }
            }, 500);
        })
     }
     else
     {
         counterTags.forEach(el => {

            el.innerText = 0;

         })
     }
 })


 // 

 let filterListItems = document.querySelectorAll('.list-group li');

 let filterItems = document.querySelectorAll('.filtered-items > a');

 filterListItems.forEach(list => {

    list.addEventListener('click',() => 
    {
        document.querySelector('.list-group li.active').classList.remove('active');

        list.classList.add('active');

        let filteredValue = list.dataset.filter;

        filterItems.forEach(item => {

            if(item.classList.contains(filteredValue))
            {
                item.classList.remove('hidden');
                item.classList.add('active');
            }
            else
            {
                item.classList.remove('active');
                item.classList.add('hidden');
            }

        })
    })
     
 })

 // light Gallery

 lightGallery(document.getElementById('lightgallery'), {

});

// aos init

AOS.init();
