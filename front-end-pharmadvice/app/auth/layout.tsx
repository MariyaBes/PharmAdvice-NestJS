// app/auth/layout.tsx
import React, { ReactNode } from 'react'
import { Prompt } from 'next/font/google';

interface AuthLayoutProps {
	children: ReactNode;
}

const prompt = Prompt({
	weight: ['500', '600', '700'],
	subsets: ['latin'],
});

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
		<body className={prompt.className}>
		<main>{children}</main>
		</body>
		</html>
	);
}

export default AuthLayout;