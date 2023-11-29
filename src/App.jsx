import Container from '@/components/Container';
import Create from '@/components/Create';
import Search from '@/components/Search';
import { note } from '@/data/data';
import { useState } from 'react';
import View from './components/View';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [inputNote, setInputNote] = useState(note);

  const handleChangeInputNote = (value, key) => {
    setInputNote((prev) => ({
      ...prev,
      id: +new Date(),
      createdAt: new Date().toISOString(),
      [key]: value,
    }));
  };

  const handleLimitInputTitle = (event) => {
    if (event.target.value.length >= 50 && event.keyCode !== 8) {
      event.preventDefault();
    }
  };

  const handleChangeSearchInput = (event) => {
    setSearchInput(event);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchInput.toLowerCase().trim()));
    setFilteredNotes(filteredNotes);
  };

  const handleSubmitNote = (event) => {
    event.preventDefault();
    handleChangeInputNote('', 'title');
    handleChangeInputNote('', 'body');
    setNotes((prev) => [...prev, inputNote]);
  };

  return (
    <>
      <Container>
        <div className="w-[35%] max-md:w-full max-xl:w-[50%] max-xl:mx-auto">
          <Search searchInput={searchInput} handleChangeSearchInput={handleChangeSearchInput} />
          <Create
            inputNote={inputNote}
            handleChangeInputNote={handleChangeInputNote}
            handleSubmitNote={handleSubmitNote}
            handleLimitInputTitle={handleLimitInputTitle}
          />
        </div>
        <div className="w-[75%] max-xl:w-full">
          {searchInput.length < 1 ? (
            <View notes={notes} setNotes={setNotes} />
          ) : (
            <View notes={filteredNotes} setNotes={setNotes} />
          )}
        </div>
      </Container>
    </>
  );
};

export default App;
