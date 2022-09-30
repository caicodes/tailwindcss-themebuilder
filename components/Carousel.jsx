import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <div className="carousel carousel-center p-12 space-x-12 bg-neutral  w-screen">
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/animals"
            className="rounded"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/people"
            className="rounded-2xl"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/arch"
            className="rounded-2xl"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/tech"
            className="rounded-2xl"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/people"
            className="rounded-2xl"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/arch"
            className="rounded-2xl"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/nature"
            className="rounded-2xl"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/animals"
            className="rounded-2xl"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://placeimg.com/640/480/tech"
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="https://placeimg.com/1100/400/people"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="https://placeimg.com/1100/400/animals"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src="https://placeimg.com/1100/400/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src="https://placeimg.com/1100/400/tech" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
