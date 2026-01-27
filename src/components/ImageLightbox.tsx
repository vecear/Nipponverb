import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ImageLightboxProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void
  children?: React.ReactNode
}

/**
 * 可點擊放大的圖片元件
 * 點擊圖片會顯示全螢幕燈箱
 */
const ImageLightbox = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  onError,
  children,
}: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  // 按 ESC 鍵關閉燈箱
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // 防止背景滾動
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* 可點擊的圖片容器 */}
      <div
        className={`cursor-zoom-in ${containerClassName}`}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleOpen()
          }
        }}
        aria-label={`查看 ${alt} 大圖`}
      >
        {children || (
          <img
            src={src}
            alt={alt}
            className={`transition-transform hover:scale-105 ${className}`}
            onError={onError}
          />
        )}
      </div>

      {/* 燈箱 Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-wave-deep/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={handleClose}
        >
          {/* 關閉按鈕 */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-washi/90 hover:bg-washi rounded-full text-wave-deep hover:text-vermilion transition-colors shadow-lg z-10"
            aria-label="關閉"
          >
            <X size={24} />
          </button>

          {/* 放大的圖片 */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-4 border-washi bg-washi"
            />
            {/* 圖片標題 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-wave-deep/80 to-transparent p-4 rounded-b-lg">
              <p className="text-washi text-center font-bold">{alt}</p>
            </div>
          </div>

          {/* 點擊任意處關閉提示 */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-washi/60 text-xs">
            點擊任意處或按 ESC 關閉
          </p>
        </div>
      )}
    </>
  )
}

export default ImageLightbox
