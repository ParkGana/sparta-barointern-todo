interface TodoFilterProps {
  items: { id: string; label: string }[];
  selected: string;
  handleChangeFilter: (value: string) => void;
}

const TodoFilter = ({ selected, items, handleChangeFilter }: TodoFilterProps) => {
  return (
    <div className="flex">
      {items.map((item) => (
        <p
          key={item.id}
          className={`flex-1 text-center text-lg font-bold p-3 cursor-pointer hover:text-gray-900 ${
            selected === item.id ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-300'
          }`}
          onClick={() => handleChangeFilter(item.id)}
        >
          {item.label}
        </p>
      ))}
    </div>
  );
};

export default TodoFilter;
