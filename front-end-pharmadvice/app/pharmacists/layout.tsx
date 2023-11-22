import '../assets/style/globals.css';
import { Prompt } from 'next/font/google';
import React from "react";

const prompt = Prompt({
	weight : ['500', '600', '700'],
	subsets: [ 'latin' ]
})

export const metadata = {
	title: 'Фармацевты',
}

export default function RootLayout({
																		 children,
																	 }) {
	return (
		<html lang="en">
		<body className={prompt.className}>{children}</body>
		</html>
	)
}