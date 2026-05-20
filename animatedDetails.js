// const detailsElementList = document.getElementsByTagName("details");
const detailsElementList = Array.from(document.getElementsByTagName("details"));

detailsElementList.forEach((detailsElement) => {

    let RO = new ResizeObserver(entries => {
        entries.forEach(entry => {
           if(detailsElement.dataset.width){
               const width = parseInt(detailsElement.dataset.width, 10);
               if(width !== parseInt(entry.borderBoxSize[0].inlineSize.toString(), 10)){
                   let nowOpen = detailsElement.open;
                   detailsElement.removeAttribute("style");
                   setHeight(detailsElement);
                   setHeight(detailsElement, true);
                   detailsElement.open = nowOpen;
                   detailsElement.classList.add("animateTransition");
               }
           } else {
               let nowOpen = detailsElement.open;
               detailsElement.removeAttribute("style");
               setHeight(detailsElement);
               setHeight(detailsElement, true);
               detailsElement.open = nowOpen;
               detailsElement.classList.add("animateTransition");
           }
        });
    });
    RO.observe(detailsElement);
});

function setHeight(detailsElement, isOpen = false){
    detailsElement.open = isOpen;
    const rect = detailsElement.getBoundingClientRect();
    detailsElement.dataset.width = rect.width.toString();
    detailsElement.style.setProperty(isOpen ? `--expanded` : `--collapsed`, `${rect.height}px`);
}