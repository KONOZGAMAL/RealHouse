export default function FeaturesSection() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full text-center
       p-[60px] pb-10 container z-99"
    >
      <p className="text-secondary-color text-[17px] p-0 m-0 font-bold">
        Amazing
      </p>
      <p className="text-[38px] p-0 m-0">Features</p>
      <p className="text-text-secondary text-[17px] p-0 m-0">
        Test featured from elementor.
      </p>

      <div className="flex flex-wrap w-full mt-10 gap-5 gap-y-8">
        <div className="w-80 items-center justify-center grow flex flex-col gap-2">
          <img
            loading="lazy"
            src="./assets/setting.webp"
            width="64px"
            height="64px"
            alt="setting"
          />
          <p className="text-[18px] font-bold">Live Customizer</p>
          <p className="text-text-secondary text-[15px] leading-[2]">
            To help you configure and customize stuff around your website
            without going into code. You can customize the price format to any
            currency in the world. You can customize the URL slugs to your
            required ones.
          </p>
        </div>
        <div className="w-80 items-center justify-center grow flex flex-col gap-2">
          <img
            loading="lazy"
            src="./assets/search.webp"
            width="64px"
            height="64px"
            alt="search"
          />
          <p className="text-[18px] font-bold">Advance Search</p>
          <p className="text-text-secondary text-[15px] leading-[2]">
            Real Homes includes advanced properties search feature that is
            powerful and fully customizable to fulfill various needs. You can
            select which fields you want to display and what data will be
            displayed in those fields.
          </p>
        </div>
        <div className="w-80 items-center justify-center grow flex flex-col gap-2">
          <img
            loading="lazy"
            src="./assets/location.webp"
            width="64px"
            height="64px"
            alt="location"
          />
          <p className="text-[18px] font-bold">Google & OpenStreet Maps</p>
          <p className="text-text-secondary text-[15px] leading-[2]">
            Real Homes includes Google Maps API integration that enables you to
            display Google map with properties markers on search results page,
            properties display pages, property detail page, home page and
            taxonomy archive pages.
          </p>
        </div>
        <div className="w-80 items-center justify-center grow flex flex-col gap-2">
          <img
            loading="lazy"
            src="./assets/user.webp"
            width="64px"
            height="64px"
            alt="user"
          />
          <p className="text-[18px] font-bold">Member Support</p>
          <p className="text-text-secondary text-[15px] leading-[2]">
            You can provide user registration, login and forgot password
            features on your site to let users access member only features.
            Social login feature allow you to integrate any social network with
            your website for user login and registration.
          </p>
        </div>
        <div className="w-80 items-center justify-center grow flex flex-col gap-2">
          <img
            loading="lazy"
            src="./assets/download.jpg"
            width="64px"
            height="64px"
            alt="download icon"
          />
          <p className="text-[18px] font-bold">Front End Property Submit</p>
          <p className="text-text-secondary text-[15px] leading-[2]">
            Real Homes provides front end property submit template and related
            configurations. So you can restrict certain level of users from
            accessing administrator dashboard and provide them an interface on
            front end to submit properties.
          </p>
        </div>
        <div className="w-80 items-center justify-center grow flex flex-col gap-2">
        <img
          loading="lazy"
          src="./assets/eyes.webp"
          width="64px"
          height="64px"
          alt="eyes"
        />
        <p className="text-[18px] font-bold">Design Variations</p>
        <p className="text-text-secondary text-[15px] leading-[2]">
          Real Homes theme includes two major design variations. You can use
          the classic or modern look based on your choice.
        </p>
      </div>
      </div>
    </div>
  );
}
