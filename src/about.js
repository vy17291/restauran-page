function loadAbout(){
    const container = document.querySelector('#container');
    container.innerHTML = `
        <div class="description ">
            <div class="mail">
            <span class="mail__text">Stay on the saddle!</span>
            <form action="javascript:void(0)" class="mail__form" autocomplete="off">
            <input type="email" name="email" class="mail__form-inp" placeholder="enter your email..." autofocus>
            <button class="mail__form-btn">Go</button>
            </form>
        </div>
    `
}
export default loadAbout;