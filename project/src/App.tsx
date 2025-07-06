import React from 'react';
import TabNavigation from './components/TabNavigation';
import ContentTab from './components/ContentTab';
import SupportTab from './components/SupportTab';
import FAQTab from './components/FAQTab';
import AvaliacoesTab from './components/AvaliacoesTab';
import ProfileTab from './components/ProfileTab';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeTab, setActiveTab] = React.useState('conteudo');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'conteudo':
        return <ContentTab />;
      case 'suporte':
        return <SupportTab />;
      case 'faq':
        return <FAQTab />;
      case 'avaliacoes':
        return <AvaliacoesTab />;
      case 'perfil':
        return <ProfileTab />;
      default:
        return <ContentTab />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderActiveTab()}
      <WhatsAppButton />
    </div>
  );
}

export default App;