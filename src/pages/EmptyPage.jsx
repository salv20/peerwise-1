import { Link } from "react-router-dom";

const EmptyPage = () => {
  return (
    <div>
      <h1>site is empty</h1>
      <p>
        please return to <Link to="/">home page</Link>
      </p>
    </div>
  );
};

export default EmptyPage;
