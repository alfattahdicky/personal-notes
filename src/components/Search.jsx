import PropTypes from 'prop-types';

const Search = ({ searchInput, handleChangeSearchInput }) => {
  return (
    <div>
      <h2 className="text-[28px] mb-[15px] font-semibold">Search Notes</h2>
      <div className="flex gap-1 border-2 border-black border-solid rounded-[15px] p-2 shadow-input">
        <img src="/icon-search.png" alt="search" width="24" height="24" />
        <input
          type="text"
          placeholder="Type Here"
          className="text-base placeholder:text-gray-500 outline-none border-none w-full"
          value={searchInput}
          onChange={(event) => handleChangeSearchInput(event.target.value)}
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleChangeSearchInput: PropTypes.func.isRequired,
};

export default Search;
