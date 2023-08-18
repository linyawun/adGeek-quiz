import { RootRoute, Route } from '@tanstack/react-router';
import StartPage from '../components/StartPage';
import Question from '../components/Question';
import Result from '../components/Result';
import Answer from '../components/Answer';

let rootRoute = new RootRoute();
const startRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: StartPage,
});
const questionRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/question',
  component: Question,
});
const resultRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/result',
  component: Result,
});
const answerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/answer',
  component: Answer,
});

const routeTree = rootRoute.addChildren([
  startRoute,
  questionRoute,
  resultRoute,
  answerRoute,
]);

export default routeTree;
