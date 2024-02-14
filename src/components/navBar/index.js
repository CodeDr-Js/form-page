import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <nav className="bg-blue-500 p-4 sticky top-0">
      <div className="container">
        <div className="flex">
          <div className="flex">
            <h1 className="text-white font-bold text-xl hover:font-mono ">
              FORM PAGE
            </h1>
          </div>
          <div className=" md:flex md:flex-grow flex-row flex space-x-4 items-center justify-end">
            <div>
              <Link
                to="/register"
                className="text-white transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register
              </Link>
            </div>

            <div>
              <Link
                to="/about"
                className="text-white transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                to="/service"
                className="text-white transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const RegisterNav = () => {
  return (
    <nav className="bg-blue-500 p-4 sticky top-0">
      <div className="container">
        <div className="flex">
          <div className="flex">
            <h1 className="text-white font-bold text-xl hover:font-mono ">
              FORM PAGE
            </h1>
          </div>
          <div className=" md:flex md:flex-grow flex-row flex space-x-4 items-center justify-end">
            <div>
              <Link
                to="/"
                className="text-white transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Login
              </Link>
            </div>

            <div>
              <Link
                to="/about"
                className="text-white transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                to="/service"
                className="text-white transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default { LoginNav, RegisterNav };
