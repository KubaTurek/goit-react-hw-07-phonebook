import { useDispatch } from 'react-redux';
import { setFilter } from './../../Redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.filter}>
      <label>
        Search contacts by name
        <input
          className={css.input}
          type="search"
          placeholder="search contact"
          onChange={event => dispatch(setFilter(event.target.value))}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
