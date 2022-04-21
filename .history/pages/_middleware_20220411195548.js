import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {

    // Token.visible = TRUE, if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET })

    const { pathname } = req.nextUrl

    // Allow the requests, if this snippet is TRUE (if token exits)
    if(pathname.includes('/api/auth') || token) {
        return NextResponse.next()
    }

        // Redirect back to /login if token = 0
    if(!token && pathname !== '/login') {
        return NextResponse.redirect('/login')
    }
        
}
