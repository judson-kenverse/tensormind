import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-white text-6xl flex items-center mx-auto mb-10">
            404 - Page Not Found
          </h2>
          <p className="mb-12">The page you're looking for does not exist.</p>
          <Link to="/" className="btn-white-rounded  ">
            Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
