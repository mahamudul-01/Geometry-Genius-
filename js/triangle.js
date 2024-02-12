function calculateTriangleArea(){
    const baseInput=document.getElementById('input-base')
    const getBaseInput=baseInput.value;
    const base=parseFloat(getBaseInput);
    

    const heightInput=document.getElementById('input-height');
    const getHeightInput=heightInput.value;
    const height=parseFloat(getHeightInput);
    const area=0.5*height*base;
    
    const areaShow=document.getElementById('area');
    areaShow.innerText=area;
}