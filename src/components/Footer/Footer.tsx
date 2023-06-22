/* eslint-disable no-alert */
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import * as S from './Footer.styles';

export const Footer: FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmitEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSending(true);

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setError(true);
      setSending(false);
      return;
    }

    fetch('api/mailingList', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail: email }),
    })
      .then((result) => {
        if (result.status === 200) {
          setSending(false);
          setError(false);
          setEmail('');
          toast('Your email address has been added successfully.');
        }
      })
      .catch(() => {
        toast('Opps, something went wrong.');
        setSending(false);
      });
    // send req
  };

  return (
    <S.Footer>
      <S.Wrapper>
        <S.Main>
          <S.Block>
            <S.LogoBlock>
              <Image
                src="/assets/svg/logo-white.svg"
                width={134}
                height={44}
                alt="logo"
              />
            </S.LogoBlock>
            <Typography color="lightGray">
              Truzt Insurance
              <br />
              AG Rosenbergstrasse 51, 9000 St Gallen, Switzerland
            </Typography>
            <S.LinksBlock>
              <Link
                href="https://truztlegal.s3.amazonaws.com/T%26C_truzt.pdf"
                className="text-link"
              >
                <S.TextLink size="medium">Terms of use</S.TextLink>
              </Link>
              <Link
                href="https://truztlegal.s3.amazonaws.com/Privacy_truzt.pdf"
                className="text-link"
              >
                <S.TextLink size="medium">Privacy Policy</S.TextLink>
              </Link>
            </S.LinksBlock>
          </S.Block>

          <S.Block>
            <S.StayTouchWrapper>
              <S.StayTitle size="medium" color="white">
                Stay In Touch:
              </S.StayTitle>
              <S.Form>
                <S.Input
                  type="email"
                  className={error ? 'isInvalid' : ''}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
                <S.InputButton onClick={handleSubmitEmail}>
                  {sending ? 'Sending...' : 'Subscribe'}
                </S.InputButton>
              </S.Form>
              <S.LeftFrame name="footer-form1" />
              <S.RightTopFrame name="footer-form2" />
              <S.RightBottomFrame name="footer-form3" />
            </S.StayTouchWrapper>
          </S.Block>
          <S.Block>
            <S.ContactWrapper>
              <S.ContactTitle color="white" size="medium">
                Contact us:
              </S.ContactTitle>
              <S.LinkBox>
                {/* <Link href="/">
                  <S.IconLink>
                    <Icon name="facebook" />
                  </S.IconLink>
                </Link>

                <Link href="/">
                  <S.IconLink>
                    <Icon name="twitter" />
                  </S.IconLink>
                </Link> */}

                <S.IconLink
                  href="https://www.linkedin.com/company/truzt-insurance/"
                  target="_blank"
                >
                  <Icon name="linkedin" />
                </S.IconLink>

                <S.IconLink
                  href="https://t.me/+4PNL45FFDHRkNDgx"
                  target="_blank"
                >
                  <Icon name="telegram" />
                </S.IconLink>
              </S.LinkBox>

              <S.AddresPhoneBox className="mb" href="tel:+41782261584">
                <S.AddresIcon name="phone" />
                <S.AddresTypography color="lightGray" size="mediumBold">
                  +41 782 2615 84
                </S.AddresTypography>
              </S.AddresPhoneBox>

              <S.AddresPhoneBox href="mailto:hello@truzt.io">
                <S.AddresIcon name="letter" />
                <S.AddresTypography color="lightGray" size="mediumBold">
                  hello@truzt.io
                </S.AddresTypography>
              </S.AddresPhoneBox>
            </S.ContactWrapper>
          </S.Block>
        </S.Main>
      </S.Wrapper>
      <S.Bottom>
        <Typography color="lightGray">
          © 2023 truzt insurance AG. All rights reserved.
        </Typography>
      </S.Bottom>
    </S.Footer>
  );
};
