import React from "react";

export const CardResponsive = () => {
  return (
    <div className="container w-1/2 mx-auto p-8 bg-base-100">
      <div className="card lg:card-side bg-base-content text-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Responsive Cards are released!</h2>
          <p>Click the button to listen on the app now...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardResponsiveAlt = () => {
  return (
    <div className="card lg:card-side bg-base-100 text-base-content shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Responsive Cards are released!</h2>
        <p>Click the button to listen on the app now...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};
export const CardResponsiveAlt2 = () => {
  return (
    <div className="card lg:card-side bg-base-content/50 text-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Responsive Cards are released!</h2>
        <p>Click the button to listen on the app now...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};
export const CardImageOverlay = () => {
  return (
    <div className="card w-96 bg-primary shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/people" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export const CardWithBadge = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/people" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};
export const CardSideImage = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/200/280/arch" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};
