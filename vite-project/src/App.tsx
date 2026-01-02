import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { WhatsAppFloatingButton } from '@/components/whatsapp/WhatsAppFloatingButton';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppFloatingButton />
    </>

  );
}

export default App;
