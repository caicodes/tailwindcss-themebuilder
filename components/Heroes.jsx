import React from "react";

export const HeroLogin = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-4">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 w-3/4">
              Chuck Norris once roundhouse kicked someone so hard that his foot
              broke the speed of light, went back in time, and killed Amelia
              Earhart while she was flying over the Pacific Ocean Chuck Norris
              can slam a revolving door.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroImage = () => {
  return (
    <div>
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-70 bg-base-300 text-primary"></div>
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-6xl font-extrabold text-primary/60">
              Hello there
            </h1>
            <p className="mb-5 text-2xl font-light">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-wide btn-xl btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background-image: url(https://placeimg.com/1000/800/arch);
        }
      `}</style>
    </div>
  );
};

export const HeroImageSide = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
