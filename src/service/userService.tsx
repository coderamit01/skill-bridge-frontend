import { cookies } from "next/headers";

const AUTH_URL = process.env.SERVER_URL || 'http://localhost:5000';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
}

interface Session {
  user: User;
  session: {
    id: string;
    userId: string;
    expiresAt: string;
    token: string;
  };
}

interface SessionResponse {
  data: Session | null;
  error: { message: string } | null;
}

export const userService = {
  getSession: async function (): Promise<SessionResponse> {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/api/auth/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (session === null) {
        return { data: null, error: { message: "Session is missing." } };
      }

      return { data: session, error: null };
    } catch (err) {
      console.error(err);
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
  getUser: async function() {
    const {data,error} = await this.getSession();
    if(error || !data){
      return false;
    }

    return {data: data.user, error: error}
  }
};