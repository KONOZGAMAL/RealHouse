import PropTypes from 'prop-types';

export default function PropertyMap({Src}) {
  return (
        <div className="py-8 bg-bg-third">
        <div className="container flex flex-col gap-2 my-5">
          <p className="text-secondary-color text-[18px] font-bold mb-3">
            Property on Map
          </p>
          <iframe
            width="100%"
            height="600"
            src={Src}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <br />
        </div>
      </div>
  )
}
PropertyMap.propTypes = {
    Src:PropTypes.string
  };