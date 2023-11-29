import PropTypes from 'prop-types';

const Card = ({ title, body, date, status, handleArchiveNote, handleDeleteNote, handleUnarchiveNote }) => {
  return (
    <div className="border-2 border-black border-solid rounded-[20px] w-[286px] max-sm:w-full max-md:w-[286px] shadow-card px-4 pt-[20px] pb-[20px] flex flex-col justify-between">
      <div>
        <div className="font-medium text-xl">{title}</div>
        <div className="font-normal text-base mt-[10px]">{body}</div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <p>Date: {date}</p>
        <div className="flex gap-2">
          <button className="border-none outline-none" onClick={handleDeleteNote}>
            <div className="bg-red-500 hover:bg-red-300 rounded-[5px] flex items-center justify-center p-2">
              <img src="/trash.png" alt="Trash" width="36" height="36" className="block w-full" />
            </div>
          </button>
          {status ? (
            <button className="border-none outline-none" onClick={handleArchiveNote}>
              <div className="bg-orange-400 hover:bg-orange-300 rounded-[5px] flex items-center justify-center p-2">
                <img src="/archive.png" alt="Trash" width="36" height="36" className="block w-full" />
              </div>
            </button>
          ) : (
            <button className="border-none outline-none" onClick={handleUnarchiveNote}>
              <div className="bg-orange-400 hover:bg-orange-300 rounded-[5px] flex items-center justify-center p-2">
                <img src="/unarchive.png" alt="Trash" width="36" height="36" className="block w-full" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleUnarchiveNote: PropTypes.func.isRequired,
};

export default Card;
