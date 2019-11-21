let Navbar = {
    render: async () => {
        let view =`
            <nav id="main-navbar">
            <a id="logo" href="/#/">Sport Zone</a>
            <div id="cart-btn-container">
                <div id="cart-btn">
                    <span id="cart-icon">
                        <i class="fas fa-cart-plus"></i>
                    </span>
                    <div id="nr-cart-items">0</div>
                </div>
            </div>
            </nav>
            <nav id="sub-navbar">
                <ul>
                    <li><a class="sub-navbar-item" href="/#/trending">Trending</a></li>
                    <li><a class="sub-navbar-item" href="/#/mens">Mens</a></li>
                    <li><a class="sub-navbar-item" href="/#/ladies">Ladies</a></li>
                </ul>
            </nav>
        `
        return view
    },
    after_render: async () => {}
}

export default Navbar;