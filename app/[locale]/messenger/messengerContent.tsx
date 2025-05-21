import { useTranslations } from 'next-intl';

const MessengerContent = () => {
  const t = useTranslations('messengerContent');

  return (
    <div className="container p-4 mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg">
            <div className="container mx-auto max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('whatIs.title')}</h2>
        <p className="text-gray-700 mb-4">
          {t('whatIs.description1')}
        </p>
        <p className="text-gray-700 mb-4">
          {t('whatIs.description2')}
        </p>
        <p className="text-gray-700">
          {t('whatIs.description3')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('whyUse.title')}</h2>
        <ul className="pl-6 space-y-3 text-gray-700">
          <li className="text-base">
            <strong>{t('whyUse.features.professional')}</strong>
            {t('whyUse.features.professional1')}
          </li>
          <li className="text-base">
            <strong>{t('whyUse.features.efficient')}</strong>
            {t('whyUse.features.efficient1')}
          </li>
          <li className="text-base">
            <strong>{t('whyUse.features.browser')}</strong>
            {t('whyUse.features.browser1')}
          </li>
          <li className="text-base">
            <strong>{t('whyUse.features.privacy')}</strong>
            {t('whyUse.features.privacy1')}
          </li>
          <li className="text-base">
            <strong>{t('whyUse.features.versatile')}</strong>
            {t('whyUse.features.versatile1')}
          </li>
          
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('keyFeatures.title')}</h2>
        <div className="pl-6 space-y-3 text-gray-700">
         
            <p>  <strong>{t('keyFeatures.features.uiModes')}</strong>
              {t('keyFeatures.features.uiModes1')}</p>
          
              <p>  <strong>{t('keyFeatures.features.messages')}</strong>
              {t('keyFeatures.features.messages1')}</p>
          
              <p><strong>{t('keyFeatures.features.styling.title')}</strong></p>
              <ul>
                {(t.raw('keyFeatures.features.styling.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
            
             
              <p><strong>{t('keyFeatures.features.profile.title')}</strong></p>
              <ul>
                {(t.raw('keyFeatures.features.profile.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>

              <p><strong>{t('keyFeatures.features.messageFeatures.title')}</strong></p>
              <ul>
                {(t.raw('keyFeatures.features.messageFeatures.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
            
              <p><strong>{t('keyFeatures.features.export')}</strong>
              {t('keyFeatures.features.export1')}</p>

        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('advancedCustomization.title')}</h2>
        <div className="pl-6 space-y-3 text-gray-700">
        
              <p><strong>{t('advancedCustomization.features.messageStyling.title')}</strong></p>
              <ul>
                {(t.raw('advancedCustomization.features.messageStyling.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
            
              <p><strong>{t('advancedCustomization.features.profileManagement.title')}</strong></p>
              <ul>
                {(t.raw('advancedCustomization.features.profileManagement.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
            
              <p><strong>{t('advancedCustomization.features.uiCustomization.title')}</strong></p>
              <ul>
                {(t.raw('advancedCustomization.features.uiCustomization.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('howToUse.title')}</h2>
        <div className="pl-6 space-y-4 text-gray-700">
      
              <p><strong>{t('howToUse.steps.uiMode.title')}</strong></p>
              <p>{t('howToUse.steps.uiMode.description')}</p>
       
              <p><strong>{t('howToUse.steps.profiles.title')}</strong></p>
              <p>{t('howToUse.steps.profiles.description')}</p>
           
              <p><strong>{t('howToUse.steps.conversation.title')}</strong></p>
              <ul>
                {(t.raw('howToUse.steps.conversation.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
            
              <p><strong>{t('howToUse.steps.seenStatus.title')}</strong></p>
              <p>{t('howToUse.steps.seenStatus.description')}</p>
           
              <p><strong>{t('howToUse.steps.export.title')}</strong></p>
              <p>{t('howToUse.steps.export.description')}</p>
           
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('bestPractices.title')}</h2>
        <div className="pl-6 space-y-3 text-gray-700">
       
              <p><strong>{t('bestPractices.sections.timing.title')}</strong></p>
              <ul>
                {(t.raw('bestPractices.sections.timing.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
            
              <p><strong>{t('bestPractices.sections.flow.title')}</strong></p>
              <ul>
                {(t.raw('bestPractices.sections.flow.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
      
            
              <p><strong>{t('bestPractices.sections.visual.title')}</strong></p>
              <ul>
                {(t.raw('bestPractices.sections.visual.items') as string[]).map((item: string, index: number) => (
                  <li className="text-base" key={index}>{item}</li>
                ))}
              </ul>
            
           
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('tips.title')}</h2>
        <ul className="pl-6 space-y-3 text-gray-700">
          {(t.raw('tips.items') as string[]).map((item: string, index: number) => (
            <li className="text-base" key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('useCases.title')}</h2>
        <div className="pl-6 space-y-3 text-gray-700">
        <p><strong>{t('useCases.cases.social')}</strong>
        {t('useCases.cases.social1')}</p>
        <p><strong>{t('useCases.cases.marketing')}</strong>
        {t('useCases.cases.marketing1')}</p>
        <p><strong>{t('useCases.cases.education')}</strong>
        {t('useCases.cases.education1')}</p>
        <p><strong>{t('useCases.cases.mockups')}</strong>
        {t('useCases.cases.mockups1')}</p>
        <p><strong>{t('useCases.cases.content')}</strong>
        {t('useCases.cases.content1')}</p>
        
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('privacy.title')}</h2>
        <div className="text-gray-700 mb-4">
          <p>{t('privacy.description1')}</p>
          <p>{t('privacy.description2')}</p>
          <ul className="pl-6 space-y-3 text-gray-700">
            {(t.raw('privacy.measures') as string[]).map((item: string, index: number) => (
              <li className="text-base" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <p>{t('privacy.description3')}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('faq.title')}</h2>
        <div className="space-y-4 text-gray-700">
          <div>
       <p><strong>{t('faq.questions.free.question')}</strong></p>
       <p>{t('faq.questions.free.answer')}</p>
       </div>
       <div>
       <p><strong>{t('faq.questions.account.question')}</strong></p>
       <p>{t('faq.questions.account.answer')}</p>
       </div>
       <div>
       <p><strong>{t('faq.questions.commercial.question')}</strong></p>
       <p>{t('faq.questions.commercial.answer')}</p>
       </div>
       <div>
       <p><strong>{t('faq.questions.formats.question')}</strong></p>
       <p>{t('faq.questions.formats.answer')}</p>
       </div>
       <div>
       <p><strong>{t('faq.questions.messages.question')}</strong></p>
       <p>{t('faq.questions.messages.answer')}</p>
       </div>
       </div>
      </section>
      </div>
      </div>
    </div>
  );
};

export default MessengerContent;