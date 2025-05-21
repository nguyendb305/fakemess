import { useTranslations } from 'next-intl';

export default function ChatGPTContent() {
  const t = useTranslations('chatgptContent');

  return (
    <div className="container p-4 mx-auto">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="container mx-auto max-w-3xl py-8">
          <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
          
          {/* What is section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('whatIs.title')}</h2>
            <div className="space-y-4 text-gray-700">
              <p>{t('whatIs.description1')}</p>
              <p>{t('whatIs.description2')}</p>
              <p>{t('whatIs.description3')}</p>
            </div>
          </section>

          {/* Why use section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('whyUse.title')}</h2>
<ul className="space-y-4 text-gray-700">
                  <li className="text-base">{t('whyUse.features.authentic')}</li>
                  <li className="text-base">{t('whyUse.features.efficient')}</li>
                  <li className="text-base">{t('whyUse.features.browser')}</li>
                  <li className="text-base">{t('whyUse.features.privacy')}</li>
                  <li className="text-base">{t('whyUse.features.versatile')}</li>
                  </ul>
          </section>

          {/* Key features section */}
          <section className="mb-8">
            <h2 className="text-2xl mb-4">{t('keyFeatures.title')}</h2>
            <div className="pl-6 space-y-3 text-gray-700">
              <div className="flex">
               
                <div>
                  {t('keyFeatures.features.interface')}
                </div>
              </div>
              <div className="flex">
                
                <div>
                 {t('keyFeatures.features.formatting.title')}
                  <div className="mt-2 pl-4 space-y-2">
                    {t.raw('keyFeatures.features.formatting.items').map((item: string, index: number) => (
                      <div key={index}>• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex">
               
                <div>
                  {t('keyFeatures.features.conversation.title')}
                  <div className="mt-2 pl-4 space-y-2">
                    {t.raw('keyFeatures.features.conversation.items').map((item: string, index: number) => (
                      <div key={index}>• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex">
               
                <div>
{t('keyFeatures.features.export')}
                </div>
              </div>
            </div>
          </section>

          {/* How to use section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('howToUse.title')}</h2>
            <div className="pl-6 space-y-4 text-gray-700">
              <div className="flex">
                <span className="mr-2">1.</span>
                <div>
                  <strong>{t('howToUse.steps.start.title')}</strong>
                  <p className="mt-1">{t('howToUse.steps.start.description')}</p>
                </div>
              </div>
              <div className="flex">
                <span className="mr-2">2.</span>
                <div>
                  <strong>{t('howToUse.steps.add.title')}</strong>
                  <p className="mt-1">{t('howToUse.steps.add.description')}</p>
                  <div className="mt-2 pl-4 space-y-1">
                    {t.raw('howToUse.steps.add.items').map((item: string, index: number) => (
                      <div key={index}>• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="mr-2">3.</span>
                <div>
                  <strong>{t('howToUse.steps.format.title')}</strong>
                  <p className="mt-1">{t('howToUse.steps.format.description')}</p>
                </div>
              </div>
              <div className="flex">
                <span className="mr-2">4.</span>
                <div>
                  <strong>{t('howToUse.steps.export.title')}</strong>
                  <p className="mt-1">{t('howToUse.steps.export.description')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Best practices section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('bestPractices.title')}</h2>
            <div className="pl-6 space-y-3 text-gray-700">
              <div className="flex">
                
                <div>
                  <strong>{t('bestPractices.sections.structure.title')}</strong>
                  <div className="mt-2 pl-4 space-y-2">
                    {t.raw('bestPractices.sections.structure.items').map((item: string, index: number) => (
                      <div key={index}>• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex">
                
                <div>
                  {t('bestPractices.sections.formatting.title')}
                  <div className="mt-2 pl-4 space-y-2">
                    {t.raw('bestPractices.sections.formatting.items').map((item: string, index: number) => (
                      <div key={index}>• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            
            </div>
          </section>

          {/* Use cases section */}
          <section className="mb-8">
            <h2 className="text-2xl mb-4">{t('useCases.title')}</h2>
            <ul className="space-y-2 text-gray-700">
                 <li className="text-base">{t('useCases.cases.education')}</li>
                 <li className="text-base">{t('useCases.cases.social')}</li>
                 <li className="text-base">{t('useCases.cases.documentation')}</li>
                 <li className="text-base">{t('useCases.cases.mockups')}</li>
                 <li className="text-base">{t('useCases.cases.content')}</li>
            </ul>
          </section>

          {/* Privacy section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.title')}</h2>
            <div className="space-y-4 text-gray-700">
              <p>{t('privacy.description1')}</p>
              <p>{t('privacy.description2')}</p>
              <div className="pl-6 space-y-3">
                {t.raw('privacy.measures').map((measure: string, index: number) => (
                  <ul key={index}>
                    <li className="text-base">{measure}</li>
                  </ul>
                ))}
              </div>
              <p>{t('privacy.description3')}</p>
            </div>
          </section>

          {/* FAQ section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('faq.title')}</h2>
            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">{t('faq.questions.different.question')}</h3>
                <p>{t('faq.questions.different.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('faq.questions.free.question')}</h3>
                <p>{t('faq.questions.free.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('faq.questions.account.question')}</h3>
                <p>{t('faq.questions.account.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('faq.questions.commercial.question')}</h3>
                <p>{t('faq.questions.commercial.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('faq.questions.code.question')}</h3>
                <p>{t('faq.questions.code.answer')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('faq.questions.messages.question')}</h3>
                <p>{t('faq.questions.messages.answer')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}