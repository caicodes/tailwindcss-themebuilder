import Swap from "../components/Swap";
import ThemeShowcase from "../components/ThemeShowcase";
import Icons from "../components/Icons";
import { HeroImage, HeroImageSide, HeroLogin } from "../components/Heroes";
import Carousel from "../components/Carousel";
import Stats from "../components/Stats";
import Table from "../components/Table";
import {
  CardImageOverlay,
  CardResponsive,
  CardResponsiveAlt,
  CardResponsiveAlt2,
  CardSideImage,
  CardWithBadge,
} from "../components/Cards";
import { Toggles } from "../components/Toggles";
import Radios from "../components/Radios";
import Footer from "../components/Footer";
import {
  MockupCode,
  MockupCodeHighlightLine,
  MockupCodeLongLine,
  MockupCodeMultiline,
  MockupPhone,
  MockupPhonePrimary,
  MockupWindow,
  MockupWindow2,
} from "../components/Mockups";
import { FormExample } from "../components/Forms";
import DashboardApp from "../components/Dashboard";
import Charts from "../components/Charts";

export default function Home() {
  const weightList1 = [
    60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2,
  ];
  const weightList2 = [
    60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2,
  ];
  const weightList3 = [
    120.0, 90.2, 89.6, 67.3, 39.2, 63.6, 99.8, 105.3, 152.1, 179.3,
  ];
  const weightList4 = [
    48.0, 88.2, 15.1, 61.4, 22.9, 96.2, 95.8, 150.6, 59.6, 59.2,
  ];

  return (
    <>
      <HeroLogin />
      <HeroImage />
      <HeroImageSide />
      <Carousel />
      <Stats />
      <Table />

      <CardResponsive />
      <div className="flex gap-2 w-3/3 mx-auto py-20 bg-base-300">
        <CardResponsiveAlt />
        <CardResponsiveAlt2 />
      </div>

      <div className="flex gap-2 w-3/3 mx-auto py-20 bg-base-300">
        <FormExample />
      </div>

      <div className="grid grid-cols-4 p-40 place-items-center bg-base-300">
        <Toggles />
        <Toggles />
        <Toggles />
        <Radios />
      </div>

      <div className="grid grid-cols-4 gap-2 p-4">
        <div className="bg-primary-focus text-primary-content p-4">
          bg-primary-focus text-primary-content{" "}
        </div>
        <div className="bg-primary-content text-primary-focus p-4">
          bg-primary-content text-primary-focus
        </div>
        <div className="bg-accent text-accent-content p-4">yo</div>
        <div className="bg-accent-focus text-accent-content p-4">yo</div>
        <div className="bg-base-content text-base-100 p-4">
          <div className="text-base-100">text base 100</div>
          <div className="text-base-200">text base 200</div>
          <div className="text-base-300">text base 300</div>
          <div className="text-base-300/50">text base 300/50</div>
          <div className="text-base-300/30">text base 300/30</div>
          <div className="text-sm">base-100 sm</div>
          <div className="text-xs">base-100 xs</div>
        </div>
        <div className="bg-base-100 p-4">
          bg-base-100
          <div className="text-base-content">text-base-content</div>
          <div className="text-base-content/50">text-base-content/50</div>
          <div className="text-base-content/30">text-base-content/30</div>
          <div className="mt-4 mr-2 btn btn-primary">primary</div>
          <div className="mt-4 btn btn-secondary">secondary</div>
          <div className="mt-4 mr-2 btn btn-lg">lg default</div>
          <div className="mt-4 btn btn-lg btn-accent">lg accent</div>
        </div>
        <div className="bg-primary text-primary-content p-4">
          primary content on bg-primary
        </div>
        <div className="bg-primary-content text-primary p-4">
          primary-text on primary-content
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center relative gap-4 columns-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 bg-base-300 p-4">
            <div className="text-2xl">welcome</div>
          </div>

          {/* two on row 2 of grid */}
          <div className="overflow-hidden overflow-y-auto bg-base-200 h-[400px] w-[500px] rounded-lg rounded-b-md col-span-2">
            <div className="navbar items-center justify-between p-4 rounded-t-md bg-base-300 text-content text-xs  w-[500px] z-20">
              <div className="items-center grid-flow-col">
                <p>Template Configuration Viewer</p>
              </div>
              <div className="flex gap-2">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="scroll-area pt-16 ">
              <ThemeShowcase />

              <div className="h-40 w-[300px] bg-neutral text-center my-20 mx-auto">
                <Swap />
                <button className="btn btn-primary">hello daisy</button>
              </div>

              <div className="p-8 bg-primary">
                <Icons />
              </div>
              <div className="p-8 bg-accent">
                <Icons />
              </div>
              <div className="p-8 bg-secondary">
                <Icons />
              </div>
              <div className="p-8 bg-neutral">
                <Icons />
              </div>
            </div>
          </div>
          <div className="overflow-hidden overflow-y-auto bg-base-200 h-[400px] w-[500px] rounded-lg rounded-b-md col-span-2">
            <div className="navbar items-center p-4 rounded-t-md bg-base-300 text-content text-xs  w-[500px] z-20">
              <div className="items-center grid-flow-col">
                <p>Copyright © 2022 - All right reserved 736×414</p>
              </div>
              <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="scroll-area pt-16 ">
              <ThemeShowcase />

              <div className="h-40 w-[300px] bg-neutral text-center my-20 mx-auto">
                <Swap />
                <button className="btn btn-primary">hello daisy</button>
              </div>

              <div className="p-8 bg-primary">
                <Icons />
              </div>
              <div className="p-8 bg-accent">
                <Icons />
              </div>
              <div className="p-8 bg-secondary">
                <Icons />
              </div>
              <div className="p-8 bg-neutral">
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-4 p-40 bg-primary/20 text-accent-content">
        <CardImageOverlay />
        <CardImageOverlay />
        <CardImageOverlay />

        <CardWithBadge />
        <CardWithBadge />
        <CardWithBadge />

        <CardSideImage />
        <CardSideImage />
        <CardSideImage />
        <Icons />
        <Icons />
        <Icons />

        <MockupPhone />
        <MockupPhone />
        <MockupPhone />
      </div>

      <div className="grid grid-cols-3 place-items-center gap-4 p-40 bg-base-300">
        <MockupPhone />
        <MockupPhone />
        <MockupPhone />
        <MockupPhonePrimary />
        <MockupPhonePrimary />
        <MockupPhonePrimary />
        <MockupCode />
        <MockupCodeMultiline />
        <MockupCodeHighlightLine />
      </div>

      <div className="container mx-auto p-20 space-y-16">
        <MockupCodeLongLine />
        <MockupWindow />
        <MockupCodeLongLine />
        <MockupWindow2 />
        <MockupCodeLongLine />
      </div>

      {/* dasboard */}

      <div className="grid grid-cols-2">
        <DashboardApp weightList={weightList1} />
        <DashboardApp weightList={weightList2} />
        <DashboardApp weightList={weightList3} />
        <DashboardApp weightList={weightList4} />
      </div>

      <Charts />

      {/* footer section */}
      <Footer />
    </>
  );
}
