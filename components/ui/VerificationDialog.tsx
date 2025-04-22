"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '@/app/providers/language-provider';
import Image from 'next/image';

interface VerificationDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const StyledCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 32rem;
  text-align: center;
  direction: rtl;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardImage = styled.div`
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button<{ primary?: boolean }>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.2s;

  ${props => props.primary ? `
    background-color: #dc2626;
    color: white;
    border-color: transparent;
    
    &:hover {
      background-color: #b91c1c;
    }
  ` : `
    background-color: white;
    color: #374151;
    border-color: #d1d5db;
    
    &:hover {
      background-color: #f3f4f6;
    }
  `}
`;

export const VerificationDialog: React.FC<VerificationDialogProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  confirmBtnText,
  cancelBtnText,
}) => {
  const { t, dictionary } = useLanguage();
  const [step, setStep] = useState(1);

  const handleConfirmStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onConfirm();
      setStep(1);
    }
  };

  const handleCancel = () => {
    onCancel();
    setStep(1);
  };

  if (!isOpen) return null;

  const messages = {
    step1: {
      title: title || dictionary.female_verification.title,
      text: dictionary.female_verification.step1_text,
      confirmBtn: confirmBtnText || dictionary.female_verification.confirm_btn,
      cancelBtn: cancelBtnText || dictionary.female_verification.cancel_btn,
    },
    step2: {
      title: title || dictionary.female_verification.second_title,
      text: dictionary.female_verification.step2_text,
      confirmBtn: confirmBtnText || dictionary.female_verification.final_confirm_btn,
      cancelBtn: cancelBtnText || dictionary.female_verification.cancel_btn,
    },
  };

  const currentStep = step === 1 ? messages.step1 : messages.step2;

  return (
    <Overlay onClick={handleCancel}>
      <StyledCard onClick={(e) => e.stopPropagation()}>
        <CardHeader>
          <CardImage>
            <svg
              aria-hidden="true"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              width={48}
              height={48}
              style={{
                color: "#dc2626",
                backgroundColor: "#fee2e2",
                padding: "0.75rem",
                borderRadius: "9999px",
              }}
            >
              <path
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </CardImage>
          <h2 className="text-xl font-bold">{currentStep.title}</h2>
        </CardHeader>
        <CardContent>
          <p>{currentStep.text}</p>
        </CardContent>
        <CardActions>
          <Button primary onClick={handleConfirmStep}>
            {currentStep.confirmBtn}
          </Button>
          <Button onClick={handleCancel}>
            {currentStep.cancelBtn}
          </Button>
        </CardActions>
      </StyledCard>
    </Overlay>
  );
};

export default VerificationDialog; 