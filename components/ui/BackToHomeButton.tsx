import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/providers/language-provider";
import styled from 'styled-components';

const BackToHomeButton = () => {
  const { t } = useLanguage();
  
  return (
    <Link href="/" passHref>
      <StyledWrapper>
        <button className="button">
          <div className="blob1" />
          <div className="blob2" />
          <div className="inner">{t('navigation.backToSite')}</div>
        </button>
      </StyledWrapper>
    </Link>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
  }
  
  .button::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
  }

  .blob1 {
    position: absolute;
    width: 70px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #3fe9ff,
      #0000ff80,
      transparent
    );
    box-shadow: -10px 10px 30px #0051ff2d;
  }

  .inner {
    padding: 12px 20px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
  }
  
  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
  }
`;

export default BackToHomeButton;
