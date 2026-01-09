'use client';

import { useState } from 'react';
import FloatingMailButton from './FloatingMailButton';
import FloatingAIButton from './FloatingAIButton';
import WhatsAppModal from './WhatsAppModal';

export default function ClientProviders() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  return (
    <>
      <FloatingAIButton />
      <FloatingMailButton onClick={() => setIsWhatsAppModalOpen(true)} />
      <WhatsAppModal 
        isOpen={isWhatsAppModalOpen} 
        onClose={() => setIsWhatsAppModalOpen(false)} 
      />
    </>
  );
}
