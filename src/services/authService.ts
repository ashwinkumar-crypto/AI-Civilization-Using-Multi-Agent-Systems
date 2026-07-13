import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";
import { AuthUser, UserRole } from "@/types/user.types";

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

function mapFirebaseUser(user: User, role: UserRole): AuthUser {
  const name = user.displayName || user.email?.split("@")[0] || "User";
  return {
    id: user.uid,
    name,
    email: user.email || "",
    role,
    avatarInitials: name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase(),
    photoURL: user.photoURL,
  };
}

export const authService = {
  async loginWithGoogle(): Promise<AuthUser> {
    const result = await signInWithPopup(auth, googleProvider);

    if (result.user.email === ADMIN_EMAIL) {
      await signOut(auth);
      throw new Error("This account is reserved for administrator email/password login.");
    }

    return mapFirebaseUser(result.user, "researcher");
  },

  async loginAsAdmin(email: string, password: string): Promise<AuthUser> {
    if (email !== ADMIN_EMAIL) {
      throw new Error("This email is not authorized for administrator access.");
    }
    const result = await signInWithEmailAndPassword(auth, email, password);
    return mapFirebaseUser(result.user, "admin");
  },

  async logout(): Promise<void> {
    await signOut(auth);
  },

  onAuthChange(callback: (user: AuthUser | null) => void): () => void {
    return onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        callback(null);
        return;
      }
      const role: UserRole = firebaseUser.email === ADMIN_EMAIL ? "admin" : "researcher";
      callback(mapFirebaseUser(firebaseUser, role));
    });
  },
};
