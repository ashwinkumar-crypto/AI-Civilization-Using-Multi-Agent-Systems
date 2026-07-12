import { AuthUser, LoginCredentials, UserRole } from "@/types/user.types";

interface DemoAccount {
  email: string;
  password: string;
  role: UserRole;
  name: string;
}

const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    email: "researcher@aicivilization.ai",
    password: "research123",
    role: "researcher",
    name: "Dr. Ariana Voss",
  },
  {
    email: "admin@aicivilization.ai",
    password: "admin123",
    role: "admin",
    name: "Marcus Chen",
  },
];

const AUTH_STORAGE_KEY = "aic_auth_user";

export const authService = {
  login(credentials: LoginCredentials): Promise<AuthUser> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const account = DEMO_ACCOUNTS.find(
          (acc) =>
            acc.email.toLowerCase() === credentials.email.toLowerCase() &&
            acc.password === credentials.password
        );

        if (!account) {
          reject(new Error("Invalid email or password. Please use the demo credentials provided."));
          return;
        }

        const user: AuthUser = {
          id: account.role === "admin" ? "usr-admin-001" : "usr-researcher-001",
          name: account.name,
          email: account.email,
          role: account.role,
          avatarInitials: account.name
            .split(" ")
            .map((n) => n[0])
            .join(""),
        };

        if (credentials.rememberMe) {
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        } else {
          sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        }

        resolve(user);
      }, 700);
    });
  },

  logout(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  },

  getStoredUser(): AuthUser | null {
    const raw =
      localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  },
};