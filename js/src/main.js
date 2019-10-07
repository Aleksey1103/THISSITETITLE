class CustomActions {
    
  toggleClass(elementClass, toggledClassName , windowSize) {
    
    const toggle = function() {
  
        let currentWindowSize = window.innerWidth,
        elems = document.getElementsByClassName(elementClass);
    
        if (currentWindowSize <= windowSize) {
            for ( let i = 0; i < elems.length; i++ ) {
                elems[i].className += ' ' + toggledClassName;
            }     
        } else {
            for ( let i = 0; i < elems.length; i++ ) {
                let str = elems[i].className,
                    pos = str.indexOf(toggledClassName);
  
                    str = str.slice(0, pos);
                    if (~pos) elems[i].className = str;
            }
        }
    };
  
    window.addEventListener('resize', toggle);
    toggle();
  
  }


  
  toggleVisibility(elementClassName, toggler) {
    
    const toggleTo =  function() {
        let pageOffset = window.pageYOffset,
            elements = document.getElementsByClassName(elementClassName);
  
        for ( let i = 0; i < elements.length; i++ ) {
            elements[i].style.display = (pageOffset > toggler) ? "block" : "none";
        }
  
    };
  
    document.addEventListener("scroll", toggleTo);
  }



  smoothScroll(linksClassName, time, offset = 0) {
  
    const moveTo = function(event) {
        
        event.preventDefault();
  
        let id = event.target.getAttribute('href').slice(1);                  
        
        if ( id != '' && ( /\S/.test( id )) ) {
  
            let startPos =  window.pageYOffset,                
                endPos = document.getElementById(id).offsetTop,                
                distance = endPos - startPos + offset,
                maxDistance = document.body.clientHeight - window.innerHeight,
                step = 0;
  
            distance = ( distance < maxDistance ) ? distance : maxDistance;
  
            const stepTo = function() {
                if ( step == 100 ) {                        
                    clearInterval(timeId);
  
                } else {
                    startPos += distance / 100;
                    window.scrollTo(0, startPos);
                    step++;
                }                    
            };
  
            let timeId = setInterval( stepTo, (time / 100) );
        }
    };
  
    let navLincks = document.getElementsByClassName(linksClassName);
  
    for ( let i = 0; i < navLincks.length; i++ ) {
        navLincks[i].addEventListener('click', moveTo);
    }
  }
}


// togglePosition(togglingElemClass, triggerId, offset) {

//     let elems = document.getElementsByClassName(togglingElemClass);

//     const toggleTo = function() {
//         let currentOffset = window.pageYOffset,
//             startPos = document.getElementById(triggerId).offsetTop - offset;

//         if (currentOffset >= startPos) {
//             for ( let i = 0; i < elems.length; i++ ) {
//                 elems[i].style.position = "fixed";
//             }
//         } else {
//             for ( let i = 0; i < elems.length; i++ ) {
//                 elems[i].style.position = "absolute";
//             }
//         }
//     };

//     document.addEventListener("scroll", toggleTo);
// }


