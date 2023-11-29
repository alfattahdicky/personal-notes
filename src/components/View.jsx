/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Tab from './Tab';
import { categorys } from '@/data/data';
import Card from './Card';
import PropTypes from 'prop-types';
import { sortingDate } from '@/utils/sorting';

const View = ({ notes, setNotes }) => {
  const [chooseCategory, setChooseCategory] = useState(categorys);
  const [archivedNote, setArchivedNote] = useState([]);
  const [tempNote, setTempNote] = useState([]);

  const handleChooseCategory = (selectedCategory) => {
    setChooseCategory((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        status: category.id === selectedCategory.id && !category.status,
      })),
    );

    setTempNote(notes);

    if (selectedCategory.title === 'Archived') {
      const updateNotes = tempNote.filter((note) => note.archived).sort(sortingDate);
      setNotes(updateNotes);
    } else {
      const updateNotes = tempNote.filter((note) => !note.archived).sort(sortingDate);
      setNotes(updateNotes);
    }
  };

  const handleArchiveNote = (id) => {
    const updatedNotes = notes.map((note) => ({
      ...note,
      archived: note.id === id ? !note.archived : note.archived,
    }));

    setArchivedNote((prev) => [...prev, ...updatedNotes.filter((note) => note.archived)]);
    setTempNote((prev) => [...prev, ...updatedNotes]);
    setNotes(updatedNotes.filter((note) => !note.archived));
  };

  const handleDeleteNote = (id) => {
    const deleteNote = notes.filter((note) => note.id !== id);
    setNotes(deleteNote);
  };
  const handleUnarchiveNote = (id) => {
    const updatedNotes = notes.map((note) => ({
      ...note,
      archived: note.id === id ? false : true,
    }));
    const filterNotesArchived = updatedNotes.filter((note) => note.archived);

    setArchivedNote(filterNotesArchived);
    setTempNote((prev) => [...prev, ...updatedNotes]);
    setNotes(filterNotesArchived);
  };

  return (
    <Tab categorys={chooseCategory} handleChooseCategory={handleChooseCategory}>
      {notes.length > 0 ? (
        notes.map((note) => (
          <Card
            title={note.title}
            body={note.body}
            key={note.id}
            date={note.createdAt}
            status={!note.archived}
            handleArchiveNote={() => handleArchiveNote(note.id)}
            handleDeleteNote={() => handleDeleteNote(note.id)}
            handleUnarchiveNote={() => handleUnarchiveNote(note.id)}
          />
        ))
      ) : (
        <div>Tidak ada catatan</div>
      )}
    </Tab>
  );
};

View.propTypes = {
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default View;
