import PropTypes from 'prop-types';

const Create = ({ inputNote, handleChangeInputNote, handleSubmitNote, handleLimitInputTitle }) => {
  return (
    <div className="mt-[30px]">
      <h2 className="text-[28px] mb-[15px] font-semibold">Create Notes</h2>
      <form onSubmit={(event) => handleSubmitNote(event)}>
        <input
          type="text"
          placeholder="Write Title"
          className="shadow-input outline-none w-full px-4 py-2 placeholder:text-gray-placeholder rounded-[15px] border-2 border-black border-solid"
          onChange={(event) => handleChangeInputNote(event.target.value, 'title')}
          onKeyDown={(event) => handleLimitInputTitle(event)}
          value={inputNote.title}
        />
        <p className="mt-2">Sisa Karakter: {50 - Number(inputNote.title.length)}</p>
        <textarea
          name="body"
          id="body"
          value={inputNote.body}
          onChange={(event) => handleChangeInputNote(event.target.value, 'body')}
          placeholder="Write anything to here"
          className="resize-none h-72 w-full shadow-input mt-[25px] mb-[30px] px-4 py-2 border-2 border-black border-solid rounded-[15px]"
        ></textarea>
        <button
          type="submit"
          className="bg-black-btn text-white rounded-[20px] text-lg outline-none border-none px-10 py-3 text-center"
        >
          Create
        </button>
      </form>
    </div>
  );
};

Create.propTypes = {
  inputNote: PropTypes.object.isRequired,
  handleChangeInputNote: PropTypes.func.isRequired,
  handleSubmitNote: PropTypes.func.isRequired,
  handleLimitInputTitle: PropTypes.func.isRequired,
};

export default Create;
