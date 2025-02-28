const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix UI bugs",
        taskDescription: "Resolve layout issues on the dashboard",
        taskDate: "2025-02-28",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Revise the API documentation",
        taskDate: "2025-03-01",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design New Landing Page",
        taskDescription: "Create a modern UI/UX for the homepage",
        taskDate: "2025-03-02",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Mobile Responsiveness",
        taskDescription: "Ensure all pages work well on mobile",
        taskDate: "2025-02-25",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backend Optimization",
        taskDescription: "Improve database query performance",
        taskDate: "2025-03-03",
        category: "Backend",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Conduct a security review of the application",
        taskDate: "2025-02-27",
        category: "Security",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement OAuth",
        taskDescription: "Integrate Google and Facebook login",
        taskDate: "2025-03-05",
        category: "Authentication",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Automate deployments using GitHub Actions",
        taskDate: "2025-03-06",
        category: "DevOps",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees);
  console.log(admin);
};
