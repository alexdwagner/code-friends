import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const clientId = process.env.GOOGLE_CLIENT_ID!;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
    CredentialsProvider({
      name: 'Local Account',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Check if credentials are defined
        if (!credentials) return null;

        // Dummy check, replace with real authentication later
        if (credentials.email === "test@example.com" && credentials.password === "password") {
            return { id: '1', email: "test@example.com", name: "Test User" }; // Return a user object
        }
        return null; // Return null if authentication fails
      }
    }),
  ],
  // Add custom configurations if needed
});
