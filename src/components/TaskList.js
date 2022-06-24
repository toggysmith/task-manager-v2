import { useState } from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import TaskCard from "./TaskCard";
import AddTaskCard from "./AddTaskCard";

export default function TaskList() {
  const shadowWeight = useColorModeValue("sm", "lg");
  const bgColor = useColorModeValue("gray.200", "gray.700");

  const [tasks, setTasks] = useState([]);

  const addTask = (title, description, isImportant, id) => {
    setTasks([
      {
        title,
        description,
        isImportant,
        id,
      },
      ...tasks,
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Center>
      <Box
        background={bgColor}
        borderRadius="lg"
        padding={4}
        shadow={shadowWeight}
        width={["100%", "100%", "50%", "50%", "50%"]}
      >
        <VStack align="stretch" spacing={5}>
          <Heading>Tasks</Heading>
          <AddTaskCard addTask={addTask} />
          {tasks.length !== 0 ? <Divider /> : null}
          <AnimatePresence>
            {tasks.map(({ title, description, isImportant, id }) => (
              <motion.div
                key={id}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TaskCard
                  title={title}
                  description={description}
                  isImportant={isImportant}
                  id={id}
                  removeTask={removeTask}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </VStack>
      </Box>
    </Center>
  );
}
