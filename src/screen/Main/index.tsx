import React, { FC, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsCameraVideoFill } from 'react-icons/bs'

import { DesktopCapturer, remote } from 'electron'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import {
  Main,
  Section,
  Dropdown,
  DropdownItem,
  DropdownItemContainer
} from './styles'

export const RecordArea: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdown, setIsDropdown] = useState(false)

  // const getVideoSources = async () => {
  //   const { Menu } = remote

  //   const inputSources = await DesktopCapturer.getSources({
  //     types: ['window', 'screen']
  //   })

  //   const videoOptionsMenu = Menu.buildFromTemplate(
  //     inputSources.map(source => {
  //       label: source.name,
  //       // click: () => selectSource(source)
  //     })
  //   )
  // }

  console.log('-----------------------------')
  // console.log(getVideoSources())
  console.log('-----------------------------')

  return (
    <Main>
      <Button
        onClick={() => setIsLoading(!isLoading)}
        hasIcon={true}
        loading={isLoading}
        icon={<BsCameraVideoFill />}
        color="green"
      >
        <svg
          className="logo"
          style={{ left: '16px' }}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect
            x="4.5"
            y="6.4635"
            width="23"
            height="21.5"
            fill="url(#pattern0)"
          />
          <circle
            cx="15.5"
            cy="15.5"
            r="12.5"
            stroke="#fff"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeDasharray="5 5"
          />
          <path
            d="M10.72 14.72C10.8213 14.72 10.896 14.7467 10.944 14.8C10.992 14.848 11.016 14.928 11.016 15.04V17.424C11.016 17.5467 10.9333 17.6587 10.768 17.76C10.608 17.856 10.408 17.9307 10.168 17.984C9.928 18.0373 9.69867 18.064 9.48 18.064C8.73333 18.064 8.18133 17.832 7.824 17.368C7.472 16.8987 7.296 16.1707 7.296 15.184C7.296 14.224 7.47467 13.5093 7.832 13.04C8.18933 12.5707 8.744 12.336 9.496 12.336C9.736 12.336 9.968 12.3653 10.192 12.424C10.416 12.4773 10.5973 12.5493 10.736 12.64C10.8747 12.7253 10.944 12.8133 10.944 12.904C10.944 12.9733 10.9147 13.0667 10.856 13.184C10.8027 13.3013 10.736 13.4053 10.656 13.496C10.576 13.5813 10.504 13.624 10.44 13.624C10.4187 13.624 10.3627 13.6053 10.272 13.568C10.1813 13.5253 10.08 13.4907 9.968 13.464C9.856 13.432 9.72267 13.416 9.568 13.416C9.22667 13.416 8.976 13.56 8.816 13.848C8.656 14.136 8.576 14.584 8.576 15.192C8.576 15.8427 8.65067 16.304 8.8 16.576C8.95467 16.8427 9.18133 16.976 9.48 16.976C9.608 16.976 9.71733 16.9653 9.808 16.944V15.776H9.4C9.32 15.776 9.26133 15.744 9.224 15.68C9.18667 15.616 9.168 15.5147 9.168 15.376V15.12C9.168 14.9813 9.18667 14.88 9.224 14.816C9.26133 14.752 9.32 14.72 9.4 14.72H10.72ZM12.2941 18.024C11.9847 18.024 11.8301 17.936 11.8301 17.76V12.64C11.8301 12.464 11.9847 12.376 12.2941 12.376H12.6301C12.9341 12.376 13.0861 12.464 13.0861 12.64V17.76C13.0861 17.936 12.9341 18.024 12.6301 18.024H12.2941ZM14.4278 18.016C14.1185 18.016 13.9638 17.9307 13.9638 17.76V12.72C13.9638 12.608 13.9878 12.528 14.0358 12.48C14.0838 12.4267 14.1585 12.4 14.2598 12.4H16.4598C16.5398 12.4 16.5985 12.432 16.6358 12.496C16.6731 12.56 16.6918 12.6613 16.6918 12.8V13.048C16.6918 13.1867 16.6731 13.288 16.6358 13.352C16.5985 13.416 16.5398 13.448 16.4598 13.448H15.2118V14.776H16.3878C16.4678 14.776 16.5265 14.808 16.5638 14.872C16.6011 14.936 16.6198 15.0373 16.6198 15.176V15.424C16.6198 15.5627 16.6011 15.664 16.5638 15.728C16.5265 15.792 16.4678 15.824 16.3878 15.824H15.2118V17.76C15.2118 17.9307 15.0571 18.016 14.7478 18.016H14.4278ZM17.8106 18.016C17.5013 18.016 17.3466 17.9307 17.3466 17.76V12.72C17.3466 12.608 17.3706 12.528 17.4186 12.48C17.4666 12.4267 17.5413 12.4 17.6426 12.4H19.8426C19.9226 12.4 19.9813 12.432 20.0186 12.496C20.056 12.56 20.0746 12.6613 20.0746 12.8V13.048C20.0746 13.1867 20.056 13.288 20.0186 13.352C19.9813 13.416 19.9226 13.448 19.8426 13.448H18.5946V14.776H19.7706C19.8506 14.776 19.9093 14.808 19.9466 14.872C19.984 14.936 20.0026 15.0373 20.0026 15.176V15.424C20.0026 15.5627 19.984 15.664 19.9466 15.728C19.9093 15.792 19.8506 15.824 19.7706 15.824H18.5946V17.76C18.5946 17.9307 18.44 18.016 18.1306 18.016H17.8106ZM22.0654 18.016C21.7508 18.016 21.5934 17.9307 21.5934 17.76V15.584L20.3614 12.744C20.3508 12.7227 20.3348 12.6907 20.3134 12.648C20.2974 12.6 20.2894 12.5653 20.2894 12.544C20.2894 12.496 20.3294 12.4587 20.4094 12.432C20.4948 12.4 20.6148 12.384 20.7694 12.384H21.1774C21.4388 12.384 21.5854 12.4347 21.6174 12.536L22.2414 14.504L22.8574 12.536C22.8734 12.4773 22.9188 12.4373 22.9934 12.416C23.0681 12.3947 23.1694 12.384 23.2974 12.384H23.6334C23.9694 12.384 24.1374 12.4373 24.1374 12.544C24.1374 12.5973 24.1188 12.664 24.0814 12.744L22.8494 15.608V17.76C22.8494 17.9307 22.6921 18.016 22.3774 18.016H22.0654Z"
            fill="#fff"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0" />
            </pattern>
            <image
              id="image0"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAArCAYAAAAHdLqEAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA"
            />
          </defs>
        </svg>
        New Gif
      </Button>
      <Dropdown onClick={() => setIsDropdown(!isDropdown)} tabIndex={1}>
        <section>
          Windows
          <AiFillCaretDown />
        </section>
        {isDropdown && (
          <Modal visible={isDropdown}>
            <DropdownItemContainer>
              <DropdownItem onClick={() => setIsDropdown(!isDropdown)}>
                Chrome - BRave
              </DropdownItem>
              <DropdownItem onClick={() => setIsDropdown(!isDropdown)}>
                Chrome - BRave
              </DropdownItem>
              <DropdownItem onClick={() => setIsDropdown(!isDropdown)}>
                Chrome - BRave
              </DropdownItem>
            </DropdownItemContainer>
          </Modal>
        )}
      </Dropdown>
      <Section></Section>
    </Main>
  )
}
