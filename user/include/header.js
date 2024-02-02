let header = `
<nav class="navbar navbar-expand-md navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img class="img-fluid logo" src="./images/logo.png" alt="logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarsExampleDefault">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Trang chủ <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./html/products.html">Sản phẩm</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Giới thiệu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./html/contact.html">Liên hệ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Chính sách</a>
                        </li>
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                        <div class="input-group input-group-sm">
                            <input type="text" class="form-control input-custom" placeholder="Từ khóa...">
                            <div class="input-group-append">
                                <button type="button" class="btn btn-info btn-number btn-custom">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    <!-- user -->
                    <div class="widgets-wrap float-md-right ml-4">
                        <div class="widget-header  mr-3">
                            <a href="./html/cart.html" class="icon icon-sm rounded-circle border"><i
                                    class="fa fa-shopping-cart"></i></a>
                            <span class="badge badge-pill badge-danger notify">0</span>
                        </div>
                        <div class="widget-header icontext">
                            <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                            <div class="text">
                                <span class="text-white">Xin chào!</span>
                                <div>
                                    <a class="text-info" href="/html/login.html">Đăng nhập</a> |
                                    <a class="text-info" href="/html/signup.html"> Đăng ký</a>
                                </div>
                            </div>
                        </div>

                    </div> <!-- widgets-wrap.// -->

                </div>

            </div>

        </nav> `;
        document.getElementById('header').innerHTML = header;
