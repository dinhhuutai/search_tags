var tagUl = document.querySelector('.input-tag ul');
var tagInput = document.querySelector('.input-tag input');
var removeAll = document.querySelector('.footer-tag button');
var iconCloses = document.querySelectorAll('.tag i');


var tagContents = [];
tagInput.onchange = function () {
    if (!tagContents.includes(tagInput.value)) {

        tagContents.push(tagInput.value);
        var content = tagContents.reduce(function(value, tagContent) {
            return value + `<li>
                                <div class="tag">
                                    <span>${tagContent}</span>
                                    <i class="fas fa-times"></i>
                                </div>
                            </li>
                        `
        }, "")
        tagUl.innerHTML = content;


        iconCloses = document.querySelectorAll('.tag i');
        iconCloses.forEach(iconClose => {
            iconClose.onclick = (e) => {
                var parent = e.target;
                while(parent.parentElement){
                    if(parent.parentElement.matches('li')){
                        parent = parent.parentElement;
                        break;
                    }
                    parent = parent.parentElement;
                }
                var valueTag = parent.querySelector('span').innerText;
                tagContents.splice(tagContents.indexOf(`${valueTag}`), 1);
                
                parent.remove();
            }
        })
        tagInput.value = "";
    }
    else {
        tagInput.value = "";
    }
}

removeAll.onclick = function () {
    tagUl.innerHTML = "";
    tagContents = [];
}