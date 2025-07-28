import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import MenuHierarchical from './MenuHierarchical'

/**
 * 사이트 상단
 * @returns
 */
export const Header = props => {
  return (
    <>
      <header className='w-full px-8 h-20 z-30 flex lg:flex-row md:flex-col justify-center items-center'>
        {/* 왼쪽 로고 */}
        <Link
          href='/'
          className='logo whitespace-nowrap text-2xl md:text-3xl text-gray-dark no-underline flex items-center'>
          {siteConfig('TITLE')}
        </Link>

        {/* 오른쪽에 3단계 메뉴 사용 */}
        <div className='ml-6 mt-7'>
          <MenuHierarchical {...props} />
        </div>
      </header>
    </>
  )
}
