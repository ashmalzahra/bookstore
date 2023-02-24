/* eslint-disable react/prop-types */

const Book = (props) => {
  const { title, author } = props;

  return (
    <li>
      &quot;
      { title }
      &quot; by
      { author }
      <button type="button">Remove</button>
    </li>
  );
};

export default Book;
