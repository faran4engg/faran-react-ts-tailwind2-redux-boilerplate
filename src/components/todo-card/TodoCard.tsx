// @ts-nocheck
const TodoCard = ({ isLoading, todos }) => (
  <div className="flex items-center">
    {console.log({ isLoading, todos })}
    <span>check console</span>
  </div>
);

export default TodoCard;
