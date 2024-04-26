

const Banner = () => {
    return (
       <div className="container mx-auto ">
         <div className="carousel w-full h-[450px] rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
        <img src="https://media2.thrillophilia.com/images/photos/000/041/109/original/1584271952_shutterstock_749994316.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://images.ctfassets.net/wv75stsetqy3/6g6JQjTt7hHUtBfSzpLmha/64f70e559e3fb7ad4b091cb45454aea8/Chiang_Mai__Thailand.jpg?w=1800&h=600&q=60&fit=fill&fm=webp" alt=""  className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src="https://www.relaxgetaways.com/uploads/img/banner-for-best-place-to-visit-top-5-tour-destination-in-the-world.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://c4.wallpaperflare.com/wallpaper/12/209/303/best-destinations-in-the-world-wallpaper-preview.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Banner;