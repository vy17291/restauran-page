function loadHome(){
    const container = document.querySelector('#container');
    container.innerHTML = `
        <div class="description ">
            <h1> Hello ,Welcome To Bambino Coffee</h1> 
            <p> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>   
            <button class="btn__home">See more</button>    
        </div>
    `
}
export default loadHome;