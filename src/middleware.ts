import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { getLocales } from '@/locales/dictionary'
import { defaultLocale } from '@/locales/config'

export default async function middleware(request: NextRequest) {
  const headers = {
    'accept-language': request.headers.get('accept-language') ?? '',
  }
  const languages = new Negotiator({ headers }).languages()
  const locales = getLocales()

  const locale = match(languages, locales, defaultLocale)
  const response = NextResponse.next()
  if (!request.cookies.get('locale')) {
    response.cookies.set('locale', locale)
  }

  /*
   * Match all request paths except for the ones starting with:
   * - login
   * - register
   */
  // if (![
  //   '/login',
  //   '/register',
  // ].includes(request.nextUrl.pathname)) {
  //   const res: NextMiddlewareResult = await withAuth(
  //     // Response with local cookies
  //     () => response,
  //     {
  //     // Matches the pages config in `[...nextauth]`
  //       pages: {
  //         signIn: '/',
  //       },
  //     },
  //   )(request as NextRequestWithAuth, event)
  //   return res
  // }

  return response
}
