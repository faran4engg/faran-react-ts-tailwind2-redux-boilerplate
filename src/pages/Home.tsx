import { TodoCard } from '@domains/Todos/components/todo-card';
import { SectionTitle, PageTitle } from '@domains/Common/components/typography';
import { TodosContainer } from '@domains/Todos/containers';

const Home = () => (
  <>
    <PageTitle>Home Page Title</PageTitle>
    <SectionTitle>With Todos Render Prop</SectionTitle>
    <TodosContainer>{(props) => <TodoCard {...props} />}</TodosContainer>
  </>
);

export default Home;
