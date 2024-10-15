package com.taskmanagementsystem.alisina;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final TaskRepository taskRepository;

    public DataInitializer(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (taskRepository.count() == 0) {
            // Add test tasks
            Task task1 = new Task();
            task1.setTitle("Finish Spring Boot project");
            task1.setDescription("Complete the task management project by the weekend.");
            task1.setCompleted(false);

            Task task2 = new Task();
            task2.setTitle("Grocery shopping");
            task2.setDescription("Buy groceries for the week.");
            task2.setCompleted(false);

            Task task3 = new Task();
            task3.setTitle("Clean the house");
            task3.setDescription("Complete cleaning before guests arrive.");
            task3.setCompleted(true);

            taskRepository.saveAll(Arrays.asList(task1, task2, task3));
            System.out.println("Test data added!");
        }
    }
}