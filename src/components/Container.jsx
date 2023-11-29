import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="max-w-7xl m-auto py-8">
      <h1 className="text-center text-5xl font-bold">Personal Notes</h1>
      <div className="flex max-lg:flex-col mt-7 gap-5 max-md:px-3">{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
