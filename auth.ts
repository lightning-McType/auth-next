import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		credentials({
			credentials: {},
			async authorize(credentials) {
				let user = null;

				user = {
					id: '1',
					name: 'Sarthak Verma',
					email: 'sarthak.verma@gmail.com',
				};

				if (!user) {
					console.log('Invalid Credentials');
					return null;
				}

				return user; 
			},
		}),
	],
});
