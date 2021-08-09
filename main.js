const buttons = [...document.querySelectorAll('button')];
const result = document.querySelector('.result');

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.textContent){
               case '=': result.textContent = eval(result.textContent);
                break;
            case 'C':
                result.textContent = '';
                break;
            case 'CE':
                if (result.textContent){
                   result.textContent = result.textContent.slice(0, -1);
                }
                break;
            default: result.textContent += e.target.textContent;
        }
    });
});
