/* eslint-disable no-alert */
import classNames from 'classnames';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { AnimatedTitle, InputOutline } from '@/components';
import { variantsTitle } from '@/utils/animatedVariant.utils';

import * as S from './GetInToch.styles';

export interface GetInTochProps {
  className?: string;
}

type MessageData = {
  name: string;
  email: string;
  message: string;
};

const variants: Variants = {
  offscreenLPart: {
    x: -50,
    opacity: 0,
  },
  onscreenLPart: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
  offscreenButton: {
    opacity: 0,
  },
  onscreenButton: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.2,
    },
  },
  offscreenRPart: {
    x: 300,
    opacity: 0,
  },
  onscreenRPart: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2,
    },
  },
};

export const GetInToch: FC<GetInTochProps> = ({ className }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const initialMessageData = {
    name: '',
    email: '',
    message: '',
  };

  const [messageData, setMessageData] =
    useState<MessageData>(initialMessageData);

  const [errors, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const { name, email, message } = messageData;

  const handleChangeData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessageData({
      ...messageData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsDisabled(true);

    const isInvalid = Object.entries(messageData).map(([k, v]) =>
      v.length === 0 ? [k, true] : [k, false]
    );
    const invalidEmail = !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    setError({
      ...Object.fromEntries(isInvalid),
      email: invalidEmail,
    });

    if (isInvalid.some((item) => item[1]) || invalidEmail) return;

    await fetch('/api/sendgrid', {
      body: JSON.stringify(messageData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => {
        setMessageData(initialMessageData);
        if (res.status !== 200) {
          toast('Sorry email was not sent!');
          return;
        }
        toast(
          'Thank you for submitting your form! We will get in touch with you as soon as possible.'
        );
        setIsDisabled(false);
      })
      .catch(() => {
        setMessageData(initialMessageData);
        toast('Sorry email was not sent!');
      });
  };

  return (
    <S.Root className={className}>
      <S.Wrapper>
        <S.Box>
          <S.FormGetInToch>
            <motion.div
              initial="offscreenHeader"
              whileInView="onscreenHeader"
              viewport={{ once: true }}
              variants={variantsTitle}
            >
              <AnimatedTitle title="Get" underline="in touch" />
            </motion.div>
            <S.FormBody
              initial="offscreenLPart"
              whileInView="onscreenLPart"
              viewport={{ once: true }}
              variants={variants}
            >
              <S.InputGroup>
                <S.LabelInput htmlFor="name">Name</S.LabelInput>
                <InputOutline
                  className={classNames({ isInValid: errors.name })}
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChangeData}
                  placeholder="Your name"
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.LabelInput htmlFor="email">Email</S.LabelInput>
                <InputOutline
                  className={classNames({ isInValid: errors.email })}
                  name="email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleChangeData}
                  placeholder="example@gmail.com"
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.LabelInput htmlFor="message">Message</S.LabelInput>
                <S.Textarea
                  className={classNames({ isInValid: errors.message })}
                  id="message"
                  value={message}
                  name="message"
                  onChange={handleChangeData}
                  placeholder="Type your message..."
                />
              </S.InputGroup>

              <motion.div
                initial="offscreenButton"
                whileInView="onscreenButton"
                viewport={{ once: true }}
                variants={variants}
              >
                <S.ButtonSubmit
                  disabled={isDisabled}
                  onClick={handleSubmit}
                  hasArrow={!isDisabled}
                >
                  {!isDisabled ? 'Send Message' : 'Sending...'}
                </S.ButtonSubmit>
              </motion.div>
            </S.FormBody>
          </S.FormGetInToch>
        </S.Box>
        <S.PictureBox
          initial="offscreenRPart"
          whileInView="onscreenRPart"
          viewport={{ once: true }}
          variants={variants}
        >
          <S.Picture>
            <Image fill alt="Picture" src="/assets/svg/form-picture.svg" />
          </S.Picture>
        </S.PictureBox>
      </S.Wrapper>
      <S.BgPicture>
        <Image
          fill
          alt="Backgound lines"
          src="/assets/svg/getTochBg.svg"
          priority
        />
      </S.BgPicture>
    </S.Root>
  );
};
