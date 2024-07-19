import PropTypes from "prop-types";
export default function CommonNote({ note }) {
  return (
    <div className="py-8 bg-white">
      <div className="container text-[15px] flex flex-col gap-4">
        <p className="text-secondary-color text-[18px] font-bold">
          Common Note
        </p>
        <p className="text-text-secondary leading-[2]">{note}</p>
      </div>
    </div>
  );
}
CommonNote.propTypes = {
  note: PropTypes.string,
};
