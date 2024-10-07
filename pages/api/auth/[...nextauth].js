// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/', // Página de login
    signOut: '/', // Página de logout
    error: '/', // Página de erro
    verifyRequest: '/', // Página de verificação de email
    newUser: '/upload' // Redireciona novos usuários para a página de upload
  },
});

