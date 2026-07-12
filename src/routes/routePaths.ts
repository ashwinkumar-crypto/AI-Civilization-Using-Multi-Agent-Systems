export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",

  RESEARCHER: {
    ROOT: "/researcher",
    OVERVIEW: "/researcher/overview",
    SIMULATION: "/researcher/simulation",
    AGENTS: "/researcher/agents",
    COMMUNICATION: "/researcher/communication",
    RESOURCES: "/researcher/resources",
    EVENTS: "/researcher/events",
    ANALYTICS: "/researcher/analytics",
    NOTIFICATIONS: "/researcher/notifications",
    PROFILE: "/researcher/profile",
    SETTINGS: "/researcher/settings",
  },

  ADMIN: {
    ROOT: "/admin",
    DASHBOARD: "/admin/dashboard",
    SIMULATION_CONTROL: "/admin/simulation-control",
    AGENTS: "/admin/agents",
    ENVIRONMENT: "/admin/environment",
    TASKS: "/admin/tasks",
    EVENTS: "/admin/events",
    USERS: "/admin/users",
    LOGS: "/admin/logs",
    SYSTEM_HEALTH: "/admin/system-health",
    SETTINGS: "/admin/settings",
  },

  NOT_FOUND: "*",
} as const;