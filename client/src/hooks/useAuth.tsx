import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<User, Error, LoginData>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<User, Error, RegisterData>;
};

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  email: string;
  password: string;
  name?: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('retplan_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing saved user:', e);
        localStorage.removeItem('retplan_user');
      }
    }
    setIsLoading(false);
  }, []);

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple demo credentials - in real app this would be server validation
      if (credentials.email === 'demo@retplan.io' && credentials.password === 'password') {
        return {
          id: '1',
          email: credentials.email,
          name: 'Demo User'
        };
      }
      
      // For any other email/password combo, create a demo account
      return {
        id: Math.random().toString(36).substring(2),
        email: credentials.email,
        name: 'RetPlan User'
      };
    },
    onSuccess: (user: User) => {
      setUser(user);
      localStorage.setItem('retplan_user', JSON.stringify(user));
      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: RegisterData) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        id: Math.random().toString(36).substring(2),
        email: credentials.email,
        name: credentials.name || 'RetPlan User'
      };
    },
    onSuccess: (user: User) => {
      setUser(user);
      localStorage.setItem('retplan_user', JSON.stringify(user));
      toast({
        title: "Account created!",
        description: "Welcome to RetPlan.io. Start planning your retirement!",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
    },
    onSuccess: () => {
      setUser(null);
      localStorage.removeItem('retplan_user');
      localStorage.removeItem('retplan_scenarios'); // Also clear scenarios
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Logout failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}