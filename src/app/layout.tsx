import NavMenu from "@/components/Navmenu";
import { Toaster } from "@/components/ui/sonner";
import AuthSessionProvider from "@/utils/AuthSessionProvider";
import TRPCProvider from "@/utils/trpc/TRPCProvider";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Complete Next App",
	description: "Generated by complete next app",
};

export default async function RootLayout({
	children,
	auth,
}: {
	children: React.ReactNode;
	auth: React.ReactNode;
}) {
	const session = await getServerSession();

	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthSessionProvider session={session}>
					<TRPCProvider>
						<NextTopLoader />
						<NavMenu />
						{children}
						{auth}
						<Toaster richColors theme="light" duration={3500} />
					</TRPCProvider>
				</AuthSessionProvider>
			</body>
		</html>
	);
}
