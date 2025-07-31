import LazyImage from './LazyImage'

/**
 * notion의 아이콘 icon
 * emoji일 수도 있고 svg일 수도 있으며 이미지일 수도 있음
 * @returns
 */
const NotionIcon = ({ icon }) => {
  if (!icon) {
    return <></>
  }

  if (icon.startsWith('http') || icon.startsWith('data:')) {
    return <LazyImage src={icon} className='w-8 h-8 my-auto inline mr-1'/>
  }

  return <span className='mr-1'>{icon}</span>
}

export default NotionIcon
