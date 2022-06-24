import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { VStack } from "@chakra-ui/react";

export default function App() {
  return (
    <VStack align="stretch" spacing={20} marginBottom={100}>
      <Navbar />
      <TaskList />
    </VStack>
  );
}
