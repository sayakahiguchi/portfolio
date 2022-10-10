import React, { memo } from 'react'
import { modalStyles, modalRecipie, modalVariants } from './Modal.css'
import Icon from '@/components/atoms/Icon'
import XIcon from '@/components/atoms/Icons/XIcon'
import { useBodyScrollLock } from '@/common/utils/useBodyScrollLock'

export type ModalProps = {
  state: boolean
  onClose: () => void
  children: React.ReactNode
  size?: 'medium' | 'small'
  className?: string
  modalRef: React.MutableRefObject<HTMLDivElement | null>
} & modalVariants

export const Modal: React.FC<ModalProps> = memo(
  ({ state, onClose, size, className, modalRef, children }) => {
    useBodyScrollLock(modalRef, state)
    if (state) {
      return (
        <div
          role="dialog"
          aria-modal
          ref={modalRef}
          className={modalStyles.container}
          onClick={onClose}
        >
          <div
            className={`${modalRecipie({
              size,
            })} ${className || ''}`}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {children}
            <div className={modalStyles.button}>
              <Icon
                element="button"
                type="button"
                svg
                size="small"
                src="/"
                alt="close"
                onClick={onClose}
              >
                <XIcon />
              </Icon>
            </div>
          </div>
        </div>
      )
    }
    return null
  }
)
Modal.displayName = 'Modal'
