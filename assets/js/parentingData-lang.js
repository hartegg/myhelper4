// parenting data-lang pre code
document.addEventListener('DOMContentLoaded', function() {
    const parentElements = document.querySelectorAll('pre');
  
    if (parentElements.length > 1) {
  
        parentElements.forEach(function(parentElement) {
            const childElement = parentElement.querySelector('code');
            const dataLang = childElement.getAttribute('data-lang');
            parentElement.setAttribute('data-lang', dataLang);
        });
  
        console.log("više od jedan")
    
    }else{
        console.log("manje od jedan")
  
        const parentElement = document.querySelector('pre');
        const childElement = parentElement.querySelector('code');
        const dataValue = childElement.getAttribute('data-lang');
        parentElement.setAttribute('data-lang', dataValue);
    }
  
});