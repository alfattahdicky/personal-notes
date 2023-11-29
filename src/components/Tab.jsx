import PropTypes from 'prop-types';

const Tab = ({ children, categorys, handleChooseCategory }) => {
  return (
    <div className="max-md:w-full max-xl:w-[70%] max-lg:mx-auto">
      <div className="flex gap-3 font-medium text-xl">
        {categorys.map((category) => (
          <div key={category.id} onClick={() => handleChooseCategory(category)} className="cursor-pointer relative">
            <p className="text-center">{category.title}</p>
            {category.status ? <div className="bg-black w-[100%] h-1 mx-auto absolute left-0"></div> : null}
          </div>
        ))}
      </div>
      <div className="mt-[20px] grid grid-cols-3 max-sm:grid-cols-1 max-xl:grid-cols-2 gap-x-14 gap-y-5">
        {children}
      </div>
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  categorys: PropTypes.array.isRequired,
  handleChooseCategory: PropTypes.func.isRequired,
};

export default Tab;
