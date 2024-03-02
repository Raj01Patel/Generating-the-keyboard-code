window.addEventListener('keypress',(e)=>{
    const displayId=document.getElementById('display-id');
    displayId.innerHTML = `You pressed "${e.key}" which has ascii value of "${e.keyCode}"`
})