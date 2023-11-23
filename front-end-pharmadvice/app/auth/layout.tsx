// app/auth/layout.tsx
import React, { ReactNode } from 'react'
import { Prompt } from 'next/font/google';
import ToasterContext from '@/app/context/ToasterContext'

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
		<ToasterContext />
		{children}
		</body>
		</html>
	);
}

export default AuthLayout;