

const ListedCard = ({addedSpot}) => {

    return (
        <div className="card card-side lg:w-1/3 w-2/3 bg-base-100 shadow-xl mx-auto container flex lg:flex-row md:flex-row flex-col">
        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default ListedCard;