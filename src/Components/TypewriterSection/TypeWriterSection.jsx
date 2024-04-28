import { Link } from "react-router-dom";


const TypeWriterSection = () => {
    
    
    // console.log(text)
    return (
        <div className='mx-auto container mb-36'>
           <div className="card card-side flex lg:flex-row flex-col w-2/3 mx-auto bg-base-200 shadow-xl">
  <figure><img className="" src="https://img.pikbest.com/png-images/simple-cartoon-line-painting-online-shopping-discount-discount-icon_6094890.png!sw800" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl font-bold font-acme ">Get instant discounts</h2>
    <p>Simply sign into your Travel Trip account and look for the blue Genius logo to save</p>
    <p>Ready for your next adventure? We're offering amazing discounts on our travel packages, making it easier than ever to explore the world. Check out our current promotions and start planning your dream trip today!</p>
    <div className="card-actions ">
      <Link to={'/login'}><button className="btn btn-primary">Sign in</button></Link>
      <Link to={'/register'}><button className="btn btn-primary">Register</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TypeWriterSection;