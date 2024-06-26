import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest){
    const session = await getToken ({req, secret: process.env.NEXTAUTH_SECRET}) as { user: { role: string } } | null;

    if (!session){
        const requestedPage = req.nextUrl.pathname;
        const url = req.nextUrl.clone();
        url.pathname = `/auth/login`;
        url.search = `p=${ requestedPage }`;

        return NextResponse.redirect (url);
    }

    if (req.nextUrl.pathname.startsWith('/admin')) {
        if (session.user.role !== 'ADMIN') {
            return NextResponse.redirect (new URL('/', req.url));
        }
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin(.*)'],
}