import React, { useCallback, useState, useRef } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import { Modal } from '@/components/molecules/Modal'

export type ModalProps = {
  children?: React.ReactNode
}

export type PutModalProps = () => [
  _ModalWrapper: React.FC<{ children: React.ReactNode }>,
  open: () => void,
  close: () => void,
  modalState: boolean,
  ref: React.MutableRefObject<HTMLDivElement | null>
]

export const PutModal: PutModalProps = () => {
  const [modalState, setModalState] = useState(false)
  const ref = useRef(null)

  const open = useCallback(() => {
    setModalState(true)
  }, [setModalState])
  const close = useCallback(() => {
    setModalState(false)
  }, [setModalState])

  const _ModalWrapper: React.FC<ModalProps> = useCallback(
    ({ children }) => {
      const ModalComponent = (
        <Modal state={modalState} onClose={close} modalRef={ref}>
          {children}
        </Modal>
      )
      if (typeof document != 'undefined') {
        return ReactDOM.createPortal(ModalComponent, document.body)
      }
      return ModalComponent
    },
    [modalState, close]
  )

  return [_ModalWrapper, open, close, modalState, ref]
}
