import { TodoCard } from '@components/todo-card';
import { SectionTitle, PageTitle } from '@components/typography';
import TodosContainer from '@containers/todos/TodosContainer';

const Home = () => (
  <>
    <PageTitle>Home Page Title</PageTitle>
    <SectionTitle>With Todos Render Prop</SectionTitle>
    <TodosContainer>{(props) => <TodoCard {...props} />}</TodosContainer>
  </>
);

export default Home;
